import GhostPrefix from "../../../../../../lib/utility/enum/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/enum/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/RowsContainer";
import getExamples from "../../common/getExamples";
import BorderBodyExample from "./BodyExample";
import { GenericBorder } from "./Helper";

const Border: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER],
    prefix: GhostPrefix.BORDER,
    examples: ["4", "4-yellow", "6-00adfb-dashed"]
});

const BorderTop: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_TOP],
    prefix: GhostPrefix.BORDER_TOP,
    examples: ["4", "4-111", "2-fca-dotted"]
});

const BorderBottom: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_BOTTOM],
    prefix: GhostPrefix.BORDER_BOTTOM,
    examples: ["4", "4-red", "8-f5f-double"]
});

const BorderRight: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_RIGHT],
    prefix: GhostPrefix.BORDER_RIGHT,
    examples: ["4", "4-red", "4-f0f-dashed"]
});

const BorderLeft: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_LEFT],
    prefix: GhostPrefix.BORDER_LEFT,
    examples: ["4", "4-red", "4-ffa-dashed"]
});

const BorderY: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_TOP, PropertyCSS.BORDER_BOTTOM],
    prefix: GhostPrefix.BORDER_Y,
    examples: ["4", "4-red", "4-03f-dashed"]
});

const BorderX: RowProps = GenericBorder({
    properties: [PropertyCSS.BORDER_RIGHT, PropertyCSS.BORDER_LEFT],
    prefix: GhostPrefix.BORDER_X,
    examples: ["4", "4-red", "6-lime-dashed"]
});

const BorderRadius: RowProps = {
    header: {
        cssProperties: [PropertyCSS.BORDER_RADIUS],
        prefix: GhostPrefix.BORDER_RADIUS,
        possibleSuffixes: ["length"],
        example: { suffix: "25%" }
    },
    body: BorderBodyExample(getExamples(GhostPrefix.BORDER_RADIUS, ["25%", "50%", "1rem"]))
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