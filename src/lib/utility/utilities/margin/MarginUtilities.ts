import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";

const MarginUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.MARGIN, PropertyCSS.MARGIN),
    ...OneDeclarationUtility(GhostPrefix.MARGIN_RIGHT, PropertyCSS.MARGIN_RIGHT),
    ...OneDeclarationUtility(GhostPrefix.MARGIN_LEFT, PropertyCSS.MARGIN_LEFT),
    ...OneDeclarationUtility(GhostPrefix.MARGIN_BOTTOM, PropertyCSS.MARGIN_BOTTOM),
    ...OneDeclarationUtility(GhostPrefix.MARGIN_TOP, PropertyCSS.MARGIN_TOP),
    [GhostPrefix.MARGIN_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_RIGHT }, { property: PropertyCSS.MARGIN_LEFT }]
    },
    [GhostPrefix.MARGIN_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP }, { property: PropertyCSS.MARGIN_BOTTOM }]
    },
};

export default MarginUtilities;