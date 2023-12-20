import { ColDef, Data } from '../declarations';

export type CellEditorProps = {
  value: unknown;
  onChange: (value: unknown) => void;
  colDef: ColDef;
  data: Data;
};
