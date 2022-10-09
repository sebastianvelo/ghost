import GhostClassName from "./className/GhostClassName";
import { getGhostClassNames } from "./common/classNames";
import config from "./ghost.config";
import GhostStyleSheet from "./GhostStyleSheet";
import timerCalculator from "./performance/timerCalculator";

const styleSheet = new GhostStyleSheet(config);

const initGhost = () => {
    const timer = timerCalculator();
    const classes: GhostClassName[] = getGhostClassNames(config.source);

    styleSheet.addRulesWithClasses(classes);
    timer.total(classes);
};

export default initGhost;