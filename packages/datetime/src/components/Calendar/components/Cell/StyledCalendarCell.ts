import styled, { css } from 'styled-components';
import { flexMixin, typoMixin } from '@devoinc/genesys-ui';

export const StyledCalendarCell = styled.div`
  ${({ theme }) => typoMixin({ theme, size: 'sm' })};
  position: relative;
  font-weight: 300;

  // day container
  span {
    ${flexMixin({ dis: 'flex', ai: 'center', jc: 'center' })};
    ${({ theme }) => {
      const cellSquare = theme.alias.size.square.handler.lg;
      return css`
        width: ${cellSquare};
        height: ${cellSquare};
        border-radius: ${theme.alias.shape.borderRadius.full};
      `;
    }};
    box-sizing: content-box;
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }

  &:not(:empty) {
    cursor: pointer;
  }

  /* Highlight & Shadow Area ------------------------------------------------ */
  /* ------------------------------------------------------------------------ */

  // range marker
  ${({ theme }) => {
    const rangeMarkerBR = theme.alias.shape.borderRadius.pill;
    const rangeMarkerCss = css`
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 100%;
      height: 1.8rem;
    `;
    return css`
      &:nth-child(7n),
      &:last-child {
        &::before {
          border-top-right-radius: ${rangeMarkerBR};
          border-bottom-right-radius: ${rangeMarkerBR};
        }
        &::after {
          border-top-right-radius: ${rangeMarkerBR};
          border-bottom-right-radius: ${rangeMarkerBR};
        }
      }

      &:nth-child(7n + 1),
      &:empty + :not(:empty) {
        &::before {
          border-top-left-radius: ${rangeMarkerBR};
          border-bottom-left-radius: ${rangeMarkerBR};
        }
        &::after {
          border-top-left-radius: ${rangeMarkerBR};
          border-bottom-left-radius: ${rangeMarkerBR};
        }
      }

      &.highlight,
      &.box-shadow {
        &::before {
          ${rangeMarkerCss};
        }
      }

      &.box-shadow,
      &.next-box-shadow,
      &.prev-box-shadow {
        &::after {
          ${rangeMarkerCss};
        }
      }
    `;
  }};

  ${({ theme }) => {
    const {
      week: weekTokens,
      day: dayTokens,
      interval: intervalTokens,
    } = theme.cmp.calendar;

    return css`
      color: ${dayTokens.color.text.base};

      /* Week days name */
      /* -------------------------------------------------------------------- */

      &.weekDayName {
        ${typoMixin({ theme, size: 'xs' })};
        color: ${weekTokens.color.text.base};
        cursor: default;

        span {
          background-color: transparent;
          color: inherit;
        }

        &:hover,
        &:focus,
        &:active {
          > span {
            background-color: transparent;
            color: ${weekTokens.color.text.base};
            cursor: default;
          }
        }

        &::after {
          display: none;
        }
      }

      /* Disabled days */
      /* -------------------------------------------------------------------- */

      &.disabled {
        opacity: 0.4;
        pointer-events: none;
      }

      /* First and last selected days */
      /* -------------------------------------------------------------------- */

      &.selected,
      &:hover {
        span {
          color: ${dayTokens.color.text.selected};
          background-color: ${dayTokens.color.background.selected};
        }
      }

      &.highlight {
        + .highlight.selected {
          &::before {
            width: 50%;
            left: 0;
          }
        }
      }

      &.selected.from-selected {
        &::before {
          width: 50%;
          right: 0;
        }
      }

      &.selected.to-selected {
        &::before {
          width: 50%;
          left: 0;
        }
      }

      &.selected.from-selected.to-selected {
        &::before {
          width: 0;
        }
      }

      /* Selected range days */
      /* -------------------------------------------------------------------- */

      &.highlight {
        color: ${intervalTokens.color.text.selected};
        &::before {
          background: ${intervalTokens.color.background.selected};
        }
      }

      /* Shadow ------------------------------------------------------------- */
      /* -------------------------------------------------------------------- */

      &.box-shadow,
      &.next-box-shadow {
        color: ${intervalTokens.color.text.activated};

        &::after {
          background: ${intervalTokens.color.background.activated};
          width: 100%;
        }
      }

      &.selected.prev-box-shadow {
        &::after {
          width: 50%;
          left: 0;
        }
      }

      &.box-shadow {
        + .selected,
        .selected.prev-box-shadow {
          &::after {
            width: 50%;
            left: 0;
          }
        }
      }

      &.selected.box-shadow {
        &::after {
          width: 50%;
          right: 0;
        }
      }

      &.rightmost.box-shadow {
        &::after {
          width: 50%;
          left: 0;
        }
      }

      &.selected.highlight.next-box-shadow {
        &::after {
          width: 50%;
          right: 0;
        }
      }

      &:not(.box-shadow, .highlight) {
        + .box-shadow:hover {
          &::after {
            width: 50%;
            right: 0;
          }
        }
      }

      /* Shadow within an interval ------------------------------------------ */
      /* -------------------------------------------------------------------- */

      // TODO: que cazzo es esto: es para marcar el rango dentro de otro rango ya seleccionado previamente
      // &.highlight.box-shadow {
      //   color: ${intervalTokens.color.text.mixed};
      //   &::before {
      //     background: ${intervalTokens.color.background.mixed};
      //   }
      //   + div:hover {
      //     &::before {
      //       background: linear-gradient(
      //         to right,
      //         ${intervalTokens.color.background.mixed} 0%,
      //         ${intervalTokens.color.background.selected} 100%
      //       );
      //     }
      //     + div:not(:nth-child(7n
      //           + 1)):not(:nth-child(7n)):not(:first-child):not(:last-child):before {
      //       width: calc(200%);
      //       left: -50%;
      //     }
      //   }
      // }

      // Esto parece ser para el sombreado del primer y ultimo dia del mes cuando esta por seleccionar
      &.box-shadow:not(.selected) {
        &[data-cell='1'] {
          &::before {
            background: linear-gradient(
              to right,
              transparent 0%,
              ${intervalTokens.color.background.activated} 65%,
              ${intervalTokens.color.background.activated} 100%
            );
          }
          &::after {
            content: none;
          }
        }
        &.month-last-day {
          &::after {
            background: linear-gradient(
              to right,
              ${intervalTokens.color.background.activated} 0%,
              ${intervalTokens.color.background.activated} 35%,
              transparent 100%
            );
          }
        }
      }

      // Esto parece ser para el sombreado del primer y ultimo dia del mes cuando hay rango
      &.highlight {
        &[data-cell='1'] {
          &::before {
            border-radius: 0;
            background: linear-gradient(
              to right,
              transparent 0%,
              ${intervalTokens.color.background.selected} 65%,
              ${intervalTokens.color.background.selected} 100%
            );
          }
          &.box-shadow {
            &::before {
              background: linear-gradient(
                to right,
                transparent 0%,
                ${intervalTokens.color.background.mixed} 65%,
                ${intervalTokens.color.background.mixed} 100%
              );
            }
          }
        }
        &.month-last-day {
          &:before {
            background: linear-gradient(
              to right,
              ${intervalTokens.color.background.selected} 0%,
              ${intervalTokens.color.background.selected} 35%,
              transparent 100%
            );
          }
          &.box-shadow {
            &::before {
              background: linear-gradient(
                to right,
                ${intervalTokens.color.background.mixed} 0%,
                ${intervalTokens.color.background.mixed} 35%,
                transparent 100%
              );
            }
          }
        }
      }
    `;
  }};
`;
