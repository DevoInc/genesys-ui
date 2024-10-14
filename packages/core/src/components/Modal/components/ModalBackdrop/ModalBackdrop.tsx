import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IModal } from '../../declarations';
import { Overlay, type OverlayProps } from '../../../Overlay';
import { Flex } from '../../../Flex';

export interface ModalBackdropProps
  extends Omit<OverlayProps, 'children'>,
    Pick<
      IModal,
      'children' | 'disableCloseOnOverlayClick' | 'onRequestClose'
    > {}

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  onRequestClose,
  disableCloseOnOverlayClick,
  zIndex,
  padding,
  style,
  children,
  ...restOverlayProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      padding={padding}
      position="fixed"
      positionTop="0"
      positionLeft="0"
      // TODO: cmpTokens
      zIndex={zIndex || theme.alias.elevation.zIndex.depth.overlay}
    >
      <Overlay
        {...restOverlayProps}
        bgColorScheme="dark"
        fixed
        onClick={
          disableCloseOnOverlayClick
            ? undefined
            : () => {
                onRequestClose?.();
              }
        }
        style={style}
      />
      {children}
    </Flex>
  );
};
