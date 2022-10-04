import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import { BorderRadiusTransformer } from "../../../../../lib/utility/utilities/border/BorderUtilities";
import { RowProps } from "../../../../components/row/Row";
import { RowsContainersProps } from "../../../../components/row/RowsContainer";
import BorderBodyExample from "./example/BorderBodyExample";
import { GenericBorder } from "./helpers/BorderHelper";

const Border: RowProps =
    GenericBorder([PropertyCSS.BORDER], GhostPrefix.BORDER, ["4", "4-red", "6-00adfb-dashed"]);

const BorderTop: RowProps =
    GenericBorder([PropertyCSS.BORDER_TOP], GhostPrefix.BORDER_TOP, ["4", "4-111", "2-fca-dotted"]);

const BorderBottom: RowProps =
    GenericBorder([PropertyCSS.BORDER_BOTTOM], GhostPrefix.BORDER_BOTTOM, ["4", "4-red", "2-050-double"]);

const BorderRight: RowProps =
    GenericBorder([PropertyCSS.BORDER_RIGHT], GhostPrefix.BORDER_RIGHT, ["4", "4-red", "2-222-dashed"]);

const BorderLeft: RowProps =
    GenericBorder([PropertyCSS.BORDER_LEFT], GhostPrefix.BORDER_LEFT, ["4", "4-red", "2-ffa-dashed"]);

const BorderY: RowProps =
    GenericBorder([PropertyCSS.BORDER_TOP, PropertyCSS.BORDER_BOTTOM], GhostPrefix.BORDER_Y, ["4", "4-red", "2-f3f-dashed"]);

const BorderX: RowProps =
    GenericBorder([PropertyCSS.BORDER_RIGHT, PropertyCSS.BORDER_LEFT], GhostPrefix.BORDER_X, ["4", "4-red", "2-green-dashed"]);

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