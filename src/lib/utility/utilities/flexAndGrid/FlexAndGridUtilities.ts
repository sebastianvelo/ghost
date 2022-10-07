import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";

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
    ...OneDeclarationUtility(GhostPrefix.ORDER, PropertyCSS.ORDER, OrderTransformer),
    ...OneDeclarationUtility(GhostPrefix.GAP, PropertyCSS.GAP, GridGapTransformer),
    ...OneDeclarationUtility(GhostPrefix.COLUMN_GAP, PropertyCSS.COLUMN_GAP, GridGapTransformer),
    ...OneDeclarationUtility(GhostPrefix.ROW_GAP, PropertyCSS.ROW_GAP, GridGapTransformer),
    ...OneDeclarationUtility(GhostPrefix.JUSTIFY_CONTENT, PropertyCSS.JUSTIFY_CONTENT, ContentTransformer),
    ...OneDeclarationUtility(GhostPrefix.JUSTIFY_ITEMS, PropertyCSS.JUSTIFY_ITEMS),
    ...OneDeclarationUtility(GhostPrefix.JUSTIFY_SELF, PropertyCSS.JUSTIFY_SELF),
    ...OneDeclarationUtility(GhostPrefix.ALIGN_CONTENT, PropertyCSS.ALIGN_CONTENT, ContentTransformer),
    ...OneDeclarationUtility(GhostPrefix.ALIGN_ITEMS, PropertyCSS.ALIGN_ITEMS, AlignItemsTransformer),
    ...OneDeclarationUtility(GhostPrefix.ALIGN_SELF, PropertyCSS.ALIGN_SELF, AlignSelfTransformer),
    ...OneDeclarationUtility(GhostPrefix.PLACE_CONTENT, PropertyCSS.PLACE_CONTENT, ContentTransformer),
    ...OneDeclarationUtility(GhostPrefix.PLACE_ITEMS, PropertyCSS.PLACE_ITEMS),
    ...OneDeclarationUtility(GhostPrefix.PLACE_SELF, PropertyCSS.PLACE_SELF),
};

export default FlexAndGridUtilities;