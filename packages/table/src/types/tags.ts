import { EditTags } from '../editors';
import { TagsRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeTags: ColumnType = {
  id: 'tags',
  CellRenderer: TagsRenderer,
  CellEditor: EditTags,
};
