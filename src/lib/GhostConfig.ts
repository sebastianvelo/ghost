import { ColorCustomizationConfig } from "./custom/CustomColors";

type Source = "onload";

interface GhostConfig {
    source: Source;
    aliases?: {
        colors?: ColorCustomizationConfig,
    }
}

export default GhostConfig;