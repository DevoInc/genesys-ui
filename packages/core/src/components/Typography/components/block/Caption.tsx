import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import * as React from 'react';

import { StyledCaption, StyledCaptionProps } from '../../StyledTypography';

export interface CaptionProps
  extends StyledCaptionProps,
    //native
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {
  children?: React.ReactNode;
}

export const Caption: React.FC<CaptionProps> = ({
  colorScheme = 'base',
  gutterBottom = '0',
  size = 'sm',
  textAlign = 'left',
  truncateLine = 1,
  children,
  styles,
  tooltip,
  ...nativeProps
}) => (
  <StyledCaption
    {...nativeProps}
    colorScheme={colorScheme}
    css={styles}
    truncateLine={truncateLine}
    gutterBottom={gutterBottom}
    size={size}
    textAlign={textAlign}
    title={tooltip}
  >
    {children}
  </StyledCaption>
);
