import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";

const ContentMap: any = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
};

const ItemsMap: any = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch"
};

const SelfMap: any = {
    start: "flex-start",
    end: "flex-end",
    center: "center",
    baseline: "baseline",
    stretch: "stretch",
    auto: "auto"
};

export const ContentTransformer = (suffix: string) => ContentMap[suffix];
export const AlignItemsTransformer = (suffix: string) => ItemsMap[suffix];
export const AlignSelfTransformer = (suffix: string) => SelfMap[suffix];

export const OrderTransformer = (suffix: string) => {
    if (suffix === "first") return "-9999";
    if (suffix === "last") return "9999";
    if (suffix === "none") return "0";
    return suffix;
}

export const GridGapTransformer = (suffix: string) => isNaN(+suffix) ? suffix : `${suffix}px`;

const FlexAndGridUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.ORDER, PropertyCSS.ORDER, OrderTransformer),
    ...OneActionUtility(GhostPrefix.GAP, PropertyCSS.GAP, GridGapTransformer),
    ...OneActionUtility(GhostPrefix.COLUMN_GAP, PropertyCSS.COLUMN_GAP, GridGapTransformer),
    ...OneActionUtility(GhostPrefix.ROW_GAP, PropertyCSS.ROW_GAP, GridGapTransformer),
    ...OneActionUtility(GhostPrefix.JUSTIFY_CONTENT, PropertyCSS.JUSTIFY_CONTENT, ContentTransformer),
    ...OneActionUtility(GhostPrefix.JUSTIFY_ITEMS, PropertyCSS.JUSTIFY_ITEMS),
    ...OneActionUtility(GhostPrefix.JUSTIFY_SELF, PropertyCSS.JUSTIFY_SELF),
    ...OneActionUtility(GhostPrefix.ALIGN_CONTENT, PropertyCSS.ALIGN_CONTENT, ContentTransformer),
    ...OneActionUtility(GhostPrefix.ALIGN_ITEMS, PropertyCSS.ALIGN_ITEMS, AlignItemsTransformer),
    ...OneActionUtility(GhostPrefix.ALIGN_SELF, PropertyCSS.ALIGN_SELF, AlignSelfTransformer),
    ...OneActionUtility(GhostPrefix.PLACE_CONTENT, PropertyCSS.PLACE_CONTENT, ContentTransformer),
    ...OneActionUtility(GhostPrefix.PLACE_ITEMS, PropertyCSS.PLACE_ITEMS),
    ...OneActionUtility(GhostPrefix.PLACE_SELF, PropertyCSS.PLACE_SELF),
};

export default FlexAndGridUtilities;