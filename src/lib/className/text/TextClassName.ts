import GhostPrefix from "../../utility/GhostPrefix";
import ColorSuffix from "../../suffix/common/color/ColorSuffix";
import { TextAlignSuffix, TextWeightSuffix } from "../../suffix/text/TextSuffix";
import { GenericClassName } from "../GhostClassName";

type TextColorClassName = GenericClassName<GhostPrefix.COLOR, ColorSuffix>;
type TextWeightClassName = GenericClassName<GhostPrefix.FONT_WEIGHT, TextWeightSuffix>;
type TextSizeClassName = GenericClassName<GhostPrefix.FONT_SIZE, number>;
type TextAlignClassName = GenericClassName<GhostPrefix.TEXT_ALIGN, TextAlignSuffix>;

type TextClassName =
    TextColorClassName |
    TextWeightClassName |
    TextSizeClassName | 
    TextAlignClassName;

export default TextClassName;