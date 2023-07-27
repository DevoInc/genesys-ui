import * as React from 'react';
import { StyledModalBody, StyledModalBodyProps } from '../../styled';
import { StyledOverloadCssProps } from '../../../../declarations';

export interface ModalBodyProps
  extends Omit<StyledModalBodyProps, 'hasBoxShadow'>,
    StyledOverloadCssProps {
  /** Whether the container has scroll */
  hasScroll?: StyledModalBodyProps['hasBoxShadow'];
  /** Ref for the modal content */
  modalBodyRef?: (node: HTMLDivElement) => void;
  /** Children of the modal content */
  children: React.ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  contentPadding,
  children,
  hasScroll,
  modalBodyRef,
  styles,
}) => {
  return (
    <StyledModalBody
      ref={modalBodyRef}
      contentPadding={contentPadding}
      hasBoxShadow={hasScroll}
      css={styles}
    >
      {children}
    </StyledModalBody>
  );
};
