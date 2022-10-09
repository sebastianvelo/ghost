import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import { ContentTransformer, AlignItemsTransformer, AlignSelfTransformer, GridGapTransformer, OrderTransformer } from "./transformers";

const FlexAndGridUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.ORDER, PropertyCSS.ORDER, OrderTransformer),
    ...SimpleUtility(GhostPrefix.GAP, PropertyCSS.GAP, GridGapTransformer),
    ...SimpleUtility(GhostPrefix.COLUMN_GAP, PropertyCSS.COLUMN_GAP, GridGapTransformer),
    ...SimpleUtility(GhostPrefix.ROW_GAP, PropertyCSS.ROW_GAP, GridGapTransformer),
    ...SimpleUtility(GhostPrefix.JUSTIFY_CONTENT, PropertyCSS.JUSTIFY_CONTENT, ContentTransformer),
    ...SimpleUtility(GhostPrefix.JUSTIFY_ITEMS, PropertyCSS.JUSTIFY_ITEMS),
    ...SimpleUtility(GhostPrefix.JUSTIFY_SELF, PropertyCSS.JUSTIFY_SELF),
    ...SimpleUtility(GhostPrefix.ALIGN_CONTENT, PropertyCSS.ALIGN_CONTENT, ContentTransformer),
    ...SimpleUtility(GhostPrefix.ALIGN_ITEMS, PropertyCSS.ALIGN_ITEMS, AlignItemsTransformer),
    ...SimpleUtility(GhostPrefix.ALIGN_SELF, PropertyCSS.ALIGN_SELF, AlignSelfTransformer),
    ...SimpleUtility(GhostPrefix.PLACE_CONTENT, PropertyCSS.PLACE_CONTENT, ContentTransformer),
    ...SimpleUtility(GhostPrefix.PLACE_ITEMS, PropertyCSS.PLACE_ITEMS),
    ...SimpleUtility(GhostPrefix.PLACE_SELF, PropertyCSS.PLACE_SELF),
};

export default FlexAndGridUtilities;