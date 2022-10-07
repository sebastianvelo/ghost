import GhostPrefix from "../../utility/GhostPrefix";
import { GenericClassName } from "../GhostClassName";

type WidthClassName = GenericClassName<GhostPrefix.WIDTH, number>;
type HeightClassName = GenericClassName<GhostPrefix.HEIGHT, number>;

type SizingClassName =
    WidthClassName |
    HeightClassName;

export default SizingClassName;