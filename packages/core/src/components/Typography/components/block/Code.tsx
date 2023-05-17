import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import {
  StyledCodeBlock,
  StyledCodeBlockProps,
  StyledCodeBlockWrapper,
  StyledCodeBlockWrapperProps,
} from '../../StyledTypography';

export interface CodeProps
  extends StyledCodeBlockProps,
    StyledCodeBlockWrapperProps,
    //native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** The function to be triggered on the click event. */
  onClick?: () => void;
  /** Children */
  children?: React.ReactNode;
}

export const Code: React.FC<CodeProps> = ({
  children,
  gutterBottom = 'cmp-md',
  onClick,
  size = 'md',
  textAlign = 'left',
  tooltip,
  truncateLine,
  ...nativeProps
}) => (
  <StyledCodeBlockWrapper
    {...nativeProps}
    gutterBottom={gutterBottom}
    onClick={onClick}
    title={tooltip}
  >
    <StyledCodeBlock
      size={size}
      textAlign={textAlign}
      truncateLine={truncateLine}
    >
      {children}
    </StyledCodeBlock>
  </StyledCodeBlockWrapper>
);
