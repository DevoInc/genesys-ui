import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILabelAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import { StyledLabel, type StyledLabelProps } from './StyledLabel';

export interface LabelProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<ILabelAttrs, 'form'>,
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
  style,
  tooltip,
  truncated = true,
  ...restNativeProps
}) => (
  <StyledLabel
    {...restNativeProps}
    as={as || (htmlFor ? 'label' : 'span')}
    colorScheme={colorScheme}
    css={style}
    htmlFor={htmlFor}
    size={size}
    title={tooltip}
    truncated={truncated}
  >
    {children}
  </StyledLabel>
);
