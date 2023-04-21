import * as React from 'react';
import { StyledModal, StyledModalProps } from '../../styled';
import { Overlay } from '../../../Overlay';

export interface ModalContainerProps extends StyledModalProps {
  /** Custom id */
  id?: string;
  /** Disabling overlay exit click */
  shouldCloseOnOverlayClick?: boolean;
  /** Manages closing action by pressing close button*/
  onRequestClose?: () => void;
  /** zIndex of the Modal */
  zIndex?: React.CSSProperties['zIndex'];
  /** Content of the Modal */
  children: React.ReactNode;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  id,
  height,
  width,
  windowSize = 'default',
  onRequestClose,
  shouldCloseOnOverlayClick = true,
  zIndex = 1,
  status,
  children,
}) => {
  return (
    <Overlay
      zIndex={zIndex}
      bgColorScheme={'dark'}
      fixed
      onClick={shouldCloseOnOverlayClick ? () => onRequestClose?.() : undefined}
    >
      <StyledModal
        id={id}
        height={height}
        width={width}
        windowSize={windowSize}
        status={status}
        onClick={(event) => {
          // For avoid click inside close overlay
          event.stopPropagation();
        }}
      >
        {children}
      </StyledModal>
    </Overlay>
  );
};
