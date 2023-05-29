import * as React from 'react';

import {
  LayoutFlexItemProps,
  StyledOverloadCssProps,
} from '../../declarations';
import { FlexItem } from './subcomponents';
import { CommonBoxProps } from '../Box';
import { StyledFlex, StyledFlexProps } from './StyledFlex';

export interface FlexProps
  extends CommonBoxProps,
    Omit<StyledFlexProps, '$width' | '$height'>,
    StyledOverloadCssProps {
  children?: React.ReactNode;
}

const InternalFlex = React.forwardRef<HTMLElement, FlexProps>(
  ({ children, height, styles, tooltip, width, ...styledProps }, ref) => {
    return (
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
    );
  }
);

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;

InternalFlex.displayName = 'Flex';
