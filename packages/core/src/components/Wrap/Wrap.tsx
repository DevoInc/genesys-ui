import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, FlexProps } from '../';
import { GlobalSpacing } from '../../declarations';
import { getChildrenByRowFlex } from './helpers';
import { FlexItem } from '../Flex/components';

export interface WrapProps
  extends Omit<FlexProps, 'gap' | 'columnGap' | 'rowGap'> {
  /** Number of children by row. This will generate a grid of child elements with same width columns.*/
  childrenByRow?: number;
  /** Horizontal spacing between children items (column-gap). */
  hSpacing?: GlobalSpacing;
  /** Vertical spacing between children items (row-gap). */
  vSpacing?: GlobalSpacing;
}

export const InternalWrap: React.FC<WrapProps> = ({
  alignContent = 'flex-start',
  alignItems = 'center',
  children,
  childrenByRow,
  hSpacing = 'cmp-md',
  vSpacing = 'cmp-md',
  ...flexProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...flexProps}
      alignContent={alignContent}
      alignItems={alignItems}
      childrenFlex={getChildrenByRowFlex({ childrenByRow, hSpacing, theme })}
      columnGap={hSpacing}
      flexDirection="row"
      flexWrap="wrap"
      rowGap={vSpacing}
    >
      {children}
    </Flex>
  );
};

export const Wrap = InternalWrap as typeof InternalWrap & {
  Item: typeof FlexItem;
};

Wrap.Item = FlexItem;
