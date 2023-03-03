import * as React from 'react';
import styled, { css } from 'styled-components';

import { Flex, FlexProps } from '../Flex';

import { OverlayBgColorScheme } from './declarations';
import { getOverlayBg } from './helpers';

export interface StyledOverlayProps extends FlexProps {
  /** Specific background color of the overlay */
  bgColor?: React.CSSProperties['backgroundColor'];
  /** Predefined the color scheme for the background */
  bgColorScheme?: OverlayBgColorScheme;
  /** Specific gradient background */
  bgGradient?: React.CSSProperties['background'];
  /** It defines if the position overlay is fixed  */
  fixed?: boolean;
  /** If the Overlay allows to interact with the elements behind it */
  hasInteractionBehind?: boolean;
  /** Opacity of the overlay (value between 0 and 1) */
  opacity?: number;
}

export const StyledOverlay = styled(Flex)<StyledOverlayProps>`
  ${({
    bgColor,
    bgColorScheme,
    bgGradient,
    fixed = false,
    hasInteractionBehind = false,
    opacity,
    theme,
  }) => {
    const _bgColor = getOverlayBg({
      bgColor,
      bgColorScheme,
      bgGradient,
      opacity,
      overlayBgTokens: theme.tokens.cmp.overlay.color.background,
    });

    return css`
      position: ${fixed ? 'fixed' : 'absolute'};
      inset: 0 0 0 0;
      width: 100%;
      height: 100%;
      background: ${_bgColor};
      pointer-events: ${hasInteractionBehind && 'none'};
    `;
  }};
`;
