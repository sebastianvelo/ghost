import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import ClassNameTransformer from "../../../../../../lib/utility/common/transformers/ClassNameTransformer";
import { RowProps } from "../../../../../components/row/Row";
import AlignmentContentBodyExample from "../example/AlignmentContentBodyExample";
import AlignmentSelfBodyExample from "../example/AlignmentSelfBodyExample";
import GridTemplateBodyExample from "../example/GridTemplateBodyExample";
import AlignmentItemsBodyExample from "../example/AlignmentItemsBodyExample";
import UtilityIntegerUnitSuffix from "./UtilityIntegerUnitSuffix";

interface AlignmentContainerProps {
    property: PropertyCSS;
    prefix: GhostPrefix;
    suffixes: string[];
    transformer?: ClassNameTransformer;
}

export const GenericAlignmentContentContainer = (props: AlignmentContainerProps): RowProps => ({
    header: {
        cssProperties: [props.property],
        prefix: props.prefix,
        possibleSuffixes: props.suffixes,
        example: { suffix: props.suffixes[0], transformer: props.transformer }
    },
    body: AlignmentContentBodyExample(props.suffixes.map(suffix => [`${props.prefix}_${suffix}`, 3]))
});

export const GenericAlignmentSelfContainer = (props: AlignmentContainerProps): RowProps => ({
    header: {
        cssProperties: [props.property],
        prefix: props.prefix,
        possibleSuffixes: props.suffixes,
        example: { suffix: props.suffixes[0], transformer: props.transformer }
    },
    body: AlignmentSelfBodyExample(props.suffixes.map(suffix => `${props.prefix}_${suffix}`))
});

export const GenericAlignmentItemsContainer = (props: AlignmentContainerProps): RowProps => ({
    header: {
        cssProperties: [props.property],
        prefix: props.prefix,
        possibleSuffixes: props.suffixes,
        example: { suffix: props.suffixes[0], transformer: props.transformer }
    },
    body: AlignmentItemsBodyExample(props.suffixes.map(suffix => [`${props.prefix}_${suffix}`, 3]))
});

export const GenericGapContainer = (property: PropertyCSS, prefix: GhostPrefix) => ({
    ...UtilityIntegerUnitSuffix(property, prefix, 16),
    body: GridTemplateBodyExample([
        [`${prefix}_2 cols_4`, 12],
        [`${prefix}_4 cols_4`, 12],
        [`${prefix}_16 cols_4`, 12],
        [`${prefix}_30 cols_4`, 12],
    ])
});

export const JustifyContentSuffixes = ["start", "end", "center", "between", "around", "evenly"];

export const JustifyItemsSuffixes = ["start", "end", "center", "stretch"];

export const JustifySelfSuffixes = ["start", "end", "center", "stretch", "auto"];

export const AlignContentSuffixes = ["start", "end", "center", "between", "around", "evenly"];

export const AlignItemsSuffixes = ["start", "end", "center", "baseline", "stretch"];

export const AlignSelfSuffixes = ["start", "end", "center", "baseline", "stretch", "auto"];

export const PlaceContentSuffixes = ["start", "end", "center", "between", "around", "evenly", "stretch"];

export const PlaceItemsSuffixes = ["start", "end", "center", "stretch"];

export const PlaceSelfSuffixes = ["start", "end", "center", "stretch", "auto"];
