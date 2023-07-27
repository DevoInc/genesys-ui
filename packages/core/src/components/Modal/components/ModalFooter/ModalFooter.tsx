import * as React from 'react';
import { StyledModalFooter, StyledModalFooterProps } from '../../styled';
import { StyledOverloadCssProps } from '../../../../declarations';

export interface ModalFooterProps
  extends StyledModalFooterProps,
    StyledOverloadCssProps {
  /** Sets array of buttons displayed on the bottom */
  children: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  hasBoxShadow,
  status,
  styles,
}) => {
  return (
    <StyledModalFooter css={styles} status={status} hasBoxShadow={hasBoxShadow}>
      {children}
    </StyledModalFooter>
  );
};
