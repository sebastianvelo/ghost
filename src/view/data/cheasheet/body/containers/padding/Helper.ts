import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../../../components/row/Row";
import IntegerUnitDefaultPxTransformer from "../../common/IntegerUnitDefaultPxTransformer";
import PaddingBodyExample from "./body/BodyExample";

const suffixesExamples = ["0", "4", "16", "32"];

export const GenericPadding = (properties: PropertyCSS[], prefix: GhostPrefix): RowProps => ({
    header: {
        cssProperties: properties,
        prefix: prefix,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: suffixesExamples[2], transformer: IntegerUnitDefaultPxTransformer }
    },
    body: PaddingBodyExample(suffixesExamples.map(suffix => `${prefix}_${suffix}`))
});