import { PropertySeparator } from "../../common/types";
import IUtilities from "../common/IUtilities";
import BackgroundUtilities from "./background/BackgroundUtilities";
import BorderUtilities from "./border/BorderUtilities";
import FlexUtilities from "./flex/FlexUtilities";
import FlexAndGridUtilities from "./flexAndGrid/FlexAndGridUtilities";
import GridUtilities from "./grid/GridUtilities";
import LayoutUtilities from "./layout/LayoutUtilities";
import MarginUtilities from "./margin/MarginUtilities";
import PaddingUtilities from "./padding/PaddingUtilities";
import SizingUtilities from "./sizing/SizingUtilities";
import SpaceUtilities from "./space/SpaceUtilities";
import TypographyUtilities from "./typography/TypographyUtilities";

const Utilities: IUtilities = {
    ...BackgroundUtilities,
    ...TypographyUtilities,
    ...PaddingUtilities,
    ...MarginUtilities,
    ...SizingUtilities,
    ...SpaceUtilities,
    ...BorderUtilities,
    ...LayoutUtilities,
    ...FlexUtilities,
    ...GridUtilities,
    ...FlexAndGridUtilities,
};


export const utilityExists = (prefix?: string): boolean => {
    if (!prefix) return false;
    const [property] = prefix.split(PropertySeparator);
    return !!Utilities[property];
};

export default Utilities;