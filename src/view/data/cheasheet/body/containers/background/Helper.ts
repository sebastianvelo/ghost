import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import ClassNameTransformer from "../../../../../../lib/utility/common/transformers/ClassNameTransformer";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";

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