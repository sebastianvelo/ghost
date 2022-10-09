import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";

const UtilityIntegerUnitSuffix = (property: PropertyCSS, prefix: GhostPrefix, suffix: number, unit: string = "px"): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `${suffix}`, transformer: (s: string) => `${s}${unit}` }
    }
});

export default UtilityIntegerUnitSuffix;