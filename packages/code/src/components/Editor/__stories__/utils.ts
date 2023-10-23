export const getRange = (
  lineNumber: number,
  startColumn: number,
  endColumn: number,
) => {
  return {
    startLineNumber: lineNumber,
    endLineNumber: lineNumber,
    startColumn: startColumn,
    endColumn: endColumn,
  };
};
