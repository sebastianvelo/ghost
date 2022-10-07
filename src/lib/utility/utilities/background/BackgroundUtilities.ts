import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { BackgroundPositioningTransformer, BackgroundRepeatTransformer } from "./transformers";

const BackgroundUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.BG_COLOR, PropertyCSS.BG_COLOR, ColorTransformer),
    ...OneActionUtility(GhostPrefix.BG_ATTACHMENT, PropertyCSS.BG_ATTACHMENT),
    ...OneActionUtility(GhostPrefix.BG_BLEND, PropertyCSS.BG_BLEND),
    ...OneActionUtility(GhostPrefix.BG_CLIP, PropertyCSS.BG_CLIP, BackgroundPositioningTransformer),
    ...OneActionUtility(GhostPrefix.BG_ORIGIN, PropertyCSS.BG_ORIGIN, BackgroundPositioningTransformer),
    ...OneActionUtility(GhostPrefix.BG_POSITION, PropertyCSS.BG_POSITION, ReplaceSeparatorWithSpaceTransformer),
    ...OneActionUtility(GhostPrefix.BG_REPEAT, PropertyCSS.BG_REPEAT, BackgroundRepeatTransformer),
    ...OneActionUtility(GhostPrefix.BG_SIZE, PropertyCSS.BG_SIZE),
};

export default BackgroundUtilities;