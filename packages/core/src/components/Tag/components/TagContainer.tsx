import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

// styled
import {
  StyledTagContainer,
  StyledTagContainerProps,
} from './StyledTagContainer';

export interface TagContainerProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
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
