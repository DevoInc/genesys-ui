import { ColDef } from '../declarations';

export type CellEditorProps = {
  value?: unknown;
  onChange?: (value: unknown) => void;
  colDef?: ColDef;
};
