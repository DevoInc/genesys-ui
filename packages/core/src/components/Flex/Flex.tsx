import * as React from 'react';

import { StyledOverloadCssProps } from '../../declarations';
import { FlexItem } from './subcomponents';
import { CommonBoxProps } from '../Box';
import { StyledFlex, StyledFlexProps } from './StyledFlex';

export interface FlexProps
  extends CommonBoxProps,
    Omit<StyledFlexProps, '$width' | '$height'>,
    StyledOverloadCssProps {
  children?: React.ReactNode;
}

const InternalFlex: React.FC<FlexProps> = ({
  children,
  height,
  styles,
  width,
  ...styledProps
}) => {
  return (
    <StyledFlex {...styledProps} css={styles} $height={height} $width={width}>
      {children}
    </StyledFlex>
  );
};

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;
