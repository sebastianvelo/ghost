import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/category/row/RowsContainer";
import IntegerUnitDefaultPxTransformer from "../../common/IntegerUnitDefaultPxTransformer";
import SpaceBetweenExample from "./body/BodyExample";

const SpaceY: RowProps = {
    header: {
        cssProperties: [PropertyCSS.MARGIN_TOP],
        prefix: GhostPrefix.SPACE_Y,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `20`, transformer: IntegerUnitDefaultPxTransformer },
        extendsSelector: " > * + *"
    },
    body: SpaceBetweenExample(["space-y_0", "space-y_4", "space-y_25", "space-y_50"])
};

const SpaceX: RowProps = {
    header: {
        cssProperties: [PropertyCSS.MARGIN_RIGHT],
        prefix: GhostPrefix.SPACE_X,
        possibleSuffixes: ["numberUnit"],
        example: { suffix: `20`, transformer: IntegerUnitDefaultPxTransformer },
        extendsSelector: " > * + *"
    },
    body: SpaceBetweenExample(["space-x_0", "space-x_4", "space-x_25", "space-x_50", "space-x_3rem"], true)
};

const SpaceBetweenContainer: RowsContainersProps = {
    title: "Space between",
    rows: [
        SpaceY, SpaceX
    ]
};

export default SpaceBetweenContainer;