import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";

const PaddingUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.PADDING, PropertyCSS.PADDING),
    ...SimpleUtility(GhostPrefix.PADDING_RIGHT, PropertyCSS.PADDING_RIGHT),
    ...SimpleUtility(GhostPrefix.PADDING_LEFT, PropertyCSS.PADDING_LEFT),
    ...SimpleUtility(GhostPrefix.PADDING_BOTTOM, PropertyCSS.PADDING_BOTTOM),
    ...SimpleUtility(GhostPrefix.PADDING_TOP, PropertyCSS.PADDING_TOP),
    [GhostPrefix.PADDING_X]: {
        declarations: [{ property: PropertyCSS.PADDING_RIGHT }, { property: PropertyCSS.PADDING_LEFT }]
    },
    [GhostPrefix.PADDING_Y]: {
        declarations: [{ property: PropertyCSS.PADDING_TOP }, { property: PropertyCSS.PADDING_BOTTOM }]
    },
};

export default PaddingUtilities;