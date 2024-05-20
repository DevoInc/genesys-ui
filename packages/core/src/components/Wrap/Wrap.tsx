import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, type FlexProps } from '../Flex';
import type { TGlobalSpacing } from '../../declarations';
import { getChildrenByRowFlex } from './helpers';
import { WrapItem } from './components';

export interface WrapProps
  extends Omit<
    FlexProps,
    'flexDirection' | 'flexWrap' | 'gap' | 'columnGap' | 'rowGap'
  > {
  /** Number of children by row. This will generate a grid of child elements with same width columns.*/
  childrenByRow?: number;
  /** Horizontal spacing between children items (column-gap). */
  hSpacing?: TGlobalSpacing;
  /** Vertical spacing between children items (row-gap). */
  vSpacing?: TGlobalSpacing;
}

export const InternalWrap: React.FC<WrapProps> = ({
  alignContent = 'flex-start',
  alignItems = 'flex-start',
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
  Item: typeof WrapItem;
};

Wrap.Item = WrapItem;
InternalWrap.displayName = 'Wrap';
Wrap.Item.displayName = 'Wrap.Item';
