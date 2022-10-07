import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";

const SizingUtilities: Utilities = {
    ...OneDeclarationUtility(GhostPrefix.WIDTH, PropertyCSS.WIDTH),
    ...OneDeclarationUtility(GhostPrefix.HEIGHT, PropertyCSS.HEIGHT),
    ...OneDeclarationUtility(GhostPrefix.MIN_WIDTH, PropertyCSS.MIN_WIDTH),
    ...OneDeclarationUtility(GhostPrefix.MIN_HEIGHT, PropertyCSS.MIN_HEIGHT),
    ...OneDeclarationUtility(GhostPrefix.MAX_WIDTH, PropertyCSS.MAX_WIDTH),
    ...OneDeclarationUtility(GhostPrefix.MAX_HEIGHT, PropertyCSS.MAX_HEIGHT),
};

export default SizingUtilities;