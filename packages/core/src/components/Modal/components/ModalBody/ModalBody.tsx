import * as React from 'react';
import { StyledModalBody, StyledModalBodyProps } from '../../styled';

export interface ModalBodyProps
  extends Omit<StyledModalBodyProps, 'hasBoxShadow'> {
  /** Whether the container has scroll */
  hasScroll?: StyledModalBodyProps['hasBoxShadow'];
  /** Ref for the modal content */
  modalBodyRef?: (node: HTMLDivElement) => void;
  /** Children of the modal content */
  children: React.ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  hasScroll,
  modalBodyRef,
  contentPadding,
  children,
}) => {
  return (
    <StyledModalBody
      ref={modalBodyRef}
      contentPadding={contentPadding}
      hasBoxShadow={hasScroll}
    >
      {children}
    </StyledModalBody>
  );
};
