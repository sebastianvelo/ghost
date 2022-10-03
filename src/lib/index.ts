import GhostClassName from "./className/GhostClassName";
import { getGhostClassNamesFromDocument } from "./common/classNames";
import config from "./ghost.config";
import GhostStyleSheet from "./GhostStyleSheet";

const styleSheet = new GhostStyleSheet(config);

const init = () => {
    const startTime = performance.now();

    const classes: GhostClassName[] = getGhostClassNamesFromDocument();

    const endTime = performance.now();
    const ms = endTime - startTime;
    console.log(`Build ${classes.length} different classes `);
    console.log(`${ms} milliseconds`);
    console.log(`${ms / classes.length} milliseconds per class`);

    styleSheet.addRulesWithClasses(classes);
};


export default init;