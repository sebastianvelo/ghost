import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneActionUtility from "../../common/OneActionUtility";
import ClassNameTransformer from "../../common/transformers/ClassNameTransformer";

export const BoxTransformer: ClassNameTransformer = (suffix: string) => `${suffix}-box`;
const BoxUtility: Utilities = OneActionUtility(GhostPrefix.BOX, PropertyCSS.BOX_SIZING, BoxTransformer);

const FloatUtility: Utilities = OneActionUtility(GhostPrefix.FLOAT, PropertyCSS.FLOAT);

const ClearUtility: Utilities = OneActionUtility(GhostPrefix.CLEAR, PropertyCSS.CLEAR);

const ObjectUtility: Utilities = OneActionUtility(GhostPrefix.OBJECT_FIT, PropertyCSS.OBJECT_FIT);

const OverflowUtility: Utilities = OneActionUtility(GhostPrefix.OVERFLOW, PropertyCSS.OVERFLOW);
const OverflowYUtility: Utilities = OneActionUtility(GhostPrefix.OVERFLOW_Y, PropertyCSS.OVERFLOW_Y);
const OverflowXUtility: Utilities = OneActionUtility(GhostPrefix.OVERFLOW_X, PropertyCSS.OVERFLOW_X);

const OverscrollUtility: Utilities = OneActionUtility(GhostPrefix.OVERSCROLL, PropertyCSS.OVERSCROLL);
const OverscrollYUtility: Utilities = OneActionUtility(GhostPrefix.OVERSCROLL_Y, PropertyCSS.OVERSCROLL_Y);
const OverscrollXUtility: Utilities = OneActionUtility(GhostPrefix.OVERSCROLL_X, PropertyCSS.OVERSCROLL_X);

const TopUtility: Utilities = OneActionUtility(GhostPrefix.TOP, PropertyCSS.TOP);
const BottomUtility: Utilities = OneActionUtility(GhostPrefix.BOTTOM, PropertyCSS.BOTTOM);
const RightUtility: Utilities = OneActionUtility(GhostPrefix.RIGHT, PropertyCSS.RIGHT);
const LeftUtility: Utilities = OneActionUtility(GhostPrefix.LEFT, PropertyCSS.LEFT);

const DisplayUtility: Utilities = OneActionUtility(GhostPrefix.DISPLAY, PropertyCSS.DISPLAY);

const PositionUtility: Utilities = OneActionUtility(GhostPrefix.POSITION, PropertyCSS.POSITION);

const VisibilityUtility: Utilities = OneActionUtility(GhostPrefix.VISIBILITY, PropertyCSS.VISIBILITY);

const ZUtility: Utilities = OneActionUtility(GhostPrefix.Z_INDEX, PropertyCSS.Z_INDEX);

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