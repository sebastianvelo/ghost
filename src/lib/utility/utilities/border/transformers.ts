import { SuffixSeparator } from "../../../common/types";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";

export const BorderRadiusTransformer = (suffix: string) => `${suffix}%`;

export const BorderTransformer = (suffix: string) => {
    const [width, color = "black", style = "solid"] = suffix.split(SuffixSeparator);
    return `${width ?? 1}px ${style} ${ColorTransformer(color)}`;
};
