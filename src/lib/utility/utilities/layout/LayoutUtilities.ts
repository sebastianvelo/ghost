import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";
import { BoxTransformer } from "./transformers";

const BoxUtility: Utilities = OneDeclarationUtility(GhostPrefix.BOX, PropertyCSS.BOX_SIZING, BoxTransformer);

const FloatUtility: Utilities = OneDeclarationUtility(GhostPrefix.FLOAT, PropertyCSS.FLOAT);

const ClearUtility: Utilities = OneDeclarationUtility(GhostPrefix.CLEAR, PropertyCSS.CLEAR);

const ObjectUtility: Utilities = OneDeclarationUtility(GhostPrefix.OBJECT_FIT, PropertyCSS.OBJECT_FIT);

const OverflowUtility: Utilities = OneDeclarationUtility(GhostPrefix.OVERFLOW, PropertyCSS.OVERFLOW);
const OverflowYUtility: Utilities = OneDeclarationUtility(GhostPrefix.OVERFLOW_Y, PropertyCSS.OVERFLOW_Y);
const OverflowXUtility: Utilities = OneDeclarationUtility(GhostPrefix.OVERFLOW_X, PropertyCSS.OVERFLOW_X);

const OverscrollUtility: Utilities = OneDeclarationUtility(GhostPrefix.OVERSCROLL, PropertyCSS.OVERSCROLL);
const OverscrollYUtility: Utilities = OneDeclarationUtility(GhostPrefix.OVERSCROLL_Y, PropertyCSS.OVERSCROLL_Y);
const OverscrollXUtility: Utilities = OneDeclarationUtility(GhostPrefix.OVERSCROLL_X, PropertyCSS.OVERSCROLL_X);

const TopUtility: Utilities = OneDeclarationUtility(GhostPrefix.TOP, PropertyCSS.TOP);
const BottomUtility: Utilities = OneDeclarationUtility(GhostPrefix.BOTTOM, PropertyCSS.BOTTOM);
const RightUtility: Utilities = OneDeclarationUtility(GhostPrefix.RIGHT, PropertyCSS.RIGHT);
const LeftUtility: Utilities = OneDeclarationUtility(GhostPrefix.LEFT, PropertyCSS.LEFT);

const DisplayUtility: Utilities = OneDeclarationUtility(GhostPrefix.DISPLAY, PropertyCSS.DISPLAY);

const PositionUtility: Utilities = OneDeclarationUtility(GhostPrefix.POSITION, PropertyCSS.POSITION);

const VisibilityUtility: Utilities = OneDeclarationUtility(GhostPrefix.VISIBILITY, PropertyCSS.VISIBILITY);

const ZUtility: Utilities = OneDeclarationUtility(GhostPrefix.Z_INDEX, PropertyCSS.Z_INDEX);

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