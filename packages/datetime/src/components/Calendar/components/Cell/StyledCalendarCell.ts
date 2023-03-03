import styled, { css } from 'styled-components';

export const StyledCalendarCell = styled.div`
  position: relative;
  font-size: 1.2rem;
  font-weight: 300;

  // day container
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.3rem;
    height: 2.3rem;
    position: relative;
    z-index: 1;
    margin: 0 auto;
    border-radius: 50%;
    box-sizing: content-box;
  }

  :not(:empty) {
    cursor: pointer;
  }

  :nth-child(7n),
  :last-child {
    :before {
      border-top-right-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
    }
    :after {
      border-top-right-radius: 0.8rem;
      border-bottom-right-radius: 0.8rem;
    }
  }

  :nth-child(7n + 1),
  :empty + :not(:empty) {
    :before {
      border-top-left-radius: 0.8rem;
      border-bottom-left-radius: 0.8rem;
    }
    :after {
      border-top-left-radius: 0.8rem;
      border-bottom-left-radius: 0.8rem;
    }
  }

  /* Highlight & Shadow Area ------------------------------------------------ */
  /* ------------------------------------------------------------------------ */

  &.highlight {
    :before {
      content: '';
      position: absolute;
      height: 1.8rem;
      width: 100%;
      margin-top: 0.25rem; // 2.3 - 1.8 / 2
      top: 0;
    }
  }

  &.box-shadow,
  &.next-box-shadow {
    :after {
      content: '';
      position: absolute;
      height: 1.8rem;
      width: 100%;
      margin-top: 0.25rem; // 2.3 - 1.8 / 2
      top: 0;
    }
  }

  &.next-box-shadow,
  &.prev-box-shadow {
    :after {
      content: '';
      position: absolute;
      height: 1.8rem;
      width: 100%;
      top: 0;
      margin-top: 0.25rem; // 2.3 - 1.8 / 2
    }
  }

  ${({ theme }) => {
    const {
      week: weekTokens,
      day: dayTokens,
      interval: intervalTokens,
    } = theme.tokens.cmp.calendar;

    return css`
      color: ${dayTokens.color.text.base};

      /* Week days name */
      /* -------------------------------------------------------------------- */

      &.weekDayName {
        cursor: default;
        color: ${weekTokens.color.text.base};
        font-size: 1.1rem;

        &:hover,
        &:focus,
        &:active {
          > span {
            background-color: transparent;
            color: ${weekTokens.color.text.base};
            cursor: default;
          }
        }
        span {
          background-color: transparent;
          color: inherit;
        }

        :after {
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
      :hover {
        span {
          color: ${dayTokens.color.text.selected};
          background-color: ${dayTokens.color.background.selected};
        }
      }

      &.highlight {
        + .highlight.selected {
          :before {
            width: 50%;
            left: 0;
          }
        }
      }

      &.selected.from-selected {
        :before {
          width: 50%;
          right: 0;
        }
      }

      &.selected.from-selected.to-selected {
        :before {
          width: 0;
        }
      }

      /* Selected range days */
      /* -------------------------------------------------------------------- */

      &.highlight {
        color: ${intervalTokens.color.text.selected};
        :before {
          background: ${intervalTokens.color.background.selected};
        }
      }

      /* Shadow ------------------------------------------------------------- */
      /* -------------------------------------------------------------------- */

      &.box-shadow,
      &.next-box-shadow {
        color: ${intervalTokens.color.text.activated};
        :after {
          background: ${intervalTokens.color.background.activated};
          width: 100%;
        }
      }

      &.selected.prev-box-shadow {
        :after {
          width: 50%;
          left: 0;
        }
      }

      &.box-shadow {
        + .selected,
        .selected.prev-box-shadow {
          :after {
            width: 50%;
            left: 0;
          }
        }
      }

      &.selected.box-shadow {
        :after {
          width: 50%;
          right: 0;
        }
      }

      &.rightmost.box-shadow {
        :after {
          width: 50%;
          left: 0;
        }
      }

      &.selected.highlight.next-box-shadow {
        :after {
          width: 50%;
          right: 0;
        }
      }

      &:not(.box-shadow, .highlight) {
        + .box-shadow:hover {
          :after {
            width: 50%;
            right: 0;
          }
        }
      }

      /* Shadow within an interval ------------------------------------------ */
      /* -------------------------------------------------------------------- */

      // TODO: que cazzo es esto
      // &.highlight.box-shadow {
      //   color: ${intervalTokens.color.text.mixed};
      //   :before {
      //     background: ${intervalTokens.color.background.mixed};
      //   }
      //   + div:hover {
      //     :before {
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
          &:before {
            background: linear-gradient(
              to right,
              transparent 0%,
              ${intervalTokens.color.background.activated} 75%,
              ${intervalTokens.color.background.activated} 100%
            );
          }
        }
        &:last-child {
          &:before {
            background: linear-gradient(
              to right,
              ${intervalTokens.color.background.activated} 0%,
              ${intervalTokens.color.background.activated} 25%,
              transparent 100%
            );
          }
        }
      }

      // Esto parece ser para el sombreado del primer y ultimo dia del mes cuando hay rango
      &.highlight:not(.selected) {
        &[data-cell='1'] {
          &:before {
            background: linear-gradient(
              to right,
              transparent 0%,
              ${intervalTokens.color.background.selected} 75%,
              ${intervalTokens.color.background.selected} 100%
            );
          }
          &.box-shadow {
            &:before {
              background: linear-gradient(
                to right,
                transparent 0%,
                ${intervalTokens.color.background.mixed} 75%,
                ${intervalTokens.color.background.mixed} 100%
              );
            }
          }
        }
        &:last-child {
          &:before {
            background: linear-gradient(
              to right,
              ${intervalTokens.color.background.selected} 0%,
              ${intervalTokens.color.background.selected} 25%,
              transparent 100%
            );
          }
          &.box-shadow {
            &:before {
              background: linear-gradient(
                to right,
                ${intervalTokens.color.background.mixed} 0%,
                ${intervalTokens.color.background.mixed} 25%,
                transparent 100%
              );
            }
          }
        }
      }
    `;
  }};
`;
