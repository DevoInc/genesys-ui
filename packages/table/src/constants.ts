import { VirtualItem } from '@tanstack/react-virtual';
import { TColDef } from './declarations';

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

export const DEFAULT_COLDEF: TColDef = {
  id: 'col',
  headerName: 'Column',
};

export const CELL_ALIGN_MAP: object = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  top: 'flex-start',
  bottom: 'flex-end',
};

export const SIZES = {
  HEAD: { HEIGHT: 42 },
  CELL: {
    HOR_PAD: 12,
    VER_PAD: 8,
  },
};

export const ROW_HEIGHT_MD = 36;
export const ROW_HEIGHT_LG = 60;
export const ROW_HEIGHT_XL = 72;
export const ROW_HEIGHT_XXL = 84;
export const ROW_HEIGHT_XXXL = 96;
