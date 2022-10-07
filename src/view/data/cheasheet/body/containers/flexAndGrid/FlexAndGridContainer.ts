import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { AlignItemsTransformer, AlignSelfTransformer, ContentTransformer } from "../../../../../../lib/utility/utilities/flexAndGrid/transformers";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/category/row/RowsContainer";
import UtilityIntegerSuffix from "../../common/helpers/UtilityIntegerSuffix";
import { GenericAlignmentContentContainer, GenericAlignmentItemsContainer, GenericAlignmentSelfContainer, GenericGapContainer} from "./Helper";
import { AlignContentSuffixes, AlignItemsSuffixes, AlignSelfSuffixes, JustifyContentSuffixes, JustifyItemsSuffixes, JustifySelfSuffixes, PlaceContentSuffixes, PlaceItemsSuffixes, PlaceSelfSuffixes } from "./Suffixes";

const JustifyContent: RowProps = GenericAlignmentContentContainer({
    property: PropertyCSS.JUSTIFY_CONTENT,
    prefix: GhostPrefix.JUSTIFY_CONTENT,
    suffixes: JustifyContentSuffixes,
    transformer: ContentTransformer,
});

const JustifyItems: RowProps = GenericAlignmentItemsContainer({
    property: PropertyCSS.JUSTIFY_ITEMS,
    prefix: GhostPrefix.JUSTIFY_ITEMS,
    suffixes: JustifyItemsSuffixes,
});

const JustifySelf: RowProps = GenericAlignmentSelfContainer({
    property: PropertyCSS.JUSTIFY_SELF,
    prefix: GhostPrefix.JUSTIFY_SELF,
    suffixes: JustifySelfSuffixes,
});

const AlignContent: RowProps = GenericAlignmentContentContainer({
    property: PropertyCSS.ALIGN_CONTENT,
    prefix: GhostPrefix.ALIGN_CONTENT,
    suffixes: AlignContentSuffixes,
    transformer: ContentTransformer,
});

const AlignItems: RowProps = GenericAlignmentItemsContainer({
    property: PropertyCSS.ALIGN_ITEMS,
    prefix: GhostPrefix.ALIGN_ITEMS,
    suffixes: AlignItemsSuffixes,
    transformer: AlignItemsTransformer,
});

const AlignSelf: RowProps = GenericAlignmentSelfContainer({
    property: PropertyCSS.ALIGN_SELF,
    prefix: GhostPrefix.ALIGN_SELF,
    suffixes: AlignSelfSuffixes,
    transformer: AlignSelfTransformer
});

const PlaceContent: RowProps = GenericAlignmentContentContainer({
    property: PropertyCSS.PLACE_CONTENT,
    prefix: GhostPrefix.PLACE_CONTENT,
    suffixes: PlaceContentSuffixes,
});

const PlaceItems: RowProps = GenericAlignmentItemsContainer({
    property: PropertyCSS.PLACE_ITEMS,
    prefix: GhostPrefix.PLACE_ITEMS,
    suffixes: PlaceItemsSuffixes,
    transformer: ContentTransformer
});

const PlaceSelf: RowProps = GenericAlignmentSelfContainer({
    property: PropertyCSS.PLACE_SELF,
    prefix: GhostPrefix.PLACE_SELF,
    suffixes: PlaceSelfSuffixes,
});

const Gap: RowProps = GenericGapContainer(PropertyCSS.GAP, GhostPrefix.GAP);

const GapX: RowProps = GenericGapContainer(PropertyCSS.COLUMN_GAP, GhostPrefix.COLUMN_GAP);

const GapY: RowProps = GenericGapContainer(PropertyCSS.ROW_GAP, GhostPrefix.ROW_GAP);

const Order: RowProps = UtilityIntegerSuffix(PropertyCSS.ORDER, GhostPrefix.ORDER, 7, ["first", "last"]);

const FlexAndGridContainer: RowsContainersProps = {
    title: "Flex & Grid",
    rows: [
        Gap, GapX, GapY,
        JustifyContent, JustifyItems, JustifySelf,
        AlignContent, AlignItems, AlignSelf,
        PlaceContent, PlaceItems, PlaceSelf,
        Order,
    ]
};

export default FlexAndGridContainer;