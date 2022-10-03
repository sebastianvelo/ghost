import GhostPrefix from "../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../lib/property/PropertyCSS";
import ReplaceSeparatorWithSpaceTransformer from "../../../../lib/utility/common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { GridSpanTransformer, GridTemplateColumnsTransformer } from "../../../../lib/utility/utilities/grid/GridUtilities";
import { RowProps } from "../../../components/row/Row";
import { RowsContainersProps } from "../../../components/row/RowsContainer";
import { GridAuto } from "./helpers/GridHelper";
import UtilityIntegerSuffix from "./helpers/UtilityIntegerSuffix";
import UtilityIntegerUnitSuffix from "./helpers/UtilityIntegerUnitSuffix";

const GridTemplateColumns: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_TEMPLATE_COLUMNS],
        prefix: GhostPrefix.GRID_TEMPLATE_COLUMNS,
        possibleSuffixes: ["number"],
        example: { suffix: `${6}`, transformer: GridTemplateColumnsTransformer }
    }
};

const GridTemplateRows: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_TEMPLATE_ROWS],
        prefix: GhostPrefix.GRID_TEMPLATE_ROWS,
        possibleSuffixes: ["number"],
        example: { suffix: `${6}`, transformer: GridTemplateColumnsTransformer }
    }
};

const GridColumnSpan: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_COLUMN_SPAN],
        prefix: GhostPrefix.GRID_COLUMN_SPAN,
        possibleSuffixes: ["number"],
        example: { suffix: `${6}`, transformer: GridSpanTransformer }
    }
};

const GridRowSpan: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_ROW_SPAN],
        prefix: GhostPrefix.GRID_ROW_SPAN,
        possibleSuffixes: ["number"],
        example: { suffix: `${6}`, transformer: GridSpanTransformer }
    }
};

const GridFlow: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_FLOW],
        prefix: GhostPrefix.GRID_FLOW,
        possibleSuffixes: ["row", "col", "dense", "row-dense", "column-dense"],
        example: { suffix: `dense`, transformer: ReplaceSeparatorWithSpaceTransformer }
    }
};

const GridColumnStart: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_COLUMN_START, GhostPrefix.GRID_COLUMN_START, 6);

const GridColumnEnd: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_COLUMN_END, GhostPrefix.GRID_COLUMN_END, 6);

const GridRowStart: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_ROW_START, GhostPrefix.GRID_ROW_START, 6);

const GridRowEnd: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_ROW_END, GhostPrefix.GRID_ROW_END, 6);

const Gap: RowProps = UtilityIntegerUnitSuffix(PropertyCSS.GAP, GhostPrefix.GAP, 16);

const GapX: RowProps = UtilityIntegerUnitSuffix(PropertyCSS.COLUMN_GAP, GhostPrefix.COLUMN_GAP, 8);

const GapY: RowProps = UtilityIntegerUnitSuffix(PropertyCSS.ROW_GAP, GhostPrefix.ROW_GAP, 24);

const GridAutoColumns: RowProps = GridAuto(PropertyCSS.GRID_AUTO_COLUMNS, GhostPrefix.GRID_AUTO_COLUMNS, "min");

const GridAutoRows: RowProps = GridAuto(PropertyCSS.GRID_AUTO_ROWS, GhostPrefix.GRID_AUTO_ROWS, "max");


const GridContainer: RowsContainersProps = {
    title: "Grid",
    rows: [
        GridTemplateColumns,
        GridColumnSpan, GridColumnStart, GridColumnEnd,
        GridTemplateRows,
        GridRowSpan, GridRowStart, GridRowEnd,
        GridFlow, GridAutoColumns, GridAutoRows,
        Gap, GapX, GapY
    ]
};

export default GridContainer;