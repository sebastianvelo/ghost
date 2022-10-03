import GhostPrefix from "../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../components/row/Row";
import { RowsContainersProps } from "../../../components/row/RowsContainer";
import IntegerUnitDefaultPxTransformer from "../common/IntegerUnitDefaultPxTransformer";
import MarginBodyExample from "./example/MarginBodyExample";
import UtilityIntegerUnitSuffix from "./helpers/UtilityIntegerUnitSuffix";

const Margin: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MARGIN, GhostPrefix.MARGIN, 16),
    body: MarginBodyExample(["m_0", "m_2rem", "m_25", "m_50"], true)
};

const MarginTop: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MARGIN_TOP, GhostPrefix.MARGIN_TOP, 16),
    body: MarginBodyExample(["mt_0", "mt_2rem", "mt_25", "mt_50"], true)
};

const MarginBottom: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MARGIN_BOTTOM, GhostPrefix.MARGIN_BOTTOM, 16),
    body: MarginBodyExample(["mb_0", "mb_2rem", "mb_25", "mb_50"], true)
};

const MarginRight: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MARGIN_RIGHT, GhostPrefix.MARGIN_RIGHT, 16),
    body: MarginBodyExample(["mr_0", "mr_2rem", "mr_25", "mr_50"])
};

const MarginLeft: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MARGIN_LEFT, GhostPrefix.MARGIN_LEFT, 16),
    body: MarginBodyExample(["ml_0", "ml_2rem", "ml_25", "ml_50"])
};

const MarginY: RowProps = {
    header: {
        cssProperties: [PropertyCSS.MARGIN_TOP, PropertyCSS.MARGIN_BOTTOM],
        prefix: GhostPrefix.MARGIN_Y,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `20`, transformer: IntegerUnitDefaultPxTransformer }
    },
    body: MarginBodyExample(["my_0", "my_2rem", "my_25", "my_50"], true)
};

const MarginX: RowProps = {
    header: {
        cssProperties: [PropertyCSS.MARGIN_RIGHT, PropertyCSS.MARGIN_LEFT],
        prefix: GhostPrefix.MARGIN_X,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `20`, transformer: IntegerUnitDefaultPxTransformer }
    },
    body: MarginBodyExample(["mx_0", "mx_2rem", "mx_25", "mx_50"])
};

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