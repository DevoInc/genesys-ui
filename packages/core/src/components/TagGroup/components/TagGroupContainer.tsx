import * as React from 'react';

import { CommonTagGroupProps } from '../declarations';
import type { TagProps } from '../../Tag';
import { Flex, type FlexProps } from '../../Flex';

export interface TagGroupContainerProps
  extends CommonTagGroupProps,
    Omit<FlexProps, 'children' | 'inline' | 'alignItems' | 'flexDirection'> {
  children: React.ReactElement<TagProps>[];
}

export const TagGroupContainer: React.FC<TagGroupContainerProps> = ({
  children,
  labelPosition = 'left',
  ...flexProps
}) => {
  return (
    <Flex
      {...flexProps}
      alignItems={labelPosition === 'left' ? 'center' : null}
      inline
      flexDirection={labelPosition === 'left' ? 'row' : 'column'}
    >
      {children}
    </Flex>
  );
};
