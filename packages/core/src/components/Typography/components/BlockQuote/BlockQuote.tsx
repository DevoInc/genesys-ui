import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import {
  StyledBlockQuote,
  type StyledBlockQuoteProps,
} from './StyledBlockQuote';

export interface BlockQuoteProps
  extends StyledBlockQuoteProps,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs {
  /** Content of the BlockQuote */
  children?: React.ReactNode;
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
    style={style}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledBlockQuote>
);
