import { CheatsheetSectionProps } from "../../../components/pages/cheatsheet/body/section/CheatsheetSection";
import BackgroundContainer from "./containers/background/BackgroundContainer";
import BorderContainer from "./containers/border/BorderContainer";
import FlexContainer from "./containers/flex/FlexContainer";
import FlexAndGridContainer from "./containers/flexAndGrid/FlexAndGridContainer";
import GridContainer from "./containers/grid/GridContainer";
import LayoutContainer from "./containers/layout/LayoutContainer";
import MarginContainer from "./containers/margin/MarginContainer";
import OutlineContainer from "./containers/outline/OutlineContainer";
import PaddingContainer from "./containers/padding/PaddingContainer";
import PseudoclassesContainer from "./containers/pseudoclasses/PseudoclassesContainer";
import SizingContainer from "./containers/sizing/SizingContainer";
import SpaceBetweenContainer from "./containers/spaceBetween/SpaceBetweenContainer";
import TransitionContainer from "./containers/transition/TransitionContainer";
import TypographyContainer from "./containers/typography/TypographyContainer";

export const GeneralSection: CheatsheetSectionProps = {
    title: "General",
    containers: [
        TypographyContainer,
        BackgroundContainer,
        SizingContainer,
    ]
};

export const LayoutFlexAndGridSection: CheatsheetSectionProps = {
    title: "Layout, Flex and Grid",
    containers: [
        LayoutContainer,
        FlexAndGridContainer,
        FlexContainer,
        GridContainer,
    ]
};

export const SpacingSection: CheatsheetSectionProps = {
    title: "Spacing",
    containers: [
        PaddingContainer,
        MarginContainer,
        SpaceBetweenContainer,
    ]
};

export const BorderAndOutlineSection: CheatsheetSectionProps = {
    title: "Border and Outline",
    containers: [
        BorderContainer,
        OutlineContainer,
    ]
};

export const InteractivitySection: CheatsheetSectionProps = {
    title: "Interactivity",
    containers: [
        TransitionContainer,
    ]
};

export const OptionsSection: CheatsheetSectionProps = {
    title: "Options",
    containers: [
        PseudoclassesContainer,
    ]
};
