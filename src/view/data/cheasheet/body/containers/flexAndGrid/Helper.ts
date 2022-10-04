import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import ClassNameTransformer from "../../../../../../lib/utility/common/transformers/ClassNameTransformer";
import { RowProps } from "../../../../../components/row/Row";
import GridTemplateBodyExample from "../grid/body/GridTemplateBodyExample";
import UtilityIntegerUnitSuffix from "../../common/helpers/UtilityIntegerUnitSuffix";
import AlignmentContentBodyExample from "./body/AlignmentContentBodyExample";
import AlignmentItemsBodyExample from "./body/AlignmentItemsBodyExample";
import AlignmentSelfBodyExample from "./body/AlignmentSelfBodyExample";

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