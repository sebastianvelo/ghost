import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import ReplaceSeparatorWithSpaceTransformer from "../../../../../../lib/utility/common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/category/row/RowsContainer";
import GridSpanStartEndBodyExample from "./body/GridSpanStartEndBodyExample";
import { GenericGridAuto } from "./Helper";
import UtilityIntegerSuffix from "../../common/helpers/UtilityIntegerSuffix";
import { GridFlowSuffixes } from "./Suffixes";
import GridTemplateBodyExample from "./body/GridTemplateBodyExample";
import { GridSpanTransformer, GridTemplateTransformer } from "../../../../../../lib/utility/utilities/grid/transformers";

const GridTemplateColumns: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_TEMPLATE_COLUMNS],
        prefix: GhostPrefix.GRID_TEMPLATE_COLUMNS,
        possibleSuffixes: ["number"],
        example: { suffix: `${6}`, transformer: GridTemplateTransformer }
    },
    body: GridTemplateBodyExample([
        [`${GhostPrefix.GRID_TEMPLATE_COLUMNS}_4`, 12],
        [`${GhostPrefix.GRID_TEMPLATE_COLUMNS}_3`, 12],
        [`${GhostPrefix.GRID_TEMPLATE_COLUMNS}_6`, 12],
        [`${GhostPrefix.GRID_TEMPLATE_COLUMNS}_5`, 12],
    ])
};

const GridTemplateRows: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_TEMPLATE_ROWS],
        prefix: GhostPrefix.GRID_TEMPLATE_ROWS,
        possibleSuffixes: ["number"],
        example: { suffix: `${6}`, transformer: GridTemplateTransformer }
    },
    body: GridTemplateBodyExample([
        [`${GhostPrefix.GRID_TEMPLATE_ROWS}_2`, 1],
        [`${GhostPrefix.GRID_TEMPLATE_ROWS}_3`, 4],
        [`${GhostPrefix.GRID_TEMPLATE_ROWS}_5`, 4],
        [`${GhostPrefix.GRID_TEMPLATE_ROWS}_4`, 4],
    ])
};

const GridColumnSpan: RowProps = {
    header: {
        cssProperties: [PropertyCSS.GRID_COLUMN_SPAN],
        prefix: GhostPrefix.GRID_COLUMN_SPAN,
        possibleSuffixes: ["number"],
        example: { suffix: `${6}`, transformer: GridSpanTransformer }
    },
    body: GridSpanStartEndBodyExample([
        `${GhostPrefix.GRID_COLUMN_SPAN}_2`,
        `${GhostPrefix.GRID_COLUMN_SPAN}_4`,
        `${GhostPrefix.GRID_COLUMN_SPAN}_3`,
    ])
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
        possibleSuffixes: GridFlowSuffixes,
        example: { suffix: `dense`, transformer: ReplaceSeparatorWithSpaceTransformer }
    }
};

const GridColumnStart: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_COLUMN_START, GhostPrefix.GRID_COLUMN_START, 6);

const GridColumnEnd: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_COLUMN_END, GhostPrefix.GRID_COLUMN_END, 6);

const GridRowStart: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_ROW_START, GhostPrefix.GRID_ROW_START, 6);

const GridRowEnd: RowProps = UtilityIntegerSuffix(PropertyCSS.GRID_ROW_END, GhostPrefix.GRID_ROW_END, 6);

const GridAutoColumns: RowProps = GenericGridAuto(PropertyCSS.GRID_AUTO_COLUMNS, GhostPrefix.GRID_AUTO_COLUMNS);

const GridAutoRows: RowProps = GenericGridAuto(PropertyCSS.GRID_AUTO_ROWS, GhostPrefix.GRID_AUTO_ROWS);

const GridContainer: RowsContainersProps = {
    title: "Grid",
    rows: [
        GridTemplateColumns,
        GridColumnSpan, GridColumnStart, GridColumnEnd,
        GridTemplateRows,
        GridRowSpan, GridRowStart, GridRowEnd,
        GridFlow, GridAutoColumns, GridAutoRows,
    ]
};

export default GridContainer;