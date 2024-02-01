import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import type { WindowSize } from '../declarations';
import type { GlobalStatus } from '../../../declarations';
import { elevationMixin } from '../../../styled';

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
  /** z-index of the modal */
  zIndex?: number;
}

export const StyledModal = styled.div<StyledModalProps>`
  ${({ theme, height, width, windowSize, status, zIndex }) => {
  const tokensDialog = theme.cmp.dialog;
  const tokensModal = theme.cmp.modal;

  return css`
      ${elevationMixin(theme)('overlay')};
      display: inline-flex;
      flex-direction: column;
      z-index: ${zIndex};
      overflow: hidden;
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
