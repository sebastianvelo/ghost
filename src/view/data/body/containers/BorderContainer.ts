import GhostPrefix from "../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../components/row/Row";
import { RowsContainersProps } from "../../../components/row/RowsContainer";
import { GenericBorder } from "./helpers/BorderHelper";

const Border: RowProps =
    GenericBorder([PropertyCSS.BORDER], GhostPrefix.BORDER, "4-red", ["border_4", "border_4-red", "border_2-green-dashed"]);
const BorderTop: RowProps =
    GenericBorder([PropertyCSS.BORDER_TOP], GhostPrefix.BORDER_TOP, "2-blue-solid", ["border-t_4", "border-t_4-red", "border-t_2-green-dashed"]);
const BorderBottom: RowProps =
    GenericBorder([PropertyCSS.BORDER_BOTTOM], GhostPrefix.BORDER_BOTTOM, "1", ["border-b_4", "border-b_4-red", "border-b_2-green-dashed"]);
const BorderRight: RowProps =
    GenericBorder([PropertyCSS.BORDER_RIGHT], GhostPrefix.BORDER_RIGHT, "2-orange-dashed", ["border-r_4", "border-r_4-red", "border-r_2-green-dashed"]);
const BorderLeft: RowProps =
    GenericBorder([PropertyCSS.BORDER_LEFT], GhostPrefix.BORDER_LEFT, "1-lightblue-dotted", ["border-l_4", "border-l_4-red", "border-l_2-green-dashed"]);
const BorderY: RowProps =
    GenericBorder([PropertyCSS.BORDER_TOP, PropertyCSS.BORDER_BOTTOM], GhostPrefix.BORDER_Y, "2-red", ["border-y_4", "border-y_4-red", "border-y_2-green-dashed"]);
const BorderX: RowProps =
    GenericBorder([PropertyCSS.BORDER_RIGHT, PropertyCSS.BORDER_LEFT], GhostPrefix.BORDER_X, "1-blue", ["border-x_4", "border-y_4-red", "border-y_2-green-dashed"]);

const BorderContainer: RowsContainersProps = {
    title: "Border",
    rows: [
        Border,
        BorderTop, BorderBottom,
        BorderRight, BorderLeft,
        BorderY, BorderX
    ]
};

export default BorderContainer;