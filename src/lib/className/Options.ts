import { OptionsSeparatorType } from "../common/types";

type None = "";

export type PseudoClassSuffix = None | `${OptionsSeparatorType}${"hover" | "focus" | "active" | "visited" | "first" | "last"}`;

export type BreakpointSuffix = None | `${OptionsSeparatorType}${"sm" | "md" | "lg" | "xl" | "2xl"}`;

export type ThemeSuffix = None | `${OptionsSeparatorType}${"dark"}`;

type Options = `${PseudoClassSuffix}${BreakpointSuffix}${ThemeSuffix}`;

export default Options;