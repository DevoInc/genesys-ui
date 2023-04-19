import * as React from 'react';
import { StyledModalFooter, StyledModalFooterProps } from '../../styled';

export interface ModalFooterProps extends StyledModalFooterProps {
  /** Sets array of buttons displayed on the bottom */
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  status,
  hasBoxShadow,
  children,
}) => {
  return (
    <StyledModalFooter status={status} hasBoxShadow={hasBoxShadow}>
      {children}
    </StyledModalFooter>
  );
};
