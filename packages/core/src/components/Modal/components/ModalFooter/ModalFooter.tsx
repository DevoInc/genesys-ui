import * as React from 'react';
import { StyledModalFooter } from '../../styled';

export interface ModalFooterProps {
  /** Whether the modal has a box shadow */
  hasBoxShadow?: boolean;
  /** Sets array of buttons displayed on the bottom */
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  hasBoxShadow,
  children,
}) => {
  return (
    <StyledModalFooter hasBoxShadow={hasBoxShadow}>
      {children}
    </StyledModalFooter>
  );
};
