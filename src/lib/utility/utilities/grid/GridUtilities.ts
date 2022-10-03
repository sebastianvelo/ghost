import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";
import ReplaceSeparatorWithSpaceTransformer from "../../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";

export const GridTemplateColumnsTransformer = (suffix: string) => `repeat(${suffix}, minmax(0, 1fr))`;
export const GridSpanTransformer = (suffix: string) => `span ${suffix} / span ${suffix}`;
export const GridAutoTransformer = (suffix: string) => {
    if (["min", "max"].includes(suffix))
        return `${suffix}-content`;
    return suffix;
};

const GridUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.GRID_TEMPLATE_COLUMNS, PropertyCSS.GRID_TEMPLATE_COLUMNS, GridTemplateColumnsTransformer),
    ...OneActionUtility(GhostPrefix.GRID_COLUMN_SPAN, PropertyCSS.GRID_COLUMN_SPAN, GridSpanTransformer),
    ...OneActionUtility(GhostPrefix.GRID_COLUMN_START, PropertyCSS.GRID_COLUMN_START),
    ...OneActionUtility(GhostPrefix.GRID_COLUMN_END, PropertyCSS.GRID_COLUMN_END),
    ...OneActionUtility(GhostPrefix.GRID_ROW_SPAN, PropertyCSS.GRID_ROW_SPAN, GridSpanTransformer),
    ...OneActionUtility(GhostPrefix.GRID_ROW_START, PropertyCSS.GRID_ROW_START),
    ...OneActionUtility(GhostPrefix.GRID_ROW_END, PropertyCSS.GRID_ROW_END),
    ...OneActionUtility(GhostPrefix.GRID_FLOW, PropertyCSS.GRID_FLOW, ReplaceSeparatorWithSpaceTransformer),
    ...OneActionUtility(GhostPrefix.GRID_AUTO_COLUMNS, PropertyCSS.GRID_AUTO_COLUMNS, GridAutoTransformer),
    ...OneActionUtility(GhostPrefix.GRID_AUTO_ROWS, PropertyCSS.GRID_AUTO_ROWS, GridAutoTransformer),
    ...OneActionUtility(GhostPrefix.GAP, PropertyCSS.GAP),
    ...OneActionUtility(GhostPrefix.COLUMN_GAP, PropertyCSS.COLUMN_GAP),
    ...OneActionUtility(GhostPrefix.ROW_GAP, PropertyCSS.ROW_GAP),
};

export default GridUtilities;