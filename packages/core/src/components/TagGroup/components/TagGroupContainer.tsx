import * as React from 'react';

import type { ITagGroup } from '../declarations';
import type { TagProps } from '../../Tag';
import { Flex, type FlexProps } from '../../Flex';
import { TagGroupContext } from '../context';

export interface TagGroupContainerProps
  extends ITagGroup,
    Omit<FlexProps, 'children' | 'inline' | 'alignItems' | 'flexDirection'> {
  children: React.ReactElement<TagProps>[];
}

export const TagGroupContainer: React.FC<TagGroupContainerProps> = ({
  children,
  colorScheme,
  labelPosition = 'left',
  quiet,
  size,
  ...flexProps
}) => {
  return (
    <Flex
      {...flexProps}
      alignItems={labelPosition === 'left' ? 'center' : null}
      inline
      flexDirection={labelPosition === 'left' ? 'row' : 'column'}
    >
      <TagGroupContext.Provider value={{ colorScheme, quiet, size }}>
        {children}
      </TagGroupContext.Provider>
    </Flex>
  );
};
