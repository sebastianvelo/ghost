import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import { AlignItemsTransformer, ContentTransformer } from "../../../../../lib/utility/utilities/flexAndGrid/FlexAndGridUtilities";
import { RowProps } from "../../../../components/row/Row";
import { RowsContainersProps } from "../../../../components/row/RowsContainer";
import { AlignContentSuffixes, AlignItemsSuffixes, GenericAlignmentContainer, AlignSelfSuffixes, GenericGapContainer, JustifyContentSuffixes, JustifyItemsSuffixes, JustifySelfSuffixes, GenericPlaceContainer, PlaceContentSuffixes, PlaceItemsSuffixes, PlaceSelfSuffixes } from "./helpers/FlexAndGridHelper";
import UtilityIntegerSuffix from "./helpers/UtilityIntegerSuffix";

const JustifyContent: RowProps = GenericAlignmentContainer({
    property: PropertyCSS.JUSTIFY_CONTENT,
    prefix: GhostPrefix.JUSTIFY_CONTENT,
    suffixes: JustifyContentSuffixes,
    transformer: ContentTransformer,
});

const JustifyItems: RowProps = GenericAlignmentContainer({
    property: PropertyCSS.JUSTIFY_ITEMS,
    prefix: GhostPrefix.JUSTIFY_ITEMS,
    suffixes: JustifyItemsSuffixes,
});

const JustifySelf: RowProps = GenericAlignmentContainer({
    property: PropertyCSS.JUSTIFY_SELF,
    prefix: GhostPrefix.JUSTIFY_SELF,
    suffixes: JustifySelfSuffixes,
});

const AlignContent: RowProps = GenericAlignmentContainer({
    property: PropertyCSS.ALIGN_CONTENT,
    prefix: GhostPrefix.ALIGN_CONTENT,
    suffixes: AlignContentSuffixes,
    transformer: ContentTransformer,
});

const AlignItems: RowProps = GenericAlignmentContainer({
    property: PropertyCSS.ALIGN_ITEMS,
    prefix: GhostPrefix.ALIGN_ITEMS,
    suffixes: AlignItemsSuffixes,
    transformer: AlignItemsTransformer,
});

const AlignSelf: RowProps = GenericAlignmentContainer({
    property: PropertyCSS.ALIGN_SELF,
    prefix: GhostPrefix.ALIGN_SELF,
    suffixes: AlignSelfSuffixes,
});

const PlaceContent: RowProps = GenericAlignmentContainer({
    property: PropertyCSS.PLACE_CONTENT,
    prefix: GhostPrefix.PLACE_CONTENT,
    suffixes: PlaceContentSuffixes,
});

const PlaceItems: RowProps = GenericPlaceContainer({
    property: PropertyCSS.PLACE_ITEMS,
    prefix: GhostPrefix.PLACE_ITEMS,
    suffixes: PlaceItemsSuffixes,
    transformer: ContentTransformer
});

const PlaceSelf: RowProps = GenericAlignmentContainer({
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