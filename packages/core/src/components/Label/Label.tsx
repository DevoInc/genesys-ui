import * as React from 'react';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  LabelAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { StyledLabel, StyledLabelProps } from './StyledLabel';

export interface LabelProps
  extends StyledPolymorphicProps,
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
  truncated = true,
  ...restNativeProps
}) => {
  return (
    <StyledLabel
      {...restNativeProps}
      as={as || (htmlFor ? 'label' : 'span')}
      colorScheme={colorScheme}
      htmlFor={htmlFor}
      size={size}
      truncated={truncated}
    >
      {children}
    </StyledLabel>
  );
};
