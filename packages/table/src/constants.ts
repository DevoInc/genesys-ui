import { VirtualItem } from '@tanstack/react-virtual';
import { ColDef } from './declarations';

export const DEFAULT_VIRTUAL_ROW: VirtualItem = {
  index: 0,
  size: 50,
  start: 0,
  end: 0,
  lane: 2,
  key: 'example',
};

export const DEFAULT_VIRTUAL_COLUMN: VirtualItem = {
  index: 0,
  size: 200,
  start: 0,
  end: 0,
  lane: 2,
  key: 'example',
};

export const DEFAULT_COLDEF: ColDef = {
  id: 'col',
  headerName: 'Column',
};
