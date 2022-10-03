import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";

const PaddingUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.PADDING, PropertyCSS.PADDING),
    ...OneActionUtility(GhostPrefix.PADDING_RIGHT, PropertyCSS.PADDING_RIGHT),
    ...OneActionUtility(GhostPrefix.PADDING_LEFT, PropertyCSS.PADDING_LEFT),
    ...OneActionUtility(GhostPrefix.PADDING_BOTTOM, PropertyCSS.PADDING_BOTTOM),
    ...OneActionUtility(GhostPrefix.PADDING_TOP, PropertyCSS.PADDING_TOP),
    [GhostPrefix.PADDING_X]: {
        declarations: [{ property: PropertyCSS.PADDING_RIGHT }, { property: PropertyCSS.PADDING_LEFT }]
    },
    [GhostPrefix.PADDING_Y]: {
        declarations: [{ property: PropertyCSS.PADDING_TOP }, { property: PropertyCSS.PADDING_BOTTOM }]
    },
};

export default PaddingUtilities;