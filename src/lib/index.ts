import GhostConfig from "./config/GhostConfig";
import getGhostClassNames from "./app/getGhostClassNames/getGhostClassNames";
import setStyleSheet from "./app/setStyleSheet/setStyleSheet";
import getStyleSheet from "./app/getStyleSheet/getStyleSheet";
import initializeConfig from "./config/initializeConfig";

const timerCalculator = () => {
  const startTime = performance.now();
  return {
    logTotal: (classNames: string[]) => {
      const ms = performance.now() - startTime
      console.log(`Build ${classNames.length} different classes `);
      console.log(`${ms} milliseconds`);
      console.log(`${ms / classNames.length} milliseconds per class`);
    }
  }
}

const initGhost = (config: GhostConfig) => {
  const timer = timerCalculator();
  initializeConfig(config);
  const classNames = getGhostClassNames(config.source);
  const styleSheet = getStyleSheet(classNames).innerHTML;
  timer.logTotal(classNames);
  setStyleSheet(config.output);
};

export default initGhost;
