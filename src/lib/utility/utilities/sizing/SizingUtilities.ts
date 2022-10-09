import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";

const SizingUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.WIDTH, PropertyCSS.WIDTH),
    ...SimpleUtility(GhostPrefix.HEIGHT, PropertyCSS.HEIGHT),
    ...SimpleUtility(GhostPrefix.MIN_WIDTH, PropertyCSS.MIN_WIDTH),
    ...SimpleUtility(GhostPrefix.MIN_HEIGHT, PropertyCSS.MIN_HEIGHT),
    ...SimpleUtility(GhostPrefix.MAX_WIDTH, PropertyCSS.MAX_WIDTH),
    ...SimpleUtility(GhostPrefix.MAX_HEIGHT, PropertyCSS.MAX_HEIGHT),
};

export default SizingUtilities;