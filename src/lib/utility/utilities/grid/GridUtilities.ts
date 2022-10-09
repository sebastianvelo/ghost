import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { GridTemplateTransformer, GridSpanTransformer, GridAutoTransformer } from "./transformers";

const GridUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.GRID_TEMPLATE_COLUMNS, PropertyCSS.GRID_TEMPLATE_COLUMNS, GridTemplateTransformer),
    ...SimpleUtility(GhostPrefix.GRID_TEMPLATE_ROWS, PropertyCSS.GRID_TEMPLATE_ROWS, GridTemplateTransformer),
    ...SimpleUtility(GhostPrefix.GRID_COLUMN_SPAN, PropertyCSS.GRID_COLUMN_SPAN, GridSpanTransformer),
    ...SimpleUtility(GhostPrefix.GRID_COLUMN_START, PropertyCSS.GRID_COLUMN_START),
    ...SimpleUtility(GhostPrefix.GRID_COLUMN_END, PropertyCSS.GRID_COLUMN_END),
    ...SimpleUtility(GhostPrefix.GRID_ROW_SPAN, PropertyCSS.GRID_ROW_SPAN, GridSpanTransformer),
    ...SimpleUtility(GhostPrefix.GRID_ROW_START, PropertyCSS.GRID_ROW_START),
    ...SimpleUtility(GhostPrefix.GRID_ROW_END, PropertyCSS.GRID_ROW_END),
    ...SimpleUtility(GhostPrefix.GRID_FLOW, PropertyCSS.GRID_FLOW, ReplaceSeparatorWithSpaceTransformer),
    ...SimpleUtility(GhostPrefix.GRID_AUTO_COLUMNS, PropertyCSS.GRID_AUTO_COLUMNS, GridAutoTransformer),
    ...SimpleUtility(GhostPrefix.GRID_AUTO_ROWS, PropertyCSS.GRID_AUTO_ROWS, GridAutoTransformer),

};

export default GridUtilities;