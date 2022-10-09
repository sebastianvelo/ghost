import GhostPrefix from "../../GhostPrefix";
import PropertyCSS from "../../PropertyCSS";
import Utilities from "../../common/IUtilities";
import SimpleUtility from "../../common/SimpleUtility";

const CursorUtility: Utilities = SimpleUtility(GhostPrefix.CURSOR, PropertyCSS.CURSOR);
const CaretColorUtility: Utilities = SimpleUtility(GhostPrefix.CARET_COLOR, PropertyCSS.CARET_COLOR);
const AccentColorUtility: Utilities = SimpleUtility(GhostPrefix.ACCENT_COLOR, PropertyCSS.FLOAT);
const PointerEventsUtility: Utilities = SimpleUtility(GhostPrefix.POINTER_EVENTS, PropertyCSS.POINTER_EVENTS);
const ScrollBehaviorUtility: Utilities = SimpleUtility(GhostPrefix.SCROLL_BEHAVIOR, PropertyCSS.SCROLL_BEHAVIOR);
const ResizeUtility: Utilities = SimpleUtility(GhostPrefix.RESIZE, PropertyCSS.RESIZE);

const InteractivityUtilities: Utilities = {
    ...CursorUtility,
    ...CaretColorUtility,
    ...AccentColorUtility,
    ...PointerEventsUtility,
    ...ScrollBehaviorUtility,
    ...ResizeUtility,
};

export default InteractivityUtilities;