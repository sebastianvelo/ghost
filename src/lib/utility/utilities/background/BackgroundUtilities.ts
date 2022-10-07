import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { BackgroundPositioningTransformer, BackgroundRepeatTransformer } from "./transformers";

const BackgroundUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.BG_COLOR, PropertyCSS.BG_COLOR, ColorTransformer),
    ...OneDeclarationUtility(GhostPrefix.BG_ATTACHMENT, PropertyCSS.BG_ATTACHMENT),
    ...OneDeclarationUtility(GhostPrefix.BG_BLEND, PropertyCSS.BG_BLEND),
    ...OneDeclarationUtility(GhostPrefix.BG_CLIP, PropertyCSS.BG_CLIP, BackgroundPositioningTransformer),
    ...OneDeclarationUtility(GhostPrefix.BG_ORIGIN, PropertyCSS.BG_ORIGIN, BackgroundPositioningTransformer),
    ...OneDeclarationUtility(GhostPrefix.BG_POSITION, PropertyCSS.BG_POSITION, ReplaceSeparatorWithSpaceTransformer),
    ...OneDeclarationUtility(GhostPrefix.BG_REPEAT, PropertyCSS.BG_REPEAT, BackgroundRepeatTransformer),
    ...OneDeclarationUtility(GhostPrefix.BG_SIZE, PropertyCSS.BG_SIZE),
};

export default BackgroundUtilities;