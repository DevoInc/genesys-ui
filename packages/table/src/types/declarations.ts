export type ColumnType = {
  id: string;
  CellRenderer?: (a) => React.ReactNode;
  CellEditor?: (a) => React.ReactNode;
  valueFormatter?: (value, context) => void;
  context?: {
    [key: string]: unknown;
  };
  tagConfig?: { [key: string]: { color: string; text: string } };
};
