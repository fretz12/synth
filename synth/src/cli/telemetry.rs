use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};

use std::collections::HashMap;
use std::path::PathBuf;
use std::future::Future;
use std::error::Error;

use crate::utils::{version, META_OS};

use super::{Args, TelemetryCommand};

const API_KEY: &str = "L-AQtrFVtZGL_PjK2FbFLBR3oXNtfv8OrCD8ObyeBQo";
const EVENT_NAME: &str = "synth-command";

pub(crate) fn enable() -> Result<()> {
    TelemetryConfig::enable_telemetry()
}

pub(crate) fn disable() -> Result<()> {
    TelemetryConfig::disable_telemetry()
}

pub(crate) fn is_enabled() -> bool {
    TelemetryConfig::is_enabled()
}

pub async fn with_telemetry<F, Fut, T, E>(args: Args, func: F) -> Result<T, E>
where
    F: FnOnce(Args) -> Fut,
    Fut: Future<Output = Result<T, E>>,
    E: AsRef<dyn Error + 'static>
{
    let client = TelemetryClient::new();

    let command_name = match &args {
        Args::Init { .. } => "init",
        Args::Generate { .. } => "generate",
        Args::Import { .. } => "import",
        Args::Telemetry(TelemetryCommand::Enable) => "telemetry::enable",
        Args::Telemetry(TelemetryCommand::Disable) => "telemetry::disable",
        Args::Telemetry(TelemetryCommand::Status) => "telemetry::status"
    };

    func(args)
        .await
        .and_then(|success| client.success(command_name, success))
        .or_else(|err| client.failed(command_name, err))
}

#[derive(Serialize, Deserialize)]
struct TelemetryConfig {
    uuid: String,
}

impl TelemetryConfig {
    pub fn initialise() -> Self {
        Self::from_file().unwrap_or_else(|_| Self::new())
    }

    fn new() -> Self {
        Self {
            uuid: uuid::Uuid::new_v4().to_hyphenated().to_string(),
        }
    }

    fn from_file() -> Result<Self> {
        let file_contents = std::fs::read_to_string(Self::file_path()?)?;
        let tc = serde_json::from_str(&file_contents)?;
        Ok(tc)
    }

    fn synth_config_dir() -> Result<PathBuf> {
        let synth_config_dir = dirs::config_dir().ok_or_else(|| {
            anyhow!(
                "Could not find a configuration directory. Your operating system may not be supported."
            )
        })?;
        Ok(synth_config_dir.join("synth"))
    }

    fn file_path() -> Result<PathBuf> {
        Ok(Self::synth_config_dir()?.join("config.json"))
    }

    fn enable_telemetry() -> Result<()> {
	let config_dir = Self::synth_config_dir()?;
        if !config_dir.exists() {
            std::fs::create_dir_all(&config_dir)
		.with_context(|| anyhow!("Could not create the directory: {}", config_dir.display()))?;
        }
        if !Self::is_enabled() {
            let mut config_file_path = std::fs::OpenOptions::new()
                .write(true)
                .create(true)
                .open(Self::file_path()?)
                .map_err(|e| anyhow!("There was an issue enabling telemetry: {}", e))?;
            serde_json::to_writer_pretty(&mut config_file_path, &TelemetryConfig::new())?;
        }
        Ok(())
    }

    fn disable_telemetry() -> Result<()> {
        if Self::is_enabled() {
            std::fs::remove_file(Self::file_path()?)
                .map_err(|e| anyhow!("There was an issue disabling telemetry: {}", e))?;
        }
        Ok(())
    }

    fn is_enabled() -> bool {
        Self::file_path().map(|path| path.exists()).unwrap_or(false)
    }
}

enum CommandResult {
    Success,
    Failed,
}

impl ToString for CommandResult {
    fn to_string(&self) -> String {
        match self {
            CommandResult::Success => "success".to_string(),
            CommandResult::Failed => "failed".to_string(),
        }
    }
}

pub(crate) struct TelemetryClient {
    ph_client: posthog_rs::Client,
    uuid: String,
    synth_version: String,
    os: String,
    enabled: bool,
}

impl TelemetryClient {
    fn new() -> Self {
        let synth_version = version();
        let os = META_OS.to_string();

        Self {
            ph_client: posthog_rs::client(API_KEY),
            uuid: TelemetryConfig::initialise().uuid,
            synth_version,
            os,
            enabled: TelemetryConfig::is_enabled(),
        }
    }

    pub fn success<T, E>(&self, command_name: &str, output: T) -> Result<T, E> {
        self.send(command_name, CommandResult::Success)
            .or_else(|err| {
                info!("failed to push ok of command: {}", err);
                Ok(())
            })?;
        Ok(output)
    }

    pub fn failed<T, E>(&self, command_name: &str, error: E) -> Result<T, E>
    where
        E: AsRef<dyn Error + 'static>
    {
        self.send(command_name, CommandResult::Failed)
            .or_else(|err| {
                info!("failed to push err of command: {}", err);
                Ok(())
            })?;
        Err(error)
    }

    fn send(&self, command_name: &str, res: CommandResult) -> Result<()> {
        if !self.enabled {
            return Ok(());
        }

        let mut prop_map = HashMap::new();

        prop_map.insert("command".to_string(), command_name.to_string());
        prop_map.insert("success".to_string(), res.to_string());
        prop_map.insert("version".to_string(), self.synth_version.clone());
        prop_map.insert("os".to_string(), self.os.clone());

        let props = posthog_rs::Properties {
            distinct_id: self.uuid.clone(),
            props: prop_map,
        };

        let event = posthog_rs::Event {
            event: EVENT_NAME.to_string(),
            properties: props,
            timestamp: None,
        };

        if let Err(err) = self.ph_client.capture(event) {
            debug!("Failed to send message to PostHog. Error: {:?}", err);
        }

        Ok(())
    }
}
