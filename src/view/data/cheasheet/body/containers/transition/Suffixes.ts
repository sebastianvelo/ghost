import { TransitionPropertyMap, TransitionTimingFunctionMap } from "../../../../../../lib/app/utilities/transition/suffixes";

export const TransitionPropertySuffixes = Object.keys(TransitionPropertyMap);
export const TransitionTimingFunctionSuffixes = [...Object.keys(TransitionTimingFunctionMap), "x1-y1-x2-y2"];
