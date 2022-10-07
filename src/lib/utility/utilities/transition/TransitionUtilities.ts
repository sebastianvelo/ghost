import { SuffixSeparator } from "../../../common/types";
import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";

export const TransitionPropertyMap: any = {
    all: "all",
    colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
};

export const TransitionTimingFunctionMap: any = {
    "ease-linear": "linear",
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    "ease-out": " cubic-bezier(0, 0, 0.2, 1)",
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
};

export const TransitionTransformer = (suffix: string) => {
    const [property, duration = "150", ...timingFunction] = suffix.split(SuffixSeparator);
    return `${property} ${TransitionMsTransformer(duration)} ${timingFunction?.join("-") ?? "ease-linear"}`;
}

export const TransitionPropertyTransformer = (suffix: string) => TransitionPropertyMap[suffix] ?? suffix;

export const TransitionTimingFunctionTransformer = (suffix: string) => TransitionTimingFunctionMap[suffix] ?? suffix;

export const TransitionMsTransformer = (suffix: string) => `${suffix}ms`;

const TransitionUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.TRANSITION, PropertyCSS.TRANSITION, TransitionTransformer),
    ...OneActionUtility(GhostPrefix.TRANSITION_PROPERTY, PropertyCSS.TRANSITION_PROPERTY, TransitionPropertyTransformer),
    ...OneActionUtility(GhostPrefix.TRANSITION_DELAY, PropertyCSS.TRANSITION_DELAY, TransitionMsTransformer),
    ...OneActionUtility(GhostPrefix.TRANSITION_DURATION, PropertyCSS.TRANSITION_DURATION, TransitionMsTransformer),
    ...OneActionUtility(GhostPrefix.TRANSITION_TIMING_FUNCTION, PropertyCSS.TRANSITION_TIMING_FUNCTION, TransitionTimingFunctionTransformer),
};

export default TransitionUtilities;