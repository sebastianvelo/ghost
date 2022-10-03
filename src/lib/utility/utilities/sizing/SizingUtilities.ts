import GhostPrefix from "../../../property/GhostPrefix";
import PropertyCSS from "../../../property/PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";

const SizingUtilities: Utilities = {
    ...OneActionUtility(GhostPrefix.WIDTH, PropertyCSS.WIDTH),
    ...OneActionUtility(GhostPrefix.HEIGHT, PropertyCSS.HEIGHT),
    ...OneActionUtility(GhostPrefix.MIN_WIDTH, PropertyCSS.MIN_WIDTH),
    ...OneActionUtility(GhostPrefix.MIN_HEIGHT, PropertyCSS.MIN_HEIGHT),
    ...OneActionUtility(GhostPrefix.MAX_WIDTH, PropertyCSS.MAX_WIDTH),
    ...OneActionUtility(GhostPrefix.MAX_HEIGHT, PropertyCSS.MAX_HEIGHT),
};

export default SizingUtilities;