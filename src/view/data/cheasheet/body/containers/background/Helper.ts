import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import ClassNameTransformer from "../../../../../../lib/utility/common/transformers/ClassNameTransformer";
import { RowProps } from "../../../../../components/row/Row";

interface GenericBackgroundProps {
    property: PropertyCSS;
    prefix: GhostPrefix;
    suffixes: string[];
    transformer?: ClassNameTransformer;
}

export const GenericBackground = (props: GenericBackgroundProps): RowProps => ({
    header: {
        cssProperties: [props.property],
        prefix: props.prefix,
        possibleSuffixes: props.suffixes,
        example: { suffix: props.suffixes[0], transformer: props.transformer }
    }
});