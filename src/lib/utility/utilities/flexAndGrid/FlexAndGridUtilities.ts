import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import { ContentTransformer, AlignItemsTransformer, AlignSelfTransformer, GridGapTransformer, OrderTransformer } from "./transformers";

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