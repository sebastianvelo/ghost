import GhostPrefix from "../../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../../components/row/Row";
import { RowsContainersProps } from "../../../../components/row/RowsContainer";
import { GenericMargin } from "./helpers/MarginHelper";

const Margin: RowProps = GenericMargin([PropertyCSS.MARGIN], GhostPrefix.MARGIN, true);
const MarginTop: RowProps = GenericMargin([PropertyCSS.MARGIN_TOP], GhostPrefix.MARGIN_TOP, true);
const MarginBottom: RowProps = GenericMargin([PropertyCSS.MARGIN_BOTTOM], GhostPrefix.MARGIN_BOTTOM, true);
const MarginRight: RowProps = GenericMargin([PropertyCSS.MARGIN_RIGHT], GhostPrefix.MARGIN_RIGHT);
const MarginLeft: RowProps = GenericMargin([PropertyCSS.MARGIN_LEFT], GhostPrefix.MARGIN_LEFT);
const MarginY: RowProps = GenericMargin([PropertyCSS.MARGIN_TOP, PropertyCSS.MARGIN_BOTTOM], GhostPrefix.MARGIN_Y, true);
const MarginX: RowProps = GenericMargin([PropertyCSS.MARGIN_RIGHT, PropertyCSS.MARGIN_LEFT], GhostPrefix.MARGIN_X);

const MarginContainer: RowsContainersProps = {
    title: "Margin",
    rows: [
        Margin,
        MarginTop, MarginBottom,
        MarginRight, MarginLeft,
        MarginY, MarginX
    ]
};

export default MarginContainer;