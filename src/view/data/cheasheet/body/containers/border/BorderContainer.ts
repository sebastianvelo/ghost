import GhostPrefix from "../../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../../lib/property/PropertyCSS";
import { BorderRadiusTransformer } from "../../../../../../lib/utility/utilities/border/BorderUtilities";
import { RowProps } from "../../../../../components/row/Row";
import { RowsContainersProps } from "../../../../../components/row/RowsContainer";
import BorderBodyExample from "./BodyExample";
import { GenericBorder } from "./Helper";

const Border: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER],
    prefix: GhostPrefix.BORDER,
    examples: ["4", "4-red", "6-00adfb-dashed"]
});

const BorderTop: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_TOP],
    prefix: GhostPrefix.BORDER_TOP,
    examples: ["4", "4-111", "2-fca-dotted"]
});

const BorderBottom: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_BOTTOM],
    prefix: GhostPrefix.BORDER_BOTTOM,
    examples: ["4", "4-red", "2-050-double"]
});

const BorderRight: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_RIGHT],
    prefix: GhostPrefix.BORDER_RIGHT,
    examples: ["4", "4-red", "2-222-dashed"]
});

const BorderLeft: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_LEFT],
    prefix: GhostPrefix.BORDER_LEFT,
    examples: ["4", "4-red", "2-ffa-dashed"]
});

const BorderY: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_TOP, PropertyCSS.BORDER_BOTTOM],
    prefix: GhostPrefix.BORDER_Y,
    examples: ["4", "4-red", "2-f3f-dashed"]
});

const BorderX: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_RIGHT, PropertyCSS.BORDER_LEFT],
    prefix: GhostPrefix.BORDER_X,
    examples: ["4", "4-red", "2-green-dashed"]
});

const BorderRadius: RowProps = {
    header: {
        cssProperties: [PropertyCSS.BORDER_RADIUS],
        prefix: GhostPrefix.BORDER_RADIUS,
        possibleSuffixes: ["percentage"],
        example: { suffix: "25", transformer: BorderRadiusTransformer }
    },
    body: BorderBodyExample(["10", "25", "50"])
};

const BorderContainer: RowsContainersProps = {
    title: "Border",
    rows: [
        Border,
        BorderTop, BorderBottom,
        BorderRight, BorderLeft,
        BorderY, BorderX,
        BorderRadius
    ]
};

export default BorderContainer;