import * as React from 'react';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations';
import type { ITag } from '../../declarations';
import { StyledTagContainer } from './StyledTagContainer';

export interface TagContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    ITag {
  children?: React.ReactNode;
}

export const TagContainer: React.FC<TagContainerProps> = ({
  children,
  colorScheme = 'neutral',
  bold,
  quiet,
  wide,
  size = 'md',
  style,
  tooltip,
  ...restNativeProps
}) => (
  <StyledTagContainer
    {...restNativeProps}
    $colorScheme={colorScheme}
    css={style}
    $bold={bold}
    $quiet={quiet}
    $wide={wide}
    $size={size}
    title={tooltip}
  >
    {children}
  </StyledTagContainer>
);
