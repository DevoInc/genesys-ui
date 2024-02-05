import * as React from 'react';

import { FlexItem } from './components';
import { StyledFlex, type StyledFlexProps } from './StyledFlex';
import {
  type Resolve,
  type CommonBoxProps,
  type StyledOverloadCssProps,
} from '../../index';

export interface FlexProps
  extends CommonBoxProps,
    Omit<StyledFlexProps, '$width' | '$height'>,
    StyledOverloadCssProps {
  children?: React.ReactNode;
}

const InternalFlex = React.forwardRef<HTMLElement, Resolve<FlexProps>>(
  ({ children, height, styles, tooltip, width, ...styledProps }, ref) => (
    <StyledFlex
      {...styledProps}
      css={styles}
      ref={ref}
      title={tooltip}
      $height={height}
      $width={width}
    >
      {children}
    </StyledFlex>
  ),
);

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;

InternalFlex.displayName = 'Flex';
