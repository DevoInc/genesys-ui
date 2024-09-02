import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import { StyledCodeBlock } from './StyledCodeBlock';
import { StyledCodeBlockWrapper } from './StyledCodeBlockWrapper';
import type { ITypography } from '../../declarations';

export interface CodeProps
  extends Pick<ITypography, 'textAlign' | 'truncateLine' | 'gutterBottom'>,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** The function to be triggered on the click event. */
  onClick?: () => void;
  /** Children */
  children?: React.ReactNode;
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
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
    css={style}
    $gutterBottom={gutterBottom}
    onClick={onClick}
    title={tooltip}
  >
    <StyledCodeBlock
      $size={size}
      $textAlign={textAlign}
      $truncateLine={truncateLine}
    >
      {children}
    </StyledCodeBlock>
  </StyledCodeBlockWrapper>
);
