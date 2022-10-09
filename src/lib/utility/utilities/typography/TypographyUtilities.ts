import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import { LetterSpacingTransformer, LineHeightTransformer, TextDecorationThicknessTransformer, TextDecorationTransformer, TextShadowTransformer } from "./transformers";

const TypographyUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.COLOR, PropertyCSS.COLOR, ColorTransformer),
    ...SimpleUtility(GhostPrefix.FONT_WEIGHT, PropertyCSS.FONT_WEIGHT),
    ...SimpleUtility(GhostPrefix.FONT_SIZE, PropertyCSS.FONT_SIZE),
    ...SimpleUtility(GhostPrefix.FONT_FAMILY, PropertyCSS.FONT_FAMILY, ReplaceSeparatorWithSpaceTransformer),
    ...SimpleUtility(GhostPrefix.TEXT_ALIGN, PropertyCSS.TEXT_ALIGN),
    ...SimpleUtility(GhostPrefix.LETTER_SPACING, PropertyCSS.LETTER_SPACING, LetterSpacingTransformer),
    ...SimpleUtility(GhostPrefix.LINE_HEIGHT, PropertyCSS.LINE_HEIGHT, LineHeightTransformer),
    ...SimpleUtility(GhostPrefix.LIST_STYLE_TYPE, PropertyCSS.LIST_STYLE_TYPE),
    ...SimpleUtility(GhostPrefix.FONT_STYLE, PropertyCSS.FONT_STYLE),
    ...SimpleUtility(GhostPrefix.FONT_VARIANT, PropertyCSS.FONT_VARIANT),
    ...SimpleUtility(GhostPrefix.FONT_VARIANT_CAPS, PropertyCSS.FONT_VARIANT_CAPS),
    ...SimpleUtility(GhostPrefix.TEXT_DECORATION, PropertyCSS.TEXT_DECORATION, TextDecorationTransformer),
    ...SimpleUtility(GhostPrefix.TEXT_DECORATION_LINE, PropertyCSS.TEXT_DECORATION_LINE),
    ...SimpleUtility(GhostPrefix.TEXT_DECORATION_STYLE, PropertyCSS.TEXT_DECORATION_STYLE),
    ...SimpleUtility(GhostPrefix.TEXT_DECORATION_THICKNESS, PropertyCSS.TEXT_DECORATION_THICKNESS, TextDecorationThicknessTransformer),
    ...SimpleUtility(GhostPrefix.TEXT_DECORATION_COLOR, PropertyCSS.TEXT_DECORATION_COLOR, ColorTransformer),
    ...SimpleUtility(GhostPrefix.TEXT_OVERFLOW, PropertyCSS.TEXT_OVERFLOW),
    ...SimpleUtility(GhostPrefix.TEXT_SHADOW, PropertyCSS.TEXT_SHADOW, TextShadowTransformer),
};

export default TypographyUtilities;