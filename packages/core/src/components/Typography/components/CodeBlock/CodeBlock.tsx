import * as React from 'react';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';

import { StyledCodeBlock, type StyledCodeBlockProps } from './StyledCodeBlock';
import {
  StyledCodeBlockWrapper,
  type StyledCodeBlockWrapperProps,
} from './StyledCodeBlockWrapper';

export interface CodeProps
  extends StyledCodeBlockProps,
    StyledCodeBlockWrapperProps,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** The function to be triggered on the click event. */
  onClick?: () => void;
  /** Children */
  children?: React.ReactNode;
}

export const CodeBlock: React.FC<CodeProps> = ({
  children,
  gutterBottom = 'cmp-md',
  onClick,
  size = 'md',
  style,
  textAlign = 'left',
  tooltip,
  truncateLine,
  ...nativeProps
}) => (
  <StyledCodeBlockWrapper
    {...nativeProps}
    style={style}
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
