import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import OneDeclarationUtility from "../../common/OneDeclarationUtility";

const CursorUtility: Utilities = OneDeclarationUtility(GhostPrefix.CURSOR, PropertyCSS.CURSOR);
const CaretColorUtility: Utilities = OneDeclarationUtility(GhostPrefix.CARET_COLOR, PropertyCSS.CARET_COLOR);
const AccentColorUtility: Utilities = OneDeclarationUtility(GhostPrefix.ACCENT_COLOR, PropertyCSS.FLOAT);
const PointerEventsUtility: Utilities = OneDeclarationUtility(GhostPrefix.POINTER_EVENTS, PropertyCSS.POINTER_EVENTS);
const ScrollBehaviorUtility: Utilities = OneDeclarationUtility(GhostPrefix.SCROLL_BEHAVIOR, PropertyCSS.SCROLL_BEHAVIOR);
const ResizeUtility: Utilities = OneDeclarationUtility(GhostPrefix.RESIZE, PropertyCSS.RESIZE);

const InteractivityUtilities: Utilities = {
    ...CursorUtility,
    ...CaretColorUtility,
    ...AccentColorUtility,
    ...PointerEventsUtility,
    ...ScrollBehaviorUtility,
    ...ResizeUtility,
};

export default InteractivityUtilities;