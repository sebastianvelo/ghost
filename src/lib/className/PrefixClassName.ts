import BackgroundClassName from "./background/BackgroundColorClassName";
import BorderClassName from "./border/BorderClassName";
import LayoutClassName from "./layout/LayoutClassName";
import MarginClassName from "./margin/MarginClassName";
import PaddingClassName from "./padding/PaddingClassName";
import SizingClassName from "./sizing/SizingClassName";
import SpaceClassName from "./space/SpaceClassName";
import TextClassName from "./text/TextClassName";

type PrefixClassName =
    LayoutClassName |
    BackgroundClassName |
    TextClassName |
    SizingClassName |
    PaddingClassName | MarginClassName | SpaceClassName |
    BorderClassName;

export default PrefixClassName;