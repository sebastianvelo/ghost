import "./styles.css";
import initGhost from "./lib";
import config from "./lib/ghost.config";
import render from "./view";

render();
initGhost(config);
