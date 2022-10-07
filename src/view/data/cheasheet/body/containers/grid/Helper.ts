import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { GridAutoTransformer } from "../../../../../../lib/utility/utilities/grid/transformers";
import { RowProps } from "../../../../../components/row/Row";
import { GridAutoSuffixes } from "./Suffixes";

export const GenericGridAuto = (property: PropertyCSS, prefix: GhostPrefix): RowProps => ({
    header: {
        cssProperties: [property],
        prefix: prefix,
        possibleSuffixes: GridAutoSuffixes,
        example: { suffix: GridAutoSuffixes[0], transformer: GridAutoTransformer }
    }
});