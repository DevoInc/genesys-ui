import { ColumnType } from '../../declarations';
import { RenderCellContentText } from './text';
import { RenderCellContentLink } from './link';
import { TagsCellRenderer } from './tags';

const cellRenderers = {
  default: RenderCellContentText,
  text: RenderCellContentText,
  link: RenderCellContentLink,
  tags: TagsCellRenderer,
};

export const getRenderer = (renderType: ColumnType): React.FC =>
  cellRenderers[renderType ?? 'default'] ?? RenderCellContentText;
