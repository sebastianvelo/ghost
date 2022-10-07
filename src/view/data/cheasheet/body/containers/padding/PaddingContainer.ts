import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/RowsContainer";
import { GenericPadding } from "./Helper";

const Padding: RowProps = GenericPadding([PropertyCSS.PADDING], GhostPrefix.PADDING);
const PaddingTop: RowProps = GenericPadding([PropertyCSS.PADDING_TOP], GhostPrefix.PADDING_TOP);
const PaddingBottom: RowProps = GenericPadding([PropertyCSS.PADDING_BOTTOM], GhostPrefix.PADDING_BOTTOM);
const PaddingRight: RowProps = GenericPadding([PropertyCSS.PADDING_RIGHT], GhostPrefix.PADDING_RIGHT);
const PaddingLeft: RowProps = GenericPadding([PropertyCSS.PADDING_LEFT], GhostPrefix.PADDING_LEFT);
const PaddingY: RowProps = GenericPadding([PropertyCSS.PADDING_TOP, PropertyCSS.PADDING_BOTTOM], GhostPrefix.PADDING_Y);
const PaddingX: RowProps = GenericPadding([PropertyCSS.PADDING_RIGHT, PropertyCSS.PADDING_LEFT], GhostPrefix.PADDING_X);

const PaddingContainer: RowsContainersProps = {
    title: "Padding",
    rows: [
        Padding,
        PaddingTop, PaddingBottom,
        PaddingRight, PaddingLeft,
        PaddingY, PaddingX
    ]
};

export default PaddingContainer;