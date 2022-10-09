import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";

const MarginUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.MARGIN, PropertyCSS.MARGIN),
    ...SimpleUtility(GhostPrefix.MARGIN_RIGHT, PropertyCSS.MARGIN_RIGHT),
    ...SimpleUtility(GhostPrefix.MARGIN_LEFT, PropertyCSS.MARGIN_LEFT),
    ...SimpleUtility(GhostPrefix.MARGIN_BOTTOM, PropertyCSS.MARGIN_BOTTOM),
    ...SimpleUtility(GhostPrefix.MARGIN_TOP, PropertyCSS.MARGIN_TOP),
    [GhostPrefix.MARGIN_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_RIGHT }, { property: PropertyCSS.MARGIN_LEFT }]
    },
    [GhostPrefix.MARGIN_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP }, { property: PropertyCSS.MARGIN_BOTTOM }]
    },
};

export default MarginUtilities;