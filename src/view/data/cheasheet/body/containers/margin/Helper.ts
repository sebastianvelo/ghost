import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import getExamples from "../../common/getExamples";
import IntegerUnitDefaultPxTransformer from "../../common/IntegerUnitDefaultPxTransformer";
import MarginBodyExample from "./body/BodyExample";

const suffixesExamples = ["0", "2rem", "25", "50"];

export const GenericMargin = (properties: PropertyCSS[], prefix: GhostPrefix, fullRowExample?: boolean): RowProps => ({
    header: {
        cssProperties: properties,
        prefix: prefix,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: suffixesExamples[2], transformer: IntegerUnitDefaultPxTransformer }
    },
    body: MarginBodyExample(getExamples(prefix, suffixesExamples), fullRowExample)
});