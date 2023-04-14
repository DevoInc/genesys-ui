import * as React from 'react';
import { StyledModalBody } from '../../styled';

export interface ModalBodyProps {
  /** Whether the container has scroll */
  hasScroll?: boolean;
  /** Hide Close Button (Show by default) */
  contentPadding?: string;
  /** Ref for the modal content */
  modalBodyRef?: React.RefObject<HTMLDivElement>;
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
