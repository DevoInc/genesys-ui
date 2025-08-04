import * as React from 'react';

import type { TGlobalSpacing } from '../../declarations';
import { H_FLEX_CLASS_NAME_BASE } from './constants';
import { Flex, type FlexProps } from '../Flex';
import { HFlexItem } from './components';

export interface HFlexProps
  extends Omit<
    FlexProps,
    'flexDirection' | 'flexWrap' | 'gap' | 'columnGap' | 'rowGap'
  > {
  /** If the children fit the full width of the HFlex parent*/
  childrenFitFullWidth?: boolean;
  /** Horizontal spacing between children items (column-gap).
   * More info about spacing values in [Predefined spacing values](?path=/docs/components-layout-box--overview#spacing-props) */
  spacing?: TGlobalSpacing;
}

const InternalHFlex = React.forwardRef<HTMLElement, HFlexProps>(
  (
    {
      alignItems = 'center',
      children,
      childrenFitFullWidth = false,
      className,
      spacing = 'cmp-md',
      ...flexProps
    },
    ref,
  ) => (
    <Flex
      {...flexProps}
      ref={ref}
      alignItems={alignItems}
      childrenFlex={childrenFitFullWidth && '1'}
      className={[
        `${H_FLEX_CLASS_NAME_BASE} `,
        className ? `${className} ` : '',
      ]
        .join('')
        .trim()}
      columnGap={spacing}
      flexDirection="row"
      flexWrap="nowrap"
    >
      {children}
    </Flex>
  ),
);

export const HFlex = InternalHFlex as typeof InternalHFlex & {
  Item: typeof HFlexItem;
};

HFlex.Item = HFlexItem;

InternalHFlex.displayName = 'HFlex';
HFlex.Item.displayName = 'HFlex.Item';
