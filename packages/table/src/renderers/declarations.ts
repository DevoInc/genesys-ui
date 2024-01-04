import { ColDef } from '../declarations';

export type CellRendererProps = {
  value: unknown;
  colDef: ColDef;
  rowIndex: number;
};
