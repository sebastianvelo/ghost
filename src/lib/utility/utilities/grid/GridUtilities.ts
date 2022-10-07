import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { GridTemplateTransformer, GridSpanTransformer, GridAutoTransformer } from "./transformers";

const GridUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.GRID_TEMPLATE_COLUMNS, PropertyCSS.GRID_TEMPLATE_COLUMNS, GridTemplateTransformer),
    ...OneDeclarationUtility(GhostPrefix.GRID_TEMPLATE_ROWS, PropertyCSS.GRID_TEMPLATE_ROWS, GridTemplateTransformer),
    ...OneDeclarationUtility(GhostPrefix.GRID_COLUMN_SPAN, PropertyCSS.GRID_COLUMN_SPAN, GridSpanTransformer),
    ...OneDeclarationUtility(GhostPrefix.GRID_COLUMN_START, PropertyCSS.GRID_COLUMN_START),
    ...OneDeclarationUtility(GhostPrefix.GRID_COLUMN_END, PropertyCSS.GRID_COLUMN_END),
    ...OneDeclarationUtility(GhostPrefix.GRID_ROW_SPAN, PropertyCSS.GRID_ROW_SPAN, GridSpanTransformer),
    ...OneDeclarationUtility(GhostPrefix.GRID_ROW_START, PropertyCSS.GRID_ROW_START),
    ...OneDeclarationUtility(GhostPrefix.GRID_ROW_END, PropertyCSS.GRID_ROW_END),
    ...OneDeclarationUtility(GhostPrefix.GRID_FLOW, PropertyCSS.GRID_FLOW, ReplaceSeparatorWithSpaceTransformer),
    ...OneDeclarationUtility(GhostPrefix.GRID_AUTO_COLUMNS, PropertyCSS.GRID_AUTO_COLUMNS, GridAutoTransformer),
    ...OneDeclarationUtility(GhostPrefix.GRID_AUTO_ROWS, PropertyCSS.GRID_AUTO_ROWS, GridAutoTransformer),

};

export default GridUtilities;