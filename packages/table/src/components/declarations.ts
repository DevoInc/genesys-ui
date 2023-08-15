export interface RowSizes {
  head: { height: number };
  row: {
    height: {
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
    br: number;
  };
  cell: {
    horPad: number;
    verPad: number;
    verPadTall: number;
  };
  afterRow: {
    horPad: number;
    verPad: number;
  };
  expanded: {
    horPad: number;
    verPad: number;
  };
  expandedLg: {
    horPad: number;
    verPad: number;
  };
}

export type Density = 'default' | 'compact' | 'comfortable';

export type ColumnTypeCombinerType =
  | 'boolean'
  | 'custom'
  | 'date'
  | 'link'
  | 'longText'
  | 'number'
  | 'status'
  | 'tags'
  | 'text';
