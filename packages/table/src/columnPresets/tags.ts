import { ColDef } from '../declarations';
import { EditTags } from '../editors';
import { TagsFilter } from '../filters';
import { TagsRenderer } from '../renderers';

export const tags: ColDef = {
  id: 'tags',
  cellRenderer: TagsRenderer,
  cellEditor: EditTags,
  cellFilter: TagsFilter,
};
