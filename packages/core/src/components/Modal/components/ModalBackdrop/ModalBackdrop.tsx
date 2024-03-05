import * as React from 'react';
import { useTheme } from 'styled-components';
import type { IModal } from '../../declarations';
import { Overlay, OverlayProps } from '../../../Overlay';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ModalBackdropProps
  extends Omit<OverlayProps, 'children'>,
    Pick<
      IModal,
      | 'children'
      | 'disableCloseOnOverlayClick'
      | 'onRequestClose'
      | 'windowSize'
    > {}

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  windowSize,
  onRequestClose,
  disableCloseOnOverlayClick,
  zIndex,
  padding,
  styles,
  children,
  ...restOverlayProps
}) => {
  const theme = useTheme();
  return (
    <Overlay
      {...restOverlayProps}
      zIndex={zIndex || theme.alias.elevation.zIndex.depth.overlay}
      bgColorScheme="dark"
      fixed
      onClick={
        disableCloseOnOverlayClick ? undefined : () => onRequestClose?.()
      }
      styles={styles}
      padding={windowSize === 'fullscreen' ? '0' : padding}
    >
      {children}
    </Overlay>
  );
};
