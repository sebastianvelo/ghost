import { TableBodyProps } from "../../../components/table/body/TableBody";
import BackgroundContainer from "./containers/BackgroundContainer";
import BorderContainer from "./containers/BorderContainer";
import FlexAndGridContainer from "./containers/FlexAndGridContainer";
import FlexContainer from "./containers/FlexContainer";
import GridContainer from "./containers/GridContainer";
import LayoutContainer from "./containers/LayoutContainer";
import MarginContainer from "./containers/MarginContainer";
import PaddingContainer from "./containers/PaddingContainer";
import SizingContainer from "./containers/SizingContainer";
import SpaceBetweenContainer from "./containers/SpaceBetweenContainer";
import TypographyContainer from "./containers/TypographyContainer";

const CheatsheetBodyData: TableBodyProps = {
    containers: [
        TypographyContainer,
        BackgroundContainer,
        FlexAndGridContainer,
        BorderContainer,
        SizingContainer,
        PaddingContainer,
        MarginContainer,
        SpaceBetweenContainer,
        LayoutContainer,
        FlexContainer,
        GridContainer,
    ]
};

export default CheatsheetBodyData;