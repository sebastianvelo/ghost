import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import { TransitionMsTransformer, TransitionPropertyTransformer, TransitionTimingFunctionTransformer, TransitionTransformer } from "./transformers";

const TransitionUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.TRANSITION, PropertyCSS.TRANSITION, TransitionTransformer),
    ...OneDeclarationUtility(GhostPrefix.TRANSITION_PROPERTY, PropertyCSS.TRANSITION_PROPERTY, TransitionPropertyTransformer),
    ...OneDeclarationUtility(GhostPrefix.TRANSITION_DELAY, PropertyCSS.TRANSITION_DELAY, TransitionMsTransformer),
    ...OneDeclarationUtility(GhostPrefix.TRANSITION_DURATION, PropertyCSS.TRANSITION_DURATION, TransitionMsTransformer),
    ...OneDeclarationUtility(GhostPrefix.TRANSITION_TIMING_FUNCTION, PropertyCSS.TRANSITION_TIMING_FUNCTION, TransitionTimingFunctionTransformer),
};

export default TransitionUtilities;