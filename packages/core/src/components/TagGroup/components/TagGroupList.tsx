import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Flex, type FlexProps } from '../../Flex';
import type { TagProps } from '../../Tag';
import type { CommonTagGroupProps } from '../declarations';

import { tagGroupFlexSpacingMixin } from '../helpers';

export interface TagGroupListProps
  extends Omit<FlexProps, 'children' | 'role'>,
    Pick<CommonTagGroupProps, 'size'> {
  children: React.ReactElement<TagProps>[];
}

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
      {children?.map((child, idx) =>
        React.cloneElement(child, {
          key: `tag-${idx}`,
          size: size,
        }),
      )}
    </Flex>
  );
};
