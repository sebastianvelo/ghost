import GhostPrefix from "../../../../lib/property/GhostPrefix";
import PropertyCSS from "../../../../lib/property/PropertyCSS";
import { RowProps } from "../../../components/row/Row";
import { RowsContainersProps } from "../../../components/row/RowsContainer";
import IntegerUnitDefaultPxTransformer from "../common/IntegerUnitDefaultPxTransformer";
import PaddingBodyExample from "./example/PaddingBodyExample";
import UtilityIntegerUnitSuffix from "./helpers/UtilityIntegerUnitSuffix";

const Padding: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.PADDING, GhostPrefix.PADDING, 16),
    body: PaddingBodyExample(["p_0", "p_4", "p_16", "p_32"])
};

const PaddingTop: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.PADDING_TOP, GhostPrefix.PADDING_TOP, 16),
    body: PaddingBodyExample(["pt_0", "pt_4", "pt_16", "pt_32"])
};

const PaddingBottom: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.PADDING_BOTTOM, GhostPrefix.PADDING_BOTTOM, 16),
    body: PaddingBodyExample(["pb_0", "pb_4", "pb_16", "pb_32"])
};

const PaddingRight: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.PADDING_RIGHT, GhostPrefix.PADDING_RIGHT, 16),
    body: PaddingBodyExample(["pr_0", "pr_4", "pr_16", "pr_32"])
};

const PaddingLeft: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.PADDING_LEFT, GhostPrefix.PADDING_LEFT, 16),
    body: PaddingBodyExample(["pl_0", "pl_4", "pl_16", "pl_32"])
};

const PaddingY: RowProps = {
    header: {
        cssProperties: [PropertyCSS.PADDING_TOP, PropertyCSS.PADDING_BOTTOM],
        prefix: GhostPrefix.PADDING_Y,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `20`, transformer: IntegerUnitDefaultPxTransformer }
    },
    body: PaddingBodyExample(["py_0", "py_4", "py_16", "py_32"])
};

const PaddingX: RowProps = {
    header: {
        cssProperties: [PropertyCSS.PADDING_RIGHT, PropertyCSS.PADDING_LEFT],
        prefix: GhostPrefix.PADDING_X,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `20`, transformer: IntegerUnitDefaultPxTransformer }
    },
    body: PaddingBodyExample(["px_0", "px_4", "px_16", "px_32"])
};

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