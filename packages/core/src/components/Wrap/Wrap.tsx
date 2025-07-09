import * as React from 'react';

import type { TGlobalSpacing } from '../../declarations';
import { WRAP_CLASS_NAME_BASE } from './constants';
import { Flex, type FlexProps } from '../Flex';
import { Grid } from '../Grid';
import { WrapItem } from './components';

export interface WrapProps
  extends Omit<
    FlexProps,
    'flexDirection' | 'flexWrap' | 'gap' | 'columnGap' | 'rowGap'
  > {
  /** Number of children by row. This will generate a grid of child elements with same width columns.*/
  childrenByRow?: number;
  /** Horizontal spacing between children items (column-gap).
   * More info about spacing values in [Predefined spacing values](?path=/docs/components-layout-box--overview#spacing-props) */
  hSpacing?: TGlobalSpacing;
  /** Vertical spacing between children items (row-gap).
   * More info about spacing values in [Predefined spacing values](?path=/docs/components-layout-box--overview#spacing-props) */
  vSpacing?: TGlobalSpacing;
}

export const InternalWrap = React.forwardRef<HTMLElement, WrapProps>(
  (
    {
      alignContent = 'flex-start',
      alignItems = 'flex-start',
      children,
      childrenByRow,
      className,
      hSpacing = 'cmp-md',
      vSpacing = 'cmp-md',
      ...restProps
    },
    ref,
  ) => {
    const classNames = [
      `${WRAP_CLASS_NAME_BASE} `,
      className ? `${className} ` : '',
    ]
      .join('')
      .trim();
    return childrenByRow ? (
      <Grid
        {...restProps}
        ref={ref}
        alignItems={alignItems}
        alignContent={alignContent}
        className={classNames}
        columnGap={hSpacing}
        gridTemplateColumns={
          childrenByRow ? `repeat(${childrenByRow}, 1fr)` : undefined
        }
        rowGap={vSpacing}
      >
        {children}
      </Grid>
    ) : (
      <Flex
        {...restProps}
        ref={ref}
        alignContent={alignContent}
        alignItems={alignItems}
        className={classNames}
        columnGap={hSpacing}
        flexDirection="row"
        flexWrap="wrap"
        rowGap={vSpacing}
      >
        {children}
      </Flex>
    );
  },
);

export const Wrap = InternalWrap as typeof InternalWrap & {
  Item: typeof WrapItem;
};

Wrap.Item = WrapItem;
InternalWrap.displayName = 'Wrap';
Wrap.Item.displayName = 'Wrap.Item';
