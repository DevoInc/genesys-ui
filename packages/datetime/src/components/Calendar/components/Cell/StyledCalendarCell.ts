import styled from 'styled-components';

import { typoMixin } from '@devoinc/genesys-ui';

export const StyledCalendarCell = styled.div`
  ${({ theme }) => typoMixin({ theme, $size: 'sm' })};
  position: relative;
  font-weight: 300;

  // day container
  span {
    width: ${({ theme }) => theme.alias.size.square.handler.lg};
    height: ${({ theme }) => theme.alias.size.square.handler.lg};
    border-radius: ${({ theme }) => theme.alias.shape.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    position: relative;
    z-index: 1;
    margin: 0 auto;
  }

  &:not(:empty) {
    cursor: ${({ 'aria-disabled': ariaDisabled, className }) =>
      ariaDisabled || className.includes('weekDayName')
        ? 'inherit'
        : 'pointer'};
  }

  /* Highlight & Shadow Area ------------------------------------------------ */
  /* ------------------------------------------------------------------------ */

  // range marker
  &:nth-child(7n),
  &:last-child {
    &::before {
      border-top-right-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
      border-bottom-right-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
    }
    &::after {
      border-top-right-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
      border-bottom-right-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
    }
  }

  &:nth-child(7n + 1),
  &:empty + :not(:empty) {
    &::before {
      border-top-left-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
      border-bottom-left-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
    }
    &::after {
      border-top-left-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
      border-bottom-left-radius: ${({ theme }) =>
        theme.alias.shape.borderRadius.pill};
    }
  }

  &.highlight,
  &.box-shadow {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 100%;
      height: 1.8rem;
    }
  }

  &.box-shadow,
  &.next-box-shadow,
  &.prev-box-shadow {
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 100%;
      height: 1.8rem;
    }
  }

  color: ${({ theme }) => theme.cmp.calendar.day.color.text.base};

  /* Week days name */
  /* -------------------------------------------------------------------- */

  &.weekDayName {
    ${({ theme }) => typoMixin({ theme, $size: 'xs' })};
    color: ${({ theme }) => theme.cmp.calendar.week.color.text.base};
    cursor: default;

    span {
      background-color: transparent;
      color: inherit;
    }

    &:not(.selected):not(.highlight):not(.box-shadow) {
      &:hover,
      &:focus,
      &:active {
        > span {
          background-color: transparent;
          color: ${({ theme }) => theme.cmp.calendar.week.color.text.base};
          cursor: default;
        }
      }

      &::after {
        display: none;
      }
    }
  }

  /* Disabled days */
  /* -------------------------------------------------------------------- */

  opacity: ${({ 'aria-disabled': ariaDisabled }) =>
    ariaDisabled ? '0.4' : '1'};

  /* First and last selected days */
  /* -------------------------------------------------------------------- */

  span {
    transition:
      background-color ease
        ${({ theme }) => theme.cmp.calendar.day.mutation.transitionDuration},
      color ease
        ${({ theme }) => theme.cmp.calendar.day.mutation.transitionDuration};
  }

  &.selected {
    span {
      color: ${({ theme }) => theme.cmp.calendar.day.color.text.selected};
      background-color: ${({ theme }) =>
        theme.cmp.calendar.day.color.background.selected};
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

  &:not(.selected):not(.highlight):not(.box-shadow):hover {
    span {
      color: ${({ theme }) => theme.cmp.calendar.day.color.text.hovered};
      background-color: ${({ theme }) =>
        theme.cmp.calendar.day.color.background.hovered};
    }
  }

  &.selected:hover,
  &.highlight:hover,
  &.box-shadow:hover {
    span {
      color: ${({ theme }) => theme.cmp.calendar.day.color.text.selected};
      background-color: ${({ theme }) =>
        theme.cmp.calendar.day.color.background.selected};
    }
  }

  /* Hover effects */
  /* -------------------------------------------------------------------- */

  // &.dayName:hover:has(~ &.from-selected) {
  //   background: red;
  // }
  //
  // &.dayName:hover ~ &.dayName:has(~ &.from-selected) {
  //   background: red;
  // }

  /* Selected range days */
  /* -------------------------------------------------------------------- */

  &.highlight {
    color: ${({ theme }) => theme.cmp.calendar.interval.color.text.selected};
    &::before {
      background: ${({ theme }) =>
        theme.cmp.calendar.interval.color.background.selected};
    }
  }

  /* Shadow ------------------------------------------------------------- */
  /* -------------------------------------------------------------------- */

  &.box-shadow,
  &.next-box-shadow {
    color: ${({ theme }) => theme.cmp.calendar.interval.color.text.activated};

    &::after {
      background: ${({ theme }) =>
        theme.cmp.calendar.interval.color.background.activated};
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

  // Esto parece ser para el sombreado del primer y ultimo dia del mes cuando
  // esta por seleccionar
  &.box-shadow:not(.selected) {
    &[data-cell='1'] {
      &::before {
        background: linear-gradient(
          to right,
          transparent 0%,
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.activated}
            65%,
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.activated}
            100%
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
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.activated}
            0%,
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.activated}
            35%,
          transparent 100%
        );
      }
    }
  }

  // Esto parece ser para el sombreado del primer y ultimo dia del mes cuando
  // hay rango
  &.highlight {
    &[data-cell='1'] {
      &::before {
        border-radius: 0;
        background: linear-gradient(
          to right,
          transparent 0%,
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.selected}
            65%,
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.selected}
            100%
        );
      }
      &.box-shadow {
        &::before {
          background: linear-gradient(
            to right,
            transparent 0%,
            ${({ theme }) => theme.cmp.calendar.interval.color.background.mixed}
              65%,
            ${({ theme }) => theme.cmp.calendar.interval.color.background.mixed}
              100%
          );
        }
      }
    }
    &.month-last-day {
      &:before {
        background: linear-gradient(
          to right,
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.selected}
            0%,
          ${({ theme }) =>
              theme.cmp.calendar.interval.color.background.selected}
            35%,
          transparent 100%
        );
      }
      &.box-shadow {
        &::before {
          background: linear-gradient(
            to right,
            ${({ theme }) => theme.cmp.calendar.interval.color.background.mixed}
              0%,
            ${({ theme }) => theme.cmp.calendar.interval.color.background.mixed}
              35%,
            transparent 100%
          );
        }
      }
    }
  }
`;
