import * as React from 'react';

import { TagGroupContext } from '../../context';
import { Tag, type TagProps } from '../../../Tag';

export interface TagGroupTagProps extends TagProps {}

export const TagGroupTag: React.FC<TagGroupTagProps> = ({
  colorScheme,
  quiet,
  size,
  ...restTagProps
}) => {
  const context = React.useContext(TagGroupContext);
  return (
    <Tag
      {...restTagProps}
      colorScheme={colorScheme || context.colorScheme}
      quiet={quiet || context.quiet}
      size={size || context.size}
    />
  );
};
