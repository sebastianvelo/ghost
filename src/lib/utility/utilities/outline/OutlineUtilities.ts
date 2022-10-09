import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import { OutlineTransformer, OutlineWidthTransformer } from "./transformers";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";

const OutlineUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.OUTLINE, PropertyCSS.OUTLINE, OutlineTransformer),
    ...SimpleUtility(GhostPrefix.OUTLINE_COLOR, PropertyCSS.OUTLINE_COLOR, ColorTransformer),
    ...SimpleUtility(GhostPrefix.OUTLINE_OFFSET, PropertyCSS.OUTLINE_OFFSET, OutlineWidthTransformer),
    ...SimpleUtility(GhostPrefix.OUTLINE_STYLE, PropertyCSS.OUTLINE_STYLE),
    ...SimpleUtility(GhostPrefix.OUTLINE_WIDTH, PropertyCSS.OUTLINE_WIDTH, OutlineWidthTransformer),
};

export default OutlineUtilities;