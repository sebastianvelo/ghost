import { LetterSpacingMap, LineHeightMap } from "../../../../../../lib/utility/utilities/typography/TypographyUtilities";
import BodyExample from "../example/BodyExample";

export const TextBodyExample = (classNames: string[], tag?: string, overrideColor = true) => BodyExample({
    classNames,
    tag,
    aditionalClassName: `w_400 bg_255-255-255 p_16 ${overrideColor ? "txt_black" : ""}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque, leo et ornare cursus, felis augue consectetur eros, a vestibulum libero mauris vel odio.",
});

export const TextDecorationBodyExample = (classNames: string[]) => BodyExample({
    classNames,
    aditionalClassName: "w_400 bg_255-255-255 p_16 txt_black decoration-l_underline line-h_loose",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque, leo et ornare cursus, felis augue consectetur eros, a vestibulum libero mauris vel odio.",
});

export const LetterSpacingSuffixes = Object.keys(LetterSpacingMap);

export const LineHeightSuffixes = Object.keys(LineHeightMap);

export const FontWeightSuffixes = ["lighter", "normal", "bold", "bolder"];

export const ListStyleTypeSuffixes = ["disc", "circle", "decimal", "square"];

export const FontStyleSuffixes = ["normal", "italic"];

export const FontVariantSuffixes = ["normal", "small-caps"];

export const FontVariantCapsSuffixes = ["normal", "small-caps", "all-small-caps", "petite-caps", "all-petite-caps", "unicase", "titling-caps"];

export const TextDecorationLineSuffixes = ["none", "underline", "overline", "line-through"];

export const TextDecorationStyleSuffixes = ["solid", "double", "dotted", "dashed", "wavy"];

