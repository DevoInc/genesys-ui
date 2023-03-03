import { css, DefaultTheme } from 'styled-components';

/* -------------------------------------------------------------------------- */
/*                                UTILS - MIXINS                              */
/* -------------------------------------------------------------------------- */

// Scrollbars - Utils - Mixin ------------------------------------------------ /

interface ScrollbarsProps {
  size?: string;
  thumbColor?: string;
  thumbHoverColor?: string;
  thumbRadius?: string;
  thumbTransition?: string;
  trackColor?: string;
  trackRadius?: string;
  theme: DefaultTheme;
}

/**
 * Get the generic scrollbar styles based in the theme design tokens and some configuration.
 *
 * @param props The object param
 * @param props.size The width (vertical) or height (horizontal) of the scrollbar.
 * @param props.thumbColor Color of the thumb.
 * @param props.thumbHoverColor Color of the thumb in :hover state.
 * @param props.thumbRadius Border radius of the thumb.
 * @param props.thumbTransition Transition of the thumb.
 * @param props.trackColor Color of the track.
 * @param props.trackRadius Border radius of the track.
 * @param props.theme Tokens for scrollbar.
 * @return the css with the styles object.
 */
export const scrollbars = ({
  size,
  thumbColor,
  thumbHoverColor,
  thumbRadius,
  thumbTransition,
  trackColor,
  trackRadius,
  theme,
}: ScrollbarsProps) => {
  const scrollbarTokens = theme.tokens.alias.scrollbars;
  const sizeEval = size || scrollbarTokens.size.square.md || '0.8rem';
  return css`
    // For Google Chrome
    &::-webkit-scrollbar {
      width: ${sizeEval};

      &:horizontal {
        height: ${sizeEval};
      }
    }

    &::-webkit-scrollbar-track {
      background-color: ${trackColor ||
      scrollbarTokens.track.color.backdrop ||
      'rgba(0, 0, 0, 0.16)'};
      border-radius: ${trackRadius ||
      scrollbarTokens.track.shape.borderRadius ||
      '999rem'};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${thumbColor ||
      scrollbarTokens.thumb.color.backdrop.base ||
      'rgba(0, 0, 0, 0.24)'};
      border-radius: ${thumbRadius ||
      scrollbarTokens.thumb.shape.borderRadius ||
      '999rem'};
      transition: ${thumbTransition ||
      scrollbarTokens.thumb.mutation.transition ||
      'background-color 0.3s ease'};

      &:hover {
        background-color: ${thumbHoverColor ||
        scrollbarTokens.thumb.color.backdrop.hovered ||
        'rgba(0, 0, 0, 0.36)'};
      }
    }
  `;
};
