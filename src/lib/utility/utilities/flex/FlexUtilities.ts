import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import { FlexBasisTransformer, FlexDirectionTransformer } from "./transformers";

const FlexUtilities: Utilities = {
    ...SimpleUtility(GhostPrefix.FLEX_BASIS, PropertyCSS.FLEX_BASIS, FlexBasisTransformer),
    ...SimpleUtility(GhostPrefix.FLEX_DIRECTION, PropertyCSS.FLEX_DIRECTION, FlexDirectionTransformer),
    ...SimpleUtility(GhostPrefix.FLEX_WRAP, PropertyCSS.FLEX_WRAP),
    ...SimpleUtility(GhostPrefix.FLEX_GROW, PropertyCSS.FLEX_GROW),
    ...SimpleUtility(GhostPrefix.FLEX_SHRINK, PropertyCSS.FLEX_SHRINK),
};

export default FlexUtilities;