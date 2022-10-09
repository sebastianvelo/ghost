import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";
import { BoxTransformer } from "./transformers";

const BoxUtility: Utilities = SimpleUtility(GhostPrefix.BOX, PropertyCSS.BOX_SIZING, BoxTransformer);

const FloatUtility: Utilities = SimpleUtility(GhostPrefix.FLOAT, PropertyCSS.FLOAT);

const ClearUtility: Utilities = SimpleUtility(GhostPrefix.CLEAR, PropertyCSS.CLEAR);

const ObjectUtility: Utilities = SimpleUtility(GhostPrefix.OBJECT_FIT, PropertyCSS.OBJECT_FIT);

const OverflowUtility: Utilities = SimpleUtility(GhostPrefix.OVERFLOW, PropertyCSS.OVERFLOW);
const OverflowYUtility: Utilities = SimpleUtility(GhostPrefix.OVERFLOW_Y, PropertyCSS.OVERFLOW_Y);
const OverflowXUtility: Utilities = SimpleUtility(GhostPrefix.OVERFLOW_X, PropertyCSS.OVERFLOW_X);

const OverscrollUtility: Utilities = SimpleUtility(GhostPrefix.OVERSCROLL, PropertyCSS.OVERSCROLL);
const OverscrollYUtility: Utilities = SimpleUtility(GhostPrefix.OVERSCROLL_Y, PropertyCSS.OVERSCROLL_Y);
const OverscrollXUtility: Utilities = SimpleUtility(GhostPrefix.OVERSCROLL_X, PropertyCSS.OVERSCROLL_X);

const TopUtility: Utilities = SimpleUtility(GhostPrefix.TOP, PropertyCSS.TOP);
const BottomUtility: Utilities = SimpleUtility(GhostPrefix.BOTTOM, PropertyCSS.BOTTOM);
const RightUtility: Utilities = SimpleUtility(GhostPrefix.RIGHT, PropertyCSS.RIGHT);
const LeftUtility: Utilities = SimpleUtility(GhostPrefix.LEFT, PropertyCSS.LEFT);

const DisplayUtility: Utilities = SimpleUtility(GhostPrefix.DISPLAY, PropertyCSS.DISPLAY);

const PositionUtility: Utilities = SimpleUtility(GhostPrefix.POSITION, PropertyCSS.POSITION);

const VisibilityUtility: Utilities = SimpleUtility(GhostPrefix.VISIBILITY, PropertyCSS.VISIBILITY);

const ZUtility: Utilities = SimpleUtility(GhostPrefix.Z_INDEX, PropertyCSS.Z_INDEX);

const LayoutUtilities: Utilities = {
    ...DisplayUtility,
    ...PositionUtility,
    ...BoxUtility,
    ...FloatUtility,
    ...ClearUtility,
    ...ObjectUtility,
    ...OverflowUtility,
    ...OverflowYUtility,
    ...OverflowXUtility,
    ...OverscrollUtility,
    ...OverscrollYUtility,
    ...OverscrollXUtility,
    ...TopUtility,
    ...BottomUtility,
    ...RightUtility,
    ...LeftUtility,
    ...ZUtility,
    ...VisibilityUtility,
};

export default LayoutUtilities;