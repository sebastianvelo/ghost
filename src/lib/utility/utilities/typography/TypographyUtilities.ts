import { PropertySeparator, SuffixSeparator } from "../../../common/types";
import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import ColorTransformer from "../../common/transformers/color/ColorTransformer";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";

export const LetterSpacingMap: any = {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
};

export const LineHeightMap: any = {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
}

const UnitPxTransformer = (suffix: string) => `${suffix}px`;

export const LetterSpacingTransformer = (suffix: string) => LetterSpacingMap[suffix] ?? suffix;

export const LineHeightTransformer = (suffix: string) => LineHeightMap[suffix] ?? suffix;

export const TextDecorationThicknessTransformer = UnitPxTransformer;

export const TextDecorationTransformer = (suffix: string) => {
    const [line, color = "black", style = "solid", thickness = "1"] = suffix.split(SuffixSeparator);
    return `${line} ${ColorTransformer(color)} ${style} ${TextDecorationThicknessTransformer(thickness)}`;
};

export const TextShadowTransformer = (suffix: string) => {
    const [hShadow, vShadow, blurRadius = "0", color = "black"] = suffix.split(SuffixSeparator);
    return `${UnitPxTransformer(hShadow)} ${UnitPxTransformer(vShadow)} ${UnitPxTransformer(blurRadius)} ${ColorTransformer(color)}`;
};

const TypographyUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.COLOR, PropertyCSS.COLOR, ColorTransformer),
    ...OneDeclarationUtility(GhostPrefix.FONT_WEIGHT, PropertyCSS.FONT_WEIGHT),
    ...OneDeclarationUtility(GhostPrefix.FONT_SIZE, PropertyCSS.FONT_SIZE),
    ...OneDeclarationUtility(GhostPrefix.FONT_FAMILY, PropertyCSS.FONT_FAMILY, ReplaceSeparatorWithSpaceTransformer),
    ...OneDeclarationUtility(GhostPrefix.TEXT_ALIGN, PropertyCSS.TEXT_ALIGN),
    ...OneDeclarationUtility(GhostPrefix.LETTER_SPACING, PropertyCSS.LETTER_SPACING, LetterSpacingTransformer),
    ...OneDeclarationUtility(GhostPrefix.LINE_HEIGHT, PropertyCSS.LINE_HEIGHT, LineHeightTransformer),
    ...OneDeclarationUtility(GhostPrefix.LIST_STYLE_TYPE, PropertyCSS.LIST_STYLE_TYPE),
    ...OneDeclarationUtility(GhostPrefix.FONT_STYLE, PropertyCSS.FONT_STYLE),
    ...OneDeclarationUtility(GhostPrefix.FONT_VARIANT, PropertyCSS.FONT_VARIANT),
    ...OneDeclarationUtility(GhostPrefix.FONT_VARIANT_CAPS, PropertyCSS.FONT_VARIANT_CAPS),
    ...OneDeclarationUtility(GhostPrefix.TEXT_DECORATION, PropertyCSS.TEXT_DECORATION, TextDecorationTransformer),
    ...OneDeclarationUtility(GhostPrefix.TEXT_DECORATION_LINE, PropertyCSS.TEXT_DECORATION_LINE),
    ...OneDeclarationUtility(GhostPrefix.TEXT_DECORATION_STYLE, PropertyCSS.TEXT_DECORATION_STYLE),
    ...OneDeclarationUtility(GhostPrefix.TEXT_DECORATION_THICKNESS, PropertyCSS.TEXT_DECORATION_THICKNESS, TextDecorationThicknessTransformer),
    ...OneDeclarationUtility(GhostPrefix.TEXT_DECORATION_COLOR, PropertyCSS.TEXT_DECORATION_COLOR, ColorTransformer),
    ...OneDeclarationUtility(GhostPrefix.TEXT_OVERFLOW, PropertyCSS.TEXT_OVERFLOW),
    ...OneDeclarationUtility(GhostPrefix.TEXT_SHADOW, PropertyCSS.TEXT_SHADOW, TextShadowTransformer),
};

export default TypographyUtilities;