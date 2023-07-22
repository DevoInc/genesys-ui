import { RenderCellContentText } from './text';
import { RenderCellContentPopper } from './popper';
import { RenderCellContentLink } from './link';
import { RenderCellContentTag } from './tag';
import { RenderCellContentGroupTags } from './groupTags';

const cellRenderers = {
  default: RenderCellContentText,
  popper: RenderCellContentPopper,
  link: RenderCellContentLink,
  tag: RenderCellContentTag,
  groupTags: RenderCellContentGroupTags,
};

export const getRenderer = (render) => cellRenderers[render];
