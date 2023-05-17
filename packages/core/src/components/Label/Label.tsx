import * as React from 'react';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  LabelAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { StyledLabel, StyledLabelProps } from './StyledLabel';

export interface LabelProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<LabelAttrProps, 'form'>,
    StyledLabelProps {
  /** Content of the Label.*/
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  as,
  children,
  colorScheme = 'strong',
  htmlFor,
  size = 'md',
  styles,
  tooltip,
  truncated = true,
  ...restNativeProps
}) => {
  return (
    <StyledLabel
      {...restNativeProps}
      as={as || (htmlFor ? 'label' : 'span')}
      colorScheme={colorScheme}
      css={styles}
      htmlFor={htmlFor}
      size={size}
      title={tooltip}
      truncated={truncated}
    >
      {children}
    </StyledLabel>
  );
};
