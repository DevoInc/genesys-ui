import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Flex, type FlexProps } from '../../Flex';

import { ITagGroup } from '../declarations';

import { tagGroupFlexSpacingMixin } from '../helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TagGroupListProps
  extends Omit<FlexProps, 'role'>,
    Pick<ITagGroup, 'size'> {}

export const TagGroupList: React.FC<TagGroupListProps> = ({
  alignItems = 'center',
  inline = true,
  children,
  size = 'md',
  styles,
  ...restFlexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      inline={inline}
      role="group"
      styles={concat(tagGroupFlexSpacingMixin({ size, theme }), styles)}
    >
      {children}
    </Flex>
  );
};
