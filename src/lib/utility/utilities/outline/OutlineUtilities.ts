import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import { OutlineTransformer, OutlineWidthTransformer } from "./transformers";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";

const OutlineUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.OUTLINE, PropertyCSS.OUTLINE, OutlineTransformer),
    ...OneDeclarationUtility(GhostPrefix.OUTLINE_COLOR, PropertyCSS.OUTLINE_COLOR, ColorTransformer),
    ...OneDeclarationUtility(GhostPrefix.OUTLINE_OFFSET, PropertyCSS.OUTLINE_OFFSET, OutlineWidthTransformer),
    ...OneDeclarationUtility(GhostPrefix.OUTLINE_STYLE, PropertyCSS.OUTLINE_STYLE),
    ...OneDeclarationUtility(GhostPrefix.OUTLINE_WIDTH, PropertyCSS.OUTLINE_WIDTH, OutlineWidthTransformer),
};

export default OutlineUtilities;