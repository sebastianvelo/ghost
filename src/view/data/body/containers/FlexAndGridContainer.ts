import GhostPrefix from "../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../lib/property/PropertyCSS";
import { AlignItemsTransformer, ContentTransformer } from "../../../../lib/utility/utilities/flexAndGrid/FlexAndGridUtilities";
import { RowProps } from "../../../components/row/Row";
import { RowsContainersProps } from "../../../components/row/RowsContainer";
import UtilityIntegerSuffix from "./helpers/UtilityIntegerSuffix";
import UtilityIntegerUnitSuffix from "./helpers/UtilityIntegerUnitSuffix";

const JustifyContent: RowProps = {
    header: {
        cssProperties: [PropertyCSS.JUSTIFY_CONTENT],
        prefix: GhostPrefix.JUSTIFY_CONTENT,
        possibleSuffixes: ["start", "end", "center", "between", "around", "evenly"],
        example: { suffix: "start", transformer: ContentTransformer }
    }
};

const JustifyItems: RowProps = {
    header: {
        cssProperties: [PropertyCSS.JUSTIFY_ITEMS],
        prefix: GhostPrefix.JUSTIFY_ITEMS,
        possibleSuffixes: ["start", "end", "center", "stretch"],
        example: { suffix: "end" }
    }
};

const JustifySelf: RowProps = {
    header: {
        cssProperties: [PropertyCSS.JUSTIFY_SELF],
        prefix: GhostPrefix.JUSTIFY_SELF,
        possibleSuffixes: ["start", "end", "center", "stretch", "auto"],
        example: { suffix: "end" }
    }
};

const AlignContent: RowProps = {
    header: {
        cssProperties: [PropertyCSS.ALIGN_CONTENT],
        prefix: GhostPrefix.ALIGN_CONTENT,
        possibleSuffixes: ["start", "end", "center", "between", "around", "evenly"],
        example: { suffix: "center", transformer: ContentTransformer }
    }
};

const AlignItems: RowProps = {
    header: {
        cssProperties: [PropertyCSS.ALIGN_ITEMS],
        prefix: GhostPrefix.ALIGN_ITEMS,
        possibleSuffixes: ["start", "end", "center", "baseline", "stretch"],
        example: { suffix: "end", transformer: AlignItemsTransformer }
    }
};

const AlignSelf: RowProps = {
    header: {
        cssProperties: [PropertyCSS.ALIGN_SELF],
        prefix: GhostPrefix.ALIGN_SELF,
        possibleSuffixes: ["start", "end", "center", "baseline", "stretch", "auto"],
        example: { suffix: "end", transformer: AlignItemsTransformer }
    }
};

const PlaceContent: RowProps = {
    header: {
        cssProperties: [PropertyCSS.PLACE_CONTENT],
        prefix: GhostPrefix.PLACE_CONTENT,
        possibleSuffixes: ["start", "end", "center", "between", "around", "evenly", "stretch"],
        example: { suffix: "between" }
    }
};

const PlaceItems: RowProps = {
    header: {
        cssProperties: [PropertyCSS.PLACE_ITEMS],
        prefix: GhostPrefix.PLACE_ITEMS,
        possibleSuffixes: ["start", "end", "center", "stretch"],
        example: { suffix: "end", transformer: ContentTransformer }
    }
};

const PlaceSelf: RowProps = {
    header: {
        cssProperties: [PropertyCSS.PLACE_SELF],
        prefix: GhostPrefix.PLACE_SELF,
        possibleSuffixes: ["start", "end", "center", "stretch", "auto"],
        example: { suffix: "end" }
    }
};

const Order: RowProps = UtilityIntegerSuffix(PropertyCSS.ORDER, GhostPrefix.ORDER, 7, ["first", "last"]);

const Gap: RowProps = UtilityIntegerUnitSuffix(PropertyCSS.GAP, GhostPrefix.GAP, 16);

const GapX: RowProps = UtilityIntegerUnitSuffix(PropertyCSS.COLUMN_GAP, GhostPrefix.COLUMN_GAP, 8);

const GapY: RowProps = UtilityIntegerUnitSuffix(PropertyCSS.ROW_GAP, GhostPrefix.ROW_GAP, 24);

const FlexAndGridContainer: RowsContainersProps = {
    title: "Flex & Grid",
    rows: [
        Order,
        Gap, GapX, GapY,
        JustifyContent, JustifyItems, JustifySelf,
        AlignContent, AlignItems, AlignSelf,
        PlaceContent, PlaceItems, PlaceSelf,
    ]
};

export default FlexAndGridContainer;