import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";

const PaddingUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.PADDING, PropertyCSS.PADDING),
    ...OneDeclarationUtility(GhostPrefix.PADDING_RIGHT, PropertyCSS.PADDING_RIGHT),
    ...OneDeclarationUtility(GhostPrefix.PADDING_LEFT, PropertyCSS.PADDING_LEFT),
    ...OneDeclarationUtility(GhostPrefix.PADDING_BOTTOM, PropertyCSS.PADDING_BOTTOM),
    ...OneDeclarationUtility(GhostPrefix.PADDING_TOP, PropertyCSS.PADDING_TOP),
    [GhostPrefix.PADDING_X]: {
        declarations: [{ property: PropertyCSS.PADDING_RIGHT }, { property: PropertyCSS.PADDING_LEFT }]
    },
    [GhostPrefix.PADDING_Y]: {
        declarations: [{ property: PropertyCSS.PADDING_TOP }, { property: PropertyCSS.PADDING_BOTTOM }]
    },
};

export default PaddingUtilities;