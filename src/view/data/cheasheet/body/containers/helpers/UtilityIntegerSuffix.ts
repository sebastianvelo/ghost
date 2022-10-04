import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../../../components/row/Row";

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