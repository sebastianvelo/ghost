import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/RowsContainer";
import UtilityIntegerUnitSuffix from "../../common/helpers/UtilityIntegerUnitSuffix";

const Position: RowProps = {
    header: {
        cssProperties: [PropertyCSS.POSITION],
        prefix: GhostPrefix.POSITION,
        possibleSuffixes: ["static", "absolute", "fixed", "relative", "sticky"],
        example: { suffix: "absolute" }
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

const Top = UtilityIntegerUnitSuffix(PropertyCSS.TOP, GhostPrefix.TOP, 10);

const Bottom = UtilityIntegerUnitSuffix(PropertyCSS.BOTTOM, GhostPrefix.BOTTOM, 16);

const Right = UtilityIntegerUnitSuffix(PropertyCSS.RIGHT, GhostPrefix.RIGHT, 4);

const Left = UtilityIntegerUnitSuffix(PropertyCSS.LEFT, GhostPrefix.LEFT, 0);


const PositioningContainer: RowsContainersProps = {
    title: "Positioning",
    rows: [
        Position,
        Top, Bottom, Left, Right,
        Float,
        Clear,
    ]
};

export default PositioningContainer;