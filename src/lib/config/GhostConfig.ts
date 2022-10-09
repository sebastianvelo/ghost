import { ColorCustomizationConfig } from "./CustomColors";

export type Source = "document" | "files" | "mock";
export type Output = "document" | "file";

interface GhostConfig {
  source?: Source;
  output?: Output;
  aliases?: {
    colors?: ColorCustomizationConfig,
  }
}

export default GhostConfig;
