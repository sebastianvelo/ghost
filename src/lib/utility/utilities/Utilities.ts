import { PropertySeparator } from "../../common/types";
import IUtilities from "../common/IUtilities";
import BackgroundUtilities from "./background/BackgroundUtilities";
import BorderUtilities from "./border/BorderUtilities";
import FlexUtilities from "./flex/FlexUtilities";
import FlexAndGridUtilities from "./flexAndGrid/FlexAndGridUtilities";
import GridUtilities from "./grid/GridUtilities";
import InteractivityUtilities from "./interactivity/InteractivityUtilities";
import LayoutUtilities from "./layout/LayoutUtilities";
import MarginUtilities from "./margin/MarginUtilities";
import OutlineUtilities from "./outline/OutlineUtilities";
import PaddingUtilities from "./padding/PaddingUtilities";
import SizingUtilities from "./sizing/SizingUtilities";
import SpaceUtilities from "./space/SpaceUtilities";
import TransitionUtilities from "./transition/TransitionUtilities";
import TypographyUtilities from "./typography/TypographyUtilities";

const Utilities: IUtilities = {
    ...BackgroundUtilities,
    ...TypographyUtilities,
    ...PaddingUtilities,
    ...MarginUtilities,
    ...SpaceUtilities,
    ...SizingUtilities,
    ...BorderUtilities,
    ...OutlineUtilities,
    ...LayoutUtilities,
    ...FlexUtilities,
    ...GridUtilities,
    ...FlexAndGridUtilities,
    ...TransitionUtilities,
    ...InteractivityUtilities,
};

export const utilityExists = (prefix?: string): boolean => {
    if (!prefix) return false;
    const [property] = prefix.split(PropertySeparator);
    return !!Utilities[property];
};

export default Utilities;