import GhostClassName from "./className/GhostClassName";
import { getGhostClassNames } from "./common/classNames";
import config from "./ghost.config";
import GhostStyleSheet from "./GhostStyleSheet";

const styleSheet = new GhostStyleSheet(config);

const timerCalculator = () => {
    const startTime = performance.now();
    return {
        total: () => performance.now() - startTime
    }
}

const initGhost = () => {
    const timer = timerCalculator();
    const classes: GhostClassName[] = getGhostClassNames(config.source);
    const ms = timer.total();

    console.log(`Build ${classes.length} different classes `);
    console.log(`${ms} milliseconds`);
    console.log(`${ms / classes.length} milliseconds per class`);

    styleSheet.addRulesWithClasses(classes);
};

export default initGhost;