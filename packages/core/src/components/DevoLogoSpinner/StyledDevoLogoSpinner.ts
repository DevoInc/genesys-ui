import styled, { css } from 'styled-components';

import {
  BOUNCE_ANIMATION,
  BOUNCE_DOT_ANIMATION,
  FLOW_ANIMATION,
  HEART_BEAT_ANIMATION,
  JELLO_ANIMATION,
  RUBBER_BAND_ANIMATION,
  SHAKE_ANIMATION,
  SWING_ANIMATION,
  TADA_ANIMATION,
  WOBBLE_ANIMATION,
} from './constants';
import type { IDevoLogoSpinnerStyled } from './declarations';
import { getSize, getColor } from './helpers';

export interface StyledDevoLogoSpinnerProps extends IDevoLogoSpinnerStyled {}

export const StyledDevoLogoSpinner = styled.div<StyledDevoLogoSpinnerProps>`
  ${({ $animation, $colorScheme, $size, theme }) => {
    const { width, height } = getSize($size);

    return css`
      display: inline-block;
      width: ${width};
      height: ${height};

      .devo-logo-svg {
        width: ${width};
        height: ${height};
      }

      .devo-logo-svg {
        .devo-logo-svg__path {
          &--odd {
            fill: ${getColor($colorScheme, theme, 'logoOddPath')};
          }

          &--even {
            fill: ${getColor($colorScheme, theme, 'logoEvenPath')};
          }
        }

        // ANIMATIONS - DEVO LOGO LOADER ------------------------------------ //

        // Bounce - Animation

        ${$animation === 'bounce' &&
        css`
          animation: ${BOUNCE_ANIMATION} linear 1s infinite;
        `};

        // Bounce Dot - Animation

        ${$animation === 'bounce-dot' &&
        css`
          overflow: visible;

          .devo-logo-svg__group:first-child {
            animation: ${BOUNCE_DOT_ANIMATION.TRANSLATE} ease 0.5s alternate
              infinite;
            transform: translate3d(0, 0, 0);

            .devo-logo-svg__path {
              animation: ${BOUNCE_DOT_ANIMATION.SCALE} ease 0.5s alternate
                infinite;
              transform: translate3d(0, 0, 0);
              transform-origin: 50% 50%;
              transform-box: fill-box;
            }
          }
        `};

        // Flow - Animation

        ${$animation === 'flow' &&
        css`
          overflow: visible;

          .devo-logo-svg__group {
            animation: ${FLOW_ANIMATION.SCALE} 1.5s ease infinite;
            transform-origin: 50% 50%;
            transform-box: fill-box;
            ${FLOW_ANIMATION.DELAY};

            .devo-logo-svg__path {
              animation:
                ${FLOW_ANIMATION.TRANSLATE} 1.5s ease infinite,
                ${FLOW_ANIMATION.OPACITY} 1.5s ease infinite;
            }

            &:nth-child(1) .devo-logo-svg__path {
              animation-delay: 0.1s;
            }

            &:nth-child(2) .devo-logo-svg__path {
              animation-delay: 0s;
            }

            &:nth-child(3) .devo-logo-svg__path {
              animation-delay: 0.2s;
            }

            &:nth-child(4) .devo-logo-svg__path {
              animation-delay: 0.1s;
            }

            &:nth-child(5) .devo-logo-svg__path {
              animation-delay: 0.3s;
            }

            &:nth-child(6) .devo-logo-svg__path {
              animation-delay: 0.2s;
            }

            &:nth-child(7) .devo-logo-svg__path {
              animation-delay: 0.35s;
            }

            &:nth-child(8) .devo-logo-svg__path {
              animation-delay: 0.25s;
            }
          }
        `};

        // Heart Beat - Animation

        ${$animation === 'heart-beat' &&
        css`
          animation: ${HEART_BEAT_ANIMATION} linear 1s infinite;
        `};

        // Jello - Animation

        ${$animation === 'jello' &&
        css`
          animation: ${JELLO_ANIMATION} linear 1s infinite;
        `};

        // Rubber Band - Animation

        ${$animation === 'rubber-band' &&
        css`
          animation: ${RUBBER_BAND_ANIMATION} linear 1s infinite;
        `};

        // Shake - Animation

        ${$animation === 'shake' &&
        css`
          animation: ${SHAKE_ANIMATION} linear 1s infinite;
        `};

        // Swing - Animation

        ${$animation === 'swing' &&
        css`
          animation: ${SWING_ANIMATION} linear 1s infinite;
          transform-origin: top center;
        `};

        // Tada - Animation

        ${$animation === 'tada' &&
        css`
          animation: ${TADA_ANIMATION} linear 1s infinite;
        `};

        // Wobble - Animation

        ${$animation === 'wobble' &&
        css`
          animation: ${WOBBLE_ANIMATION} linear 1s infinite;
        `};
      }

      // Shadow of the Bounce Dot - Animation

      ${$animation === 'bounce-dot' &&
      css`
        position: relative;

        &::before {
          content: ' ';
          display: block;
          position: absolute;
          top: 10%;
          left: 34.9%;
          width: 9px;
          height: 3.5px;
          background-color: ${getColor($colorScheme, theme, 'logoOddPath')};
          filter: blur(2.75px) opacity(80%);
          animation: ${BOUNCE_DOT_ANIMATION.SHADOW} ease 0.5s alternate infinite;
          transform-origin: 50% center;
        }
      `}
    `;
  }}
`;
