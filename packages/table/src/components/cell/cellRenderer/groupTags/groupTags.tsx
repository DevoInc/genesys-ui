import * as React from 'react';
import { CellProps } from '../../declarationsfake';

import { StyledCellTagGroup } from './StyledCellTagGroup';

export const RenderCellContentGroupTags: React.FC<CellProps> = ({ value }) => (
  <StyledCellTagGroup colorScheme={'blend-base'} tags={value} />
);
