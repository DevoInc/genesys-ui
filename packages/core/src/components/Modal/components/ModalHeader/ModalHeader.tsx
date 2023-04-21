import * as React from 'react';
import { StyledModalHeader, StyledModalHeaderProps } from '../../styled';

export interface ModalHeaderProps extends StyledModalHeaderProps {
  /** Content of the header */
  children: React.ReactNode;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  hasBoxShadow,
  status,
  children,
}) => {
  return (
    <StyledModalHeader hasBoxShadow={hasBoxShadow} status={status}>
      {children}
    </StyledModalHeader>
  );
};
