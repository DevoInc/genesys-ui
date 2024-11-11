import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILabelAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import { StyledLabel } from './StyledLabel';
import type { ILabel } from './declarations';

export interface LabelProps
  extends ILabel,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<ILabelAttrs, 'form'> {
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
  cursor,
  srOnly,
  textAlign,
  ...restNativeProps
}) => (
  <StyledLabel
    {...restNativeProps}
    as={as || (htmlFor ? 'label' : 'span')}
    $colorScheme={colorScheme}
    css={style}
    $textAlign={textAlign}
    $srOnly={srOnly}
    htmlFor={htmlFor}
    $cursor={cursor}
    $size={size}
    title={tooltip}
    $truncated={truncated}
  >
    {children}
  </StyledLabel>
);
