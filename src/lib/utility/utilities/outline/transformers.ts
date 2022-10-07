import { SuffixSeparator } from "../../../common/types";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";

export const OutlineWidthTransformer = (suffix: string) => isNaN(+suffix) ? suffix : `${suffix}px`;

export const OutlineTransformer = (suffix: string) => {
    const [width = "1", color = "black", style = "solid"] = suffix.split(SuffixSeparator);
    return `${OutlineWidthTransformer(width)} ${style} ${ColorTransformer(color)}`;
};
