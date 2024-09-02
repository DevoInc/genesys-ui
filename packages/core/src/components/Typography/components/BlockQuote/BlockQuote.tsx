import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import { StyledBlockQuote } from './StyledBlockQuote';
import { ITypography } from '../../declarations';

export interface BlockQuoteProps
  extends Pick<ITypography, 'gutterBottom' | 'textAlign'>,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the BlockQuote */
  children?: React.ReactNode;
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const BlockQuote: React.FC<BlockQuoteProps> = ({
  children,
  gutterBottom = 'cmp-md',
  size = 'md',
  style,
  textAlign = 'left',
  tooltip,
  ...nativeProps
}) => (
  <StyledBlockQuote
    {...nativeProps}
    css={style}
    $gutterBottom={gutterBottom}
    $size={size}
    $textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledBlockQuote>
);
