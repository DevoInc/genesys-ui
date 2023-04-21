import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import type { WindowSize } from '../declarations';
import type { GlobalStatus } from 'packages/core/src/declarations';

const windowSizeMap: { [key in WindowSize]: string } = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  huge: 'xl',
  fullscreen: 'full',
  default: 'md',
} as const;

export interface StyledModalProps {
  /** Height of the modal */
  height?: CSSProperties['height'];
  /** Width of the modal */
  width?: CSSProperties['width'];
  /** Set the Window Size between one of the following presets */
  /** Aurea proportion size */
  windowSize?: WindowSize;
  /** Status of the modal */
  status?: GlobalStatus;
}

export const StyledModal = styled.div<StyledModalProps>`
  ${({ theme, height, width, windowSize, status }) => {
    const aliasTokens = theme.alias;
    const tokensDialog = theme.cmp.dialog;
    const tokensModal = theme.cmp.modal;

    return css`
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: inline-flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: ${aliasTokens.elevation.boxShadow.depth?.overlay};
      border-radius: ${aliasTokens.shape.borderRadius.elevated};
      background-color: ${tokensModal.color.background};

      &:focus {
        outline: none;
      }

      // Modal Window: Window Sizes
      //________________________________________________________________________
      min-width: ${tokensModal.size.minWidth};
      max-width: ${status && status !== 'base'
        ? tokensDialog.size.maxWidth
        : width || tokensModal.size.maxWidth[windowSizeMap[windowSize]]};
      min-height: ${status && status !== 'base'
        ? tokensDialog.size.minHeight
        : height || tokensModal.size.minHeight[windowSizeMap[windowSize]]};
      max-height: ${tokensModal.size.maxHeight};
      width: ${width || tokensModal.size.width};
    `;
  }};
`;
