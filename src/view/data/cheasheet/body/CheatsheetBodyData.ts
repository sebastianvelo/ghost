import { TableBodyProps } from "../../../components/table/body/TableBody";
import BackgroundContainer from "./containers/background/BackgroundContainer";
import BorderContainer from "./containers/border/BorderContainer";
import FlexContainer from "./containers/flex/FlexContainer";
import FlexAndGridContainer from "./containers/flexAndGrid/FlexAndGridContainer";
import GridContainer from "./containers/grid/GridContainer";
import LayoutContainer from "./containers/layout/LayoutContainer";
import MarginContainer from "./containers/margin/MarginContainer";
import PaddingContainer from "./containers/padding/PaddingContainer";
import SizingContainer from "./containers/sizing/SizingContainer";
import SpaceBetweenContainer from "./containers/spaceBetween/SpaceBetweenContainer";
import TypographyContainer from "./containers/typography/TypographyContainer";

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