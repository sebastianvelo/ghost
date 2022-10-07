import GhostPrefix from "../../utility/GhostPrefix";
import { GenericClassName } from "../GhostClassName";

type SpaceXClassName = GenericClassName<GhostPrefix.SPACE_X, number>;
type SpaceYClassName = GenericClassName<GhostPrefix.SPACE_Y, number>;

type SpaceClassName =
    SpaceXClassName |
    SpaceYClassName;

export default SpaceClassName;