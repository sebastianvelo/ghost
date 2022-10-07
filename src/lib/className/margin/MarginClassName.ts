import GhostPrefix from "../../utility/GhostPrefix";
import { GenericClassName } from "../GhostClassName";

export type MarginAllSidesClassName = GenericClassName<GhostPrefix.MARGIN, number>;
export type MarginRightClassName = GenericClassName<GhostPrefix.MARGIN_RIGHT, number>;
export type MarginLeftClassName = GenericClassName<GhostPrefix.MARGIN_LEFT, number>;
export type MarginBottomClassName = GenericClassName<GhostPrefix.MARGIN_BOTTOM, number>;
export type MarginTopClassName = GenericClassName<GhostPrefix.MARGIN_TOP, number>;
export type MarginXClassName = GenericClassName<GhostPrefix.MARGIN_X, number>;
export type MarginYClassName = GenericClassName<GhostPrefix.MARGIN_Y, number>;

export type MarginClassName =
  MarginAllSidesClassName |
  MarginRightClassName | MarginLeftClassName |
  MarginBottomClassName |
  MarginTopClassName |
  MarginXClassName |
  MarginYClassName;

export default MarginClassName;