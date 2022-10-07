import { SuffixSeparator } from "../../../common/types";
import { TransitionPropertyMap, TransitionTimingFunctionMap } from "./suffixes";

export const TransitionTransformer = (suffix: string) => {
    const [property, duration = "150", ...timingFunction] = suffix.split(SuffixSeparator);
    return `${property} ${TransitionMsTransformer(duration)} ${timingFunction?.join("-") ?? "ease-linear"}`;
}

export const TransitionPropertyTransformer = (suffix: string) => TransitionPropertyMap[suffix] ?? suffix;

export const TransitionTimingFunctionTransformer = (suffix: string) => TransitionTimingFunctionMap[suffix] ?? suffix;

export const TransitionMsTransformer = (suffix: string) => `${suffix}ms`;
