import * as React from 'react';
import { StyledModalHeader } from '../../styled';
import { GlobalStatus } from 'packages/core/src/declarations';

export interface ModalHeaderProps {
  /** Whether the modal has a box shadow */
  hasBoxShadow?: boolean;
  /** Adds custom icon based on the status **/
  status?: GlobalStatus;
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
