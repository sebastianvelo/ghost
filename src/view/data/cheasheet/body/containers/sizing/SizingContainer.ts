import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/row/Row";
import { RowsContainersProps } from "../../../../../components/row/RowsContainer";
import GenericBodyExample from "../../common/body/GenericBodyExample";
import UtilityIntegerUnitSuffix from "../../common/helpers/UtilityIntegerUnitSuffix";

const Width: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.WIDTH, GhostPrefix.WIDTH, 16),
    body: GenericBodyExample({
        classNames: ["w_100", "w_150", "w_200", "w_15vw", "w_75%"],
        aditionalClassName: "h_150 bg_secondary",
    })
};
const Height: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.HEIGHT, GhostPrefix.HEIGHT, 16),
    body: GenericBodyExample({
        classNames: ["h_100", "h_120", "h_20", "h_200"],
        aditionalClassName: "w_150 bg_secondary",
    })
};

const MinWidth: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MIN_WIDTH, GhostPrefix.MIN_WIDTH, 16),
};
const MinHeight: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MIN_HEIGHT, GhostPrefix.MIN_HEIGHT, 16),
};
const MaxWidth: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MAX_WIDTH, GhostPrefix.MAX_WIDTH, 16),
};
const MaxHeight: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.MAX_HEIGHT, GhostPrefix.MAX_HEIGHT, 16),
};

const SizingContainer: RowsContainersProps = {
    title: "Sizing",
    rows: [
        Width,
        Height,
        MinWidth,
        MinHeight,
        MaxWidth,
        MaxHeight,
    ]
};

export default SizingContainer;