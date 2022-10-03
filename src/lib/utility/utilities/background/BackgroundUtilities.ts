import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";

export const BackgroundPositioningMap: any = {
    border: "border-box",
    padding: "padding-box",
    content: "content-box",
};

export const BackgroundRepeatMap: any = {
    all: "repeat",
    x: "repeat-x",
    y: "repeat-y",
    no: "no-repeat",
};

export const BackgroundPositioningTransformer = (suffix: string) => BackgroundPositioningMap[suffix] ?? suffix;
export const BackgroundRepeatTransformer = (suffix: string) => BackgroundRepeatMap[suffix] ?? suffix;

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