import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";

const UtilityIntegerSuffix =
    (property: PropertyCSS, prefix: GhostPrefix, suffix: number, otherSuffixes: string[] = []): RowProps => ({
        header: {
            cssProperties: [property],
            prefix: prefix,
            possibleSuffixes: ["number", ...otherSuffixes],
            example: { suffix: `${suffix}` }
        }
    });

export default UtilityIntegerSuffix;