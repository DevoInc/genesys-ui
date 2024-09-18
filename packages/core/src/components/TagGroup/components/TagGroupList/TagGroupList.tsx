import * as React from 'react';
import { useTheme } from 'styled-components';

import type { ITagGroup } from '../../declarations';
import { tagGroupFlexSpacingMixin } from '../../helpers';
import { Flex, type FlexProps } from '../../../Flex';
import { mergeStyles } from '../../../../helpers';

export interface TagGroupListProps
  extends Omit<FlexProps, 'role'>,
    Pick<ITagGroup, 'size'> {}

export const TagGroupList: React.FC<TagGroupListProps> = ({
  alignItems = 'center',
  inline = true,
  children,
  size = 'md',
  style,
  ...restFlexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      inline={inline}
      role="group"
      style={mergeStyles(tagGroupFlexSpacingMixin({ size, theme }), style)}
    >
      {children}
    </Flex>
  );
};
