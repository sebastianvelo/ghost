import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/RowsContainer";
import { GenericOverflow, GenericOverscroll } from "./Helper";
import UtilityIntegerSuffix from "../../common/helpers/UtilityIntegerSuffix";
import UtilityIntegerUnitSuffix from "../../common/helpers/UtilityIntegerUnitSuffix";
import { BoxTransformer } from "../../../../../../lib/utility/utilities/layout/transformers";

const Display: RowProps = {
    header: {
        cssProperties: [PropertyCSS.DISPLAY],
        prefix: GhostPrefix.DISPLAY,
        possibleSuffixes: ["inline", "block", "contents", "flex", "grid", "inline-block", "inline-flex", "inline-grid", "inline-table", "list-item", "run-in", "table", "table-caption", "\n      table-column-group", "table-header-group", "table-footer-group", "table-row-group", "table-cell", "table-column", "table-row", "none",],
        example: { suffix: "flex" }
    },
};

const Position: RowProps = {
    header: {
        cssProperties: [PropertyCSS.POSITION],
        prefix: GhostPrefix.POSITION,
        possibleSuffixes: ["static", "absolute", "fixed", "relative", "sticky"],
        example: { suffix: "absolute" }
    }
};

const BoxSizing: RowProps = {
    header: {
        cssProperties: [PropertyCSS.BOX_SIZING],
        prefix: GhostPrefix.BOX,
        possibleSuffixes: ["border", "content"],
        example: { suffix: "border", transformer: BoxTransformer, }
    }
};

const Float: RowProps = {
    header: {
        cssProperties: [PropertyCSS.FLOAT],
        prefix: GhostPrefix.FLOAT,
        possibleSuffixes: ["right", "left", "none"],
        example: { suffix: "right" }
    }
};

const Clear: RowProps = {
    header: {
        cssProperties: [PropertyCSS.CLEAR],
        prefix: GhostPrefix.CLEAR,
        possibleSuffixes: ["right", "left", "both", "none"],
        example: { suffix: "both" }
    }
};

const ObjectFit: RowProps = {
    header: {
        cssProperties: [PropertyCSS.OBJECT_FIT],
        prefix: GhostPrefix.OBJECT_FIT,
        possibleSuffixes: ["contain", "cover", "fill", "none", "scale-down"],
        example: { suffix: "fill" }
    }
};

const Visibility: RowProps = {
    header: {
        cssProperties: [PropertyCSS.VISIBILITY],
        prefix: GhostPrefix.VISIBILITY,
        possibleSuffixes: ["visible", "hidden"],
        example: { suffix: "hidden" }
    }
};

const Overflow = GenericOverflow(PropertyCSS.OVERFLOW, GhostPrefix.OVERFLOW);

const OverflowY = GenericOverflow(PropertyCSS.OVERFLOW_Y, GhostPrefix.OVERFLOW_Y);

const OverflowX = GenericOverflow(PropertyCSS.OVERFLOW_X, GhostPrefix.OVERFLOW_X);

const Overscroll = GenericOverscroll(PropertyCSS.OVERSCROLL, GhostPrefix.OVERSCROLL);

const OverscrollY = GenericOverscroll(PropertyCSS.OVERSCROLL_Y, GhostPrefix.OVERSCROLL_Y);

const OverscrollX = GenericOverscroll(PropertyCSS.OVERSCROLL_X, GhostPrefix.OVERSCROLL_X);

const Top = UtilityIntegerUnitSuffix(PropertyCSS.TOP, GhostPrefix.TOP, 10);

const Bottom = UtilityIntegerUnitSuffix(PropertyCSS.BOTTOM, GhostPrefix.BOTTOM, 16);

const Right = UtilityIntegerUnitSuffix(PropertyCSS.RIGHT, GhostPrefix.RIGHT, 4);

const Left = UtilityIntegerUnitSuffix(PropertyCSS.LEFT, GhostPrefix.LEFT, 0);

const ZIndex = UtilityIntegerSuffix(PropertyCSS.Z_INDEX, GhostPrefix.Z_INDEX, 30);

const LayoutContainer: RowsContainersProps = {
    title: "Layout",
    rows: [
        Display,
        Position,
        BoxSizing,
        Float,
        Clear,
        ObjectFit,
        Overflow, OverflowX, OverflowY,
        Overscroll, OverscrollX, OverscrollY,
        Top, Bottom, Left, Right,
        ZIndex,
        Visibility,
    ]
};

export default LayoutContainer;