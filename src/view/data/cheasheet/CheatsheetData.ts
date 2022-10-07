import { CheatsheetTableProps } from "../../components/pages/cheatsheet/body/CheatsheetBody";
import * as Sections from "./body/CheatsheetBodyData";

const CheatsheetData: CheatsheetTableProps = {
    sections: [
        Sections.BasicsSection,
        Sections.SpacingSection,
        Sections.LayoutFlexAndGridSection,
        Sections.BorderAndOutlineSection,
        Sections.InteractivitySection,
        Sections.OptionsSection
    ]
};

export default CheatsheetData;