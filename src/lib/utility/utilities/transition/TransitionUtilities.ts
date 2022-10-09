import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import { TransitionMsTransformer, TransitionPropertyTransformer, TransitionTimingFunctionTransformer, TransitionTransformer } from "./transformers";

const TransitionUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.TRANSITION, PropertyCSS.TRANSITION, TransitionTransformer),
    ...SimpleUtility(GhostPrefix.TRANSITION_PROPERTY, PropertyCSS.TRANSITION_PROPERTY, TransitionPropertyTransformer),
    ...SimpleUtility(GhostPrefix.TRANSITION_DELAY, PropertyCSS.TRANSITION_DELAY, TransitionMsTransformer),
    ...SimpleUtility(GhostPrefix.TRANSITION_DURATION, PropertyCSS.TRANSITION_DURATION, TransitionMsTransformer),
    ...SimpleUtility(GhostPrefix.TRANSITION_TIMING_FUNCTION, PropertyCSS.TRANSITION_TIMING_FUNCTION, TransitionTimingFunctionTransformer),
};

export default TransitionUtilities;