import { RenderCellContentText } from './text';
import { RenderCellContentLink } from './link';
import { RenderCellContentTag } from './tag';
import { RenderCellContentGroupTags } from './groupTags';
import { ColumnType } from '../../declarations';

const cellRenderers = {
  default: RenderCellContentText,
  link: RenderCellContentLink,
  tag: RenderCellContentTag,
  groupTags: RenderCellContentGroupTags,
};

export const getRenderer = (renderType: ColumnType): React.FC =>
  cellRenderers[renderType ?? 'default'];
