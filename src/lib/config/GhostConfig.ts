import { ColorCustomizationConfig } from "./CustomColors";

type Source = "onload";

interface GhostConfig {
    source: Source;
    aliases?: {
        colors?: ColorCustomizationConfig,
    }
}

export default GhostConfig;