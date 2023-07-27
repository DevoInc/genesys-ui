import * as React from 'react';

import { LabelPosition } from '../declarations';
import { TagProps } from '../../Tag';
import { Flex, FlexProps } from '../../../';

export interface TagGroupContainerProps
  extends Omit<
    FlexProps,
    'children' | 'inline' | 'alignItems' | 'flexDirection'
  > {
  children: React.ReactElement<TagProps>[];
  /** Position of the label text relative to the tags */
  labelPosition?: LabelPosition;
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
