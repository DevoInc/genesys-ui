import * as React from 'react';
import { StyledModal, StyledModalProps } from '../../styled';
import { Overlay } from '../../../Overlay';
import { StyledOverloadCssProps } from '../../../../declarations';
import { useTheme } from 'styled-components';

export interface ModalContainerProps
  extends StyledModalProps,
    StyledOverloadCssProps {
  /** Custom id */
  id?: string;
  /** Disabling overlay exit click */
  shouldCloseOnOverlayClick?: boolean;
  /** Manages closing action by pressing close button*/
  onRequestClose?: () => void;
  /** zIndex of the Modal */
  zIndex?: number;
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
  zIndex,
  status,
  styles,
  children,
}) => {
  const theme = useTheme();
  return (
    <Overlay
      zIndex={zIndex || theme.alias.elevation.zIndex.depth.overlay}
      bgColorScheme={'dark'}
      fixed
      onClick={shouldCloseOnOverlayClick ? () => onRequestClose?.() : undefined}
      styles={styles}
      padding={windowSize === 'fullscreen' ? '0' : undefined}
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
        zIndex={zIndex ? zIndex + 1 : theme.alias.elevation.zIndex.depth.popOut}
      >
        {children}
      </StyledModal>
    </Overlay>
  );
};
