import GhostPrefix from "../../../../../../lib/utility/GhostPrefix";
import PropertyCSS from "../../../../../../lib/utility/PropertyCSS";
import { RowProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/Row";
import { RowsContainersProps } from "../../../../../components/pages/cheatsheet/body/section/category/row/RowsContainer";
import GenericBodyExample from "../../common/body/GenericBodyExample";
import UtilityIntegerUnitSuffix from "../../common/helpers/UtilityIntegerUnitSuffix";
import { GenericBorder } from "./Helper";

const Outline: RowProps = GenericBorder({
    properties: [PropertyCSS.OUTLINE],
    prefix: GhostPrefix.OUTLINE,
    examples: ["4", "4-red-dotted", "6-00adfb-dashed"]
});

const OutlineWidth: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.OUTLINE_WIDTH, GhostPrefix.OUTLINE_WIDTH, 5),
    body: GenericBodyExample({
        classNames: ["0", "4", "10"]
            .map(suffix => `${GhostPrefix.OUTLINE_WIDTH}_${suffix}`),
        aditionalClassName: "outline-c_primary outline-s_solid w_150 h_150 bg_secondary",
    })
};

const OutlineOffset: RowProps = {
    ...UtilityIntegerUnitSuffix(PropertyCSS.OUTLINE_OFFSET, GhostPrefix.OUTLINE_OFFSET, 5),
    body: GenericBodyExample({
        classNames: ["2", "4", "6"]
            .map(suffix => `${GhostPrefix.OUTLINE_OFFSET}_${suffix}`),
        aditionalClassName: "outline-w_2 outline-c_primary outline-s_solid w_150 h_150 bg_secondary",
    })
};

const OutlineContainer: RowsContainersProps = {
    title: "Outline",
    rows: [
        Outline,
        OutlineWidth,
        OutlineOffset,
    ]
};

export default OutlineContainer;