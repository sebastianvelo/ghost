import initGhost from "./lib";
import config from "./lib/ghost.config";
import "./styles.css";
import render from "./view";

render();
initGhost(config);
