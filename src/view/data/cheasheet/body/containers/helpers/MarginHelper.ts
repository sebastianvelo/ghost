import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../../../components/row/Row";
import IntegerUnitDefaultPxTransformer from "../../common/IntegerUnitDefaultPxTransformer";
import MarginBodyExample from "../example/MarginBodyExample";

const suffixesExamples = ["0", "2rem", "25", "50"];

export const GenericMargin = (properties: PropertyCSS[], prefix: GhostPrefix, fullRowExample?: boolean): RowProps => ({
    header: {
        cssProperties: properties,
        prefix: prefix,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: suffixesExamples[2], transformer: IntegerUnitDefaultPxTransformer }
    },
    body: MarginBodyExample(suffixesExamples.map(suffix => `${prefix}_${suffix}`), fullRowExample)
});