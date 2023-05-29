import * as React from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../../declarations';

import {
  StyledPanelFooterContainer,
  StyledPanelFooterContainerProps,
} from './StyledPanelFooterContainer';

export interface PanelFooterContainerProps
  extends StyledPanelFooterContainerProps,
    StyledOverloadCssProps,
    StyledPolymorphicProps {
  /** Footer content */
  children?: React.ReactNode;
}

export const PanelFooterContainer: React.FC<PanelFooterContainerProps> = ({
  as,
  hasBoxShadow,
  bordered,
  children,
  hasBackground,
  removeSpace,
  size = 'md',
  styles,
}) => {
  return (
    <StyledPanelFooterContainer
      as={as}
      hasBoxShadow={hasBoxShadow}
      hasBackground={hasBackground}
      bordered={bordered}
      css={styles}
      removeSpace={removeSpace}
      size={size}
    >
      {children}
    </StyledPanelFooterContainer>
  );
};
