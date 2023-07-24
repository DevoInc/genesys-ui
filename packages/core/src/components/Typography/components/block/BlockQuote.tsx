import * as React from 'react';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';

import {
  StyledBlockQuote,
  StyledBlockQuoteProps,
} from '../../StyledTypography';

export interface BlockQuoteProps
  extends StyledBlockQuoteProps,
    //native
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** Content of the BlockQuote */
  children?: React.ReactNode;
}

export const BlockQuote: React.FC<BlockQuoteProps> = ({
  children,
  gutterBottom = 'cmp-md',
  size = 'md',
  styles,
  textAlign = 'left',
  tooltip,
  ...nativeProps
}) => (
  <StyledBlockQuote
    {...nativeProps}
    css={styles}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledBlockQuote>
);
