export const Rule = (selector: string): string => `${selector} {}`;

export const MinBreakpoint = (min: number) => `min-width: ${min}px`;

export const MediaRule = (selector: string, min: number): string => `
  @media (${MinBreakpoint(min)}) {
    ${Rule(selector)}
  }
`;
