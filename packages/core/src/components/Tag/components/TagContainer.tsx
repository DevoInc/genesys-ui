import * as React from 'react';

// declarations
import {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../declarations';

// styled
import {
  StyledTagContainer,
  StyledTagContainerProps,
} from './StyledTagContainer';

export interface TagContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    StyledTagContainerProps {
  children: React.ReactNode;
}

export const TagContainer: React.FC<TagContainerProps> = ({
  children,
  colorScheme = 'neutral',
  bold,
  quiet,
  wide,
  size = 'md',
  styles,
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledTagContainer
      {...restNativeProps}
      colorScheme={colorScheme}
      css={styles}
      bold={bold}
      quiet={quiet}
      wide={wide}
      size={size}
      title={tooltip}
    >
      {children}
    </StyledTagContainer>
  );
};
