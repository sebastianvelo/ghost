import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { BackgroundPositioningTransformer, BackgroundRepeatTransformer } from "./transformers";

const BackgroundUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.BG_COLOR, PropertyCSS.BG_COLOR, ColorTransformer),
    ...SimpleUtility(GhostPrefix.BG_ATTACHMENT, PropertyCSS.BG_ATTACHMENT),
    ...SimpleUtility(GhostPrefix.BG_BLEND, PropertyCSS.BG_BLEND),
    ...SimpleUtility(GhostPrefix.BG_CLIP, PropertyCSS.BG_CLIP, BackgroundPositioningTransformer),
    ...SimpleUtility(GhostPrefix.BG_ORIGIN, PropertyCSS.BG_ORIGIN, BackgroundPositioningTransformer),
    ...SimpleUtility(GhostPrefix.BG_POSITION, PropertyCSS.BG_POSITION, ReplaceSeparatorWithSpaceTransformer),
    ...SimpleUtility(GhostPrefix.BG_REPEAT, PropertyCSS.BG_REPEAT, BackgroundRepeatTransformer),
    ...SimpleUtility(GhostPrefix.BG_SIZE, PropertyCSS.BG_SIZE),
};

export default BackgroundUtilities;