import GhostPrefix from "../../utility/GhostPrefix";
import { GenericClassName } from "../GhostClassName";

export type PaddingAllSidesClassName = GenericClassName<GhostPrefix.PADDING, number>;
export type PaddingRightClassName = GenericClassName<GhostPrefix.PADDING_RIGHT, number>;
export type PaddingLeftClassName = GenericClassName<GhostPrefix.PADDING_LEFT, number>;
export type PaddingBottomClassName = GenericClassName<GhostPrefix.PADDING_BOTTOM, number>;
export type PaddingTopClassName = GenericClassName<GhostPrefix.PADDING_TOP, number>;
export type PaddingXClassName = GenericClassName<GhostPrefix.PADDING_X, number>;
export type PaddingYClassName = GenericClassName<GhostPrefix.PADDING_Y, number>;

export type PaddingClassName =
  PaddingAllSidesClassName |
  PaddingRightClassName | PaddingLeftClassName |
  PaddingBottomClassName |
  PaddingTopClassName |
  PaddingXClassName |
  PaddingYClassName;

export default PaddingClassName;