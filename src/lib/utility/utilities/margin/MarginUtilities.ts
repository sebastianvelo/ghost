import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";

const MarginUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.MARGIN, PropertyCSS.MARGIN),
    ...OneActionUtility(GhostPrefix.MARGIN_RIGHT, PropertyCSS.MARGIN_RIGHT),
    ...OneActionUtility(GhostPrefix.MARGIN_LEFT, PropertyCSS.MARGIN_LEFT),
    ...OneActionUtility(GhostPrefix.MARGIN_BOTTOM, PropertyCSS.MARGIN_BOTTOM),
    ...OneActionUtility(GhostPrefix.MARGIN_TOP, PropertyCSS.MARGIN_TOP),
    [GhostPrefix.MARGIN_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_RIGHT }, { property: PropertyCSS.MARGIN_LEFT }]
    },
    [GhostPrefix.MARGIN_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP }, { property: PropertyCSS.MARGIN_BOTTOM }]
    },
};

export default MarginUtilities;