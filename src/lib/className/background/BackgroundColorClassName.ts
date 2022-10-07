import GhostPrefix from "../../utility/GhostPrefix";
import ColorSuffix from "../../suffix/common/color/ColorSuffix";
import { GenericClassName } from "../GhostClassName";

type BackgroundColorClassName = GenericClassName<GhostPrefix.BG_COLOR, ColorSuffix>;

type BackgroundClassName = BackgroundColorClassName;

export default BackgroundClassName;