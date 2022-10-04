import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import ReplaceSeparatorWithSpaceTransformer from "../../../../../../lib/utility/common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { LetterSpacingTransformer, LineHeightTransformer } from "../../../../../../lib/utility/utilities/typography/TypographyUtilities";
import { RowProps } from "../../../../../components/row/Row";
import { RowsContainersProps } from "../../../../../components/row/RowsContainer";
import IntegerUnitDefaultPxTransformer from "../../common/IntegerUnitDefaultPxTransformer";
import { FontStyleSuffixes, FontVariantCapsSuffixes, FontVariantSuffixes, FontWeightSuffixes, LetterSpacingSuffixes, LineHeightSuffixes, ListStyleTypeSuffixes, TextDecorationLineSuffixes, TextDecorationStyleSuffixes } from "./Suffixes";
import UtilityColorSuffix from "../../common/helpers/UtilityColorSuffix";
import UtilityIntegerUnitSuffix from "../../common/helpers/UtilityIntegerUnitSuffix";
import { TextBodyExample, TextDecorationBodyExample } from "./Helper";

const Color: RowProps = {
    ...UtilityColorSuffix(PropertyCSS.COLOR, GhostPrefix.COLOR, "10af0a"),
    body: TextBodyExample(["txt_100-40-100", "txt_0-40-100-50", "txt_0200DA", "txt_purple"], "div", false)
};

const TextAlign: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TEXT_ALIGN],
        prefix: GhostPrefix.TEXT_ALIGN,
        possibleSuffixes: ["left", "center", "right", "justify"],
        example: { suffix: `center`, }
    },
    body: TextBodyExample(["txt-align_left", "txt-align_center", "txt-align_right", "txt-align_justify"])
};

const FontFamily: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FONT_FAMILY],
        prefix: GhostPrefix.FONT_FAMILY,
        possibleSuffixes: ["fontName"],
        example: { suffix: `verdana`, transformer: ReplaceSeparatorWithSpaceTransformer }
    },
    body: TextBodyExample(["font_verdana", "font_georgia", "font_courier-new", "font_arial", "font_sofia", "font_times-new-roman"])
};

const FontSize: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FONT_SIZE],
        prefix: GhostPrefix.FONT_SIZE,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `20`, transformer: IntegerUnitDefaultPxTransformer }
    },
    body: TextBodyExample(["txt-size_16", "txt-size_22", "txt-size_1rem", "txt-size_2em",])
};

const FontWeight: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FONT_WEIGHT],
        prefix: GhostPrefix.FONT_WEIGHT,
        possibleSuffixes: [...FontWeightSuffixes, "number"],
        example: { suffix: `bold`, }
    },
    body: TextBodyExample(FontWeightSuffixes.map(suffix => `${GhostPrefix.FONT_WEIGHT}_${suffix}`))
};

const LetterSpacing: RowProps = {
    header: {
        cssProperties: [PropertyCSS.LETTER_SPACING],
        prefix: GhostPrefix.LETTER_SPACING,
        possibleSuffixes: [...LetterSpacingSuffixes, "numberUnit"],
        example: { suffix: `widest`, transformer: LetterSpacingTransformer }
    },
    body: TextBodyExample(LetterSpacingSuffixes.map(suffix => `${GhostPrefix.LETTER_SPACING}_${suffix}`))
};

const LineHeight: RowProps = {
    header: {
        cssProperties: [PropertyCSS.LINE_HEIGHT],
        prefix: GhostPrefix.LINE_HEIGHT,
        possibleSuffixes: [...LineHeightSuffixes, "numberUnit"],
        example: { suffix: `loose`, transformer: LineHeightTransformer }
    },
    body: TextBodyExample(LineHeightSuffixes.map(suffix => `${GhostPrefix.LINE_HEIGHT}_${suffix}`))
};

const ListStyleType: RowProps = {
    header: {
        cssProperties: [PropertyCSS.LIST_STYLE_TYPE],
        prefix: GhostPrefix.LIST_STYLE_TYPE,
        possibleSuffixes: ListStyleTypeSuffixes,
        example: { suffix: `square` }
    },
    body: TextBodyExample(ListStyleTypeSuffixes.map(suffix => `${GhostPrefix.LIST_STYLE_TYPE}_${suffix}`), "li")
};

const FontStyle: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FONT_STYLE],
        prefix: GhostPrefix.FONT_STYLE,
        possibleSuffixes: FontStyleSuffixes,
        example: { suffix: `italic` }
    },
    body: TextBodyExample(FontStyleSuffixes.map(suffix => `${GhostPrefix.FONT_STYLE}_${suffix}`))
};

const FontVariant: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FONT_VARIANT],
        prefix: GhostPrefix.FONT_VARIANT,
        possibleSuffixes: FontVariantSuffixes,
        example: { suffix: `small-caps` }
    },
    body: TextBodyExample(FontVariantSuffixes.map(suffix => `${GhostPrefix.FONT_VARIANT}_${suffix}`))
};

const FontVariantCaps: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FONT_VARIANT_CAPS],
        prefix: GhostPrefix.FONT_VARIANT_CAPS,
        possibleSuffixes: FontVariantCapsSuffixes,
        example: { suffix: `petite-caps` }
    },
    body: TextBodyExample(FontVariantCapsSuffixes.map(suffix => `${GhostPrefix.FONT_VARIANT_CAPS}_${suffix}`))
};

const TextDecoration: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TEXT_DECORATION],
        prefix: GhostPrefix.TEXT_DECORATION,
        possibleSuffixes: ["line-color-style-thickness"],
        example: { suffix: `underline-green-wavy-2px`, transformer: ReplaceSeparatorWithSpaceTransformer }
    },
    body: TextBodyExample(["underline", "underline-blue", "overline-orange-dotted", "underline-black-dashed-2"].map(suffix => `${GhostPrefix.TEXT_DECORATION}_${suffix}`))
};

const TextDecorationLine: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TEXT_DECORATION_LINE],
        prefix: GhostPrefix.TEXT_DECORATION_LINE,
        possibleSuffixes: TextDecorationLineSuffixes,
        example: { suffix: `underline` }
    },
    body: TextBodyExample(TextDecorationLineSuffixes.map(suffix => `${GhostPrefix.TEXT_DECORATION_LINE}_${suffix}`))
};

const TextDecorationStyle: RowProps = {
    header: {
        cssProperties: [PropertyCSS.TEXT_DECORATION_STYLE],
        prefix: GhostPrefix.TEXT_DECORATION_STYLE,
        possibleSuffixes: TextDecorationStyleSuffixes,
        example: { suffix: `dashed` }
    },
    body: TextDecorationBodyExample(TextDecorationStyleSuffixes.map(suffix => `${GhostPrefix.TEXT_DECORATION_STYLE}_${suffix}`))
};

const TextDecorationThickness: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.TEXT_DECORATION_THICKNESS, GhostPrefix.TEXT_DECORATION_THICKNESS, 4),
    body: TextDecorationBodyExample(
        ["1", "2", "4", "6"].map(suffix => `${GhostPrefix.TEXT_DECORATION_THICKNESS}_${suffix}`)
    )
}

const TextDecorationColor: RowProps = {
    ...UtilityColorSuffix(PropertyCSS.TEXT_DECORATION_COLOR, GhostPrefix.TEXT_DECORATION_COLOR, "10af0a"),
    body: TextDecorationBodyExample(
        ["red", "blue", "orange", "fa0afa"].map(suffix => `${GhostPrefix.TEXT_DECORATION_COLOR}_${suffix}`)
    )
};

const TypographyContainer: RowsContainersProps = {
    title: "Typography",
    rows: [
        Color,
        FontSize,
        FontWeight,
        FontStyle,
        FontVariant,
        FontVariantCaps,
        TextAlign,
        FontFamily,
        LetterSpacing,
        LineHeight,
        ListStyleType,
        TextDecorationColor,
        TextDecorationLine,
        TextDecorationStyle,
        TextDecorationThickness,
        TextDecoration,
    ]
};

export default TypographyContainer;