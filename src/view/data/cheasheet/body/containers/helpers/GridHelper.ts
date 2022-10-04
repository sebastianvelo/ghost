import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { GridAutoTransformer } from "../../../../../../lib/utility/utilities/grid/GridUtilities";
import { RowProps } from "../../../../../components/row/Row";

const GridAutoSuffixes = ["auto", "min", "max"];

export const GenericGridAuto = (property: PropertyCSS, prefix: GhostPrefix): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: GridAutoSuffixes,
        example: { suffix: GridAutoSuffixes[0], transformer: GridAutoTransformer }
    }
});