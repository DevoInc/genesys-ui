import styled, { css } from 'styled-components';

import { StyledModalProps, WindowSize } from '../declarations';

const windowSizeMap: { [key in WindowSize]: string } = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  fullscreen: 'full',
  default: 'md',
} as const;

export const StyledModal = styled.div<StyledModalProps>`
  ${({ theme, height, headerStyle, windowSize }) => {
    const aliasTokens = theme.tokens.alias;
    const tokensDialog = theme.tokens.cmp.dialog;
    const tokensModal = theme.tokens.cmp.modal;

    const getMaxWidth = () => {
      if (windowSize === 'fullscreen') {
        return tokensModal.size.maxWidth.full;
      } else {
        return headerStyle !== 'dialog'
          ? tokensModal.size.maxWidth[windowSizeMap[windowSize ?? 'default']]
          : tokensDialog.size.maxWidth;
      }
    };

    const getHeight = () => {
      if (windowSize === 'fullscreen') {
        return tokensModal.size.height.full;
      } else if (height) {
        return height;
      }
      return '';
    };

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
      width: 100%;
      max-width: ${getMaxWidth()};
      height: ${getHeight()};

      min-height: ${headerStyle !== 'dialog'
        ? tokensModal.size.minHeight[windowSizeMap[windowSize ?? 'default']]
        : tokensDialog.size.minHeight};

      max-height: calc(
        ${tokensModal.size.maxHeight} - ${tokensModal.space.padding} * 2
      );
    `;
  }};
`;
