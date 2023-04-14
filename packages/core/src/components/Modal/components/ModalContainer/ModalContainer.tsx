import * as React from 'react';
import { StyledModal } from '../../styled';
import { Overlay } from '../../../Overlay';
import { WindowSize } from '../../declarations';

export interface ModalContainerProps {
  /** Custom id */
  id?: string;
  /** Height */
  height?: string;
  /** Set the Window Size between one of the following presets */
  /** Aurea proportion size */
  windowSize?: WindowSize;
  /** Disabling overlay exit click */
  shouldCloseOnOverlayClick?: boolean;
  /** Manages closing action by pressing close button*/
  onRequestClose?: () => void;
  /** Content of the Modal */
  children: React.ReactNode;
  /** zIndex of the Modal */
  zIndex?: React.CSSProperties['zIndex'];
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  id,
  height,
  windowSize = 'medium',
  onRequestClose,
  shouldCloseOnOverlayClick = true,
  children,
  zIndex = 1,
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
        windowSize={windowSize}
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
