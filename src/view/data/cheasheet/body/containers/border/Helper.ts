import { BorderTransformer } from "../../../../../../lib/app/utilities/border/transformers";
import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import getExamples from "../../common/getExamples";
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
        possibleSuffixes: ["width-color?-style?"],
        example: { suffix: props.examples[0], transformer: BorderTransformer }
    },
    body: BorderBodyExample(getExamples(props.prefix, props.examples))
});
