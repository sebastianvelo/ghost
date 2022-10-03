import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import { GridAutoTransformer } from "../../../../../lib/utility/utilities/grid/GridUtilities";
import { RowProps } from "../../../../components/row/Row";

export const GridAuto = (property: PropertyCSS, prefix: GhostPrefix, suffix: string): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: ["auto", "min", "max"],
        example: { suffix, transformer: GridAutoTransformer }
    }
});