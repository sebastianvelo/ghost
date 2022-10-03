import GhostPrefix from "../../property/GhostPrefix";
import BorderSuffix from "../../suffix/border/BorderSuffix";
import { GenericClassName } from "../GhostClassName";

type BorderSizeStyleWidth =
    GenericClassName<GhostPrefix.BORDER, BorderSuffix> |
    GenericClassName<GhostPrefix.BORDER_RIGHT, BorderSuffix> |
    GenericClassName<GhostPrefix.BORDER_LEFT, BorderSuffix> |
    GenericClassName<GhostPrefix.BORDER_TOP, BorderSuffix> |
    GenericClassName<GhostPrefix.BORDER_BOTTOM, BorderSuffix>;
    
type BorderRadiusClassName = GenericClassName<GhostPrefix.BORDER_RADIUS, number>;

type BorderClassName = BorderSizeStyleWidth | BorderRadiusClassName;

export default BorderClassName;