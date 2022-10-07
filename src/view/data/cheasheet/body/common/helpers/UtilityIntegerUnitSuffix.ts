import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/row/Row";

const UtilityIntegerUnitSuffix = (property: PropertyCSS, prefix: GhostPrefix, suffix: number, unit: string = "px"): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `${suffix}`, transformer: (s: string) => `${s}${unit}` }
    }
});

export default UtilityIntegerUnitSuffix;