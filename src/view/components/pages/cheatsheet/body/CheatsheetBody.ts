import CheatsheetSection, { CheatsheetSectionProps } from "./section/CheatsheetSection";

export interface CheatsheetTableProps {
    sections: CheatsheetSectionProps[];
};

const CheatsheetTable = (props: CheatsheetTableProps) => `
    <div class="txt_whitesmoke space-y_4rem">
        ${props.sections.map(CheatsheetSection).join(" ")}
    </div>
`;

export default CheatsheetTable;