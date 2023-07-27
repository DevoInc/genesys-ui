import * as React from 'react';
import { StyledModalHeader, StyledModalHeaderProps } from '../../styled';
import { StyledOverloadCssProps } from '../../../../declarations';

export interface ModalHeaderProps
  extends StyledModalHeaderProps,
    StyledOverloadCssProps {
  /** Content of the header */
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  hasBoxShadow,
  status,
  styles,
}) => {
  return (
    <StyledModalHeader css={styles} hasBoxShadow={hasBoxShadow} status={status}>
      {children}
    </StyledModalHeader>
  );
};
