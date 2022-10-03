import GhostPrefix from "../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../lib/property/PropertyCSS";
import { BoxTransformer } from "../../../../lib/utility/utilities/layout/LayoutUtilities";
import { RowProps } from "../../../components/row/Row";
import { RowsContainersProps } from "../../../components/row/RowsContainer";
import { GenericOverflow, GenericOverscroll } from "./helpers/LayoutHelper";
import UtilityIntegerSuffix from "./helpers/UtilityIntegerSuffix";
import UtilityIntegerUnitSuffix from "./helpers/UtilityIntegerUnitSuffix";

const Display: RowProps = {
    header: {
        cssProperties: [PropertyCSS.DISPLAY],
        prefix: GhostPrefix.DISPLAY,
        possibleSuffixes: ["block", "flex"],
        example: { suffix: "flex" }
    },
};

const Position: RowProps = {
    header: {
        cssProperties: [PropertyCSS.POSITION],
        prefix: GhostPrefix.POSITION,
        possibleSuffixes: ["relative", "absolute"],
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