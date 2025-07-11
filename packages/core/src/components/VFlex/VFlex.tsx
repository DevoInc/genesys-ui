import * as React from 'react';

import type { TGlobalSpacing } from '../../declarations';
import { Resolve } from '../../typeFunctions';
import { Flex, type FlexProps } from '../Flex';
import { VFlexItem } from './components';

export interface VFlexProps
  extends Omit<FlexProps, 'flexDirection' | 'gap' | 'columnGap' | 'rowGap'> {
  /** Vertical spacing between children items (row-gap).
   * More info about spacing values in [Predefined spacing values](?path=/docs/components-layout-box--overview#spacing-props) */
  spacing?: TGlobalSpacing;
  /** If the children fit full width of the VFlex parent*/
  childrenFitFullWidth?: boolean;
  /** If the children fit full height of the VFlex parent. Firstly you should
   * assign to the VFlex a bigger height than the one defined by its children. */
  childrenFitFullHeight?: boolean;
}

const InternalVFlex = React.forwardRef<HTMLElement, Resolve<VFlexProps>>(
  (
    {
      alignItems,
      children,
      childrenFlex,
      childrenFitFullHeight = false,
      childrenFitFullWidth = true,
      justifyContent = 'flex-start',
      spacing = 'cmp-md',
      ...flexProps
    },
    ref,
  ) => (
    <Flex
      {...flexProps}
      ref={ref}
      alignItems={
        alignItems || (childrenFitFullWidth ? 'stretch' : 'flex-start')
      }
      childrenFlex={childrenFlex || (childrenFitFullHeight ? '1' : undefined)}
      flexDirection="column"
      justifyContent={justifyContent}
      rowGap={spacing}
    >
      {children}
    </Flex>
  ),
);

export const VFlex = InternalVFlex as typeof InternalVFlex & {
  Item: typeof VFlexItem;
};

VFlex.Item = VFlexItem;

InternalVFlex.displayName = 'VFlex';
VFlex.Item.displayName = 'VFlex.Item';
