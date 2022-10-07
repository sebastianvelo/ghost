import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { BorderTransformer } from "../../../../../../lib/utility/utilities/border/BorderUtilities";
import { RowProps } from "../../../../../components/row/Row";
import BorderBodyExample from "./BodyExample";

interface GenericBorderProps {
    properties: PropertyCSS[];
    prefix: GhostPrefix;
    examples: string[];
}

export const GenericBorder = (props: GenericBorderProps): RowProps => ({
    header: {
        cssProperties: props.properties,
        prefix: props.prefix,
        possibleSuffixes: ["numberUnit-color?-width?"],
        example: { suffix: props.examples[0], transformer: BorderTransformer }
    },
    body: BorderBodyExample(props.examples.map(suffix => `${props.prefix}_${suffix}`))
});
