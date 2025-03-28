import * as React from 'react';
import { Resolve } from '../../../../typeFunctions';

import type { ITagGroup } from '../../declarations';
import type { TagProps } from '../../../Tag';
import { Flex, type FlexProps } from '../../../Flex';
import { TagGroupContext } from '../../context';

export interface TagGroupContainerProps
  extends ITagGroup,
    Omit<FlexProps, 'children' | 'inline' | 'alignItems' | 'flexDirection'> {
  children: React.ReactElement<TagProps>[];
}

export const TagGroupContainer = React.forwardRef<
  HTMLDivElement,
  Resolve<TagGroupContainerProps>
>(
  (
    {
      children,
      colorScheme,
      labelPosition = 'left',
      quiet,
      size,
      ...flexProps
    },
    ref,
  ) => (
    <Flex
      {...flexProps}
      ref={ref}
      alignItems={labelPosition === 'left' ? 'center' : null}
      inline
      flexDirection={labelPosition === 'left' ? 'row' : 'column'}
    >
      <TagGroupContext.Provider value={{ colorScheme, quiet, size }}>
        {children}
      </TagGroupContext.Provider>
    </Flex>
  ),
);
