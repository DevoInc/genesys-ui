import styled from 'styled-components';

import { typoMixin } from '@devoinc/genesys-ui';

export const StyledCalendarCell = styled.div`
  ${({ theme }) => typoMixin({ theme, $size: 'sm' })};
  position: relative;
  font-weight: 300;

  // day container
  span {
    width: ${({ theme }) => theme.cmp.calendar.day.size.square};
    height: ${({ theme }) => theme.cmp.calendar.day.size.square};
    border-radius: ${({ theme }) =>
      theme.cmp.calendar.day.shape.borderRadius.base};
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
        theme.cmp.calendar.day.shape.borderRadius.corners};
      border-bottom-right-radius: ${({ theme }) =>
        theme.cmp.calendar.day.shape.borderRadius.corners};
    }
  }

  &:nth-child(7n + 1),
  &:empty + :not(:empty) {
    &::before {
      border-top-left-radius: ${({ theme }) =>
        theme.cmp.calendar.day.shape.borderRadius.corners};
      border-bottom-left-radius: ${({ theme }) =>
        theme.cmp.calendar.day.shape.borderRadius.corners};
    }
  }

  &.range-selected,
  &.range-hovered,
  &.range-start,
  &.range-end {
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 100%;
      height: ${({ theme }) => theme.cmp.calendar.interval.size.height};
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
      background-color: ${({ theme }) =>
        theme.cmp.calendar.day.color.background.base};
      color: inherit;
    }

    &:not(.selected):not(.range-selected):not(.range-hovered) {
      &:hover,
      &:focus,
      &:active {
        > span {
          background-color: transparent;
          color: ${({ theme }) => theme.cmp.calendar.day.color.text.base};
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

  &.range-selected {
    + .range-selected.selected {
      &::before {
        width: 50%;
        left: 0;
      }
    }
  }

  &.selected.range-start {
    &::before {
      width: 50%;
      right: 0;
    }
  }

  &.selected.range-end {
    &::before {
      width: 50%;
      left: 0;
    }
  }

  &.selected.range-start.range-end {
    &::before {
      width: 0;
    }
  }

  &:not(.selected):not(.range-selected):not(.range-hovered):hover {
    span {
      color: ${({ theme }) => theme.cmp.calendar.day.color.text.hovered};
      background-color: ${({ theme }) =>
        theme.cmp.calendar.day.color.background.hovered};
    }
  }

  &.selected:hover,
  &.range-selected:hover,
  &.range-hovered:hover {
    span {
      color: ${({ theme }) => theme.cmp.calendar.day.color.text.selected};
      background-color: ${({ theme }) =>
        theme.cmp.calendar.day.color.background.selected};
    }
  }

  /* Hover effects */
  /* -------------------------------------------------------------------- */

  // &.dayName:hover:has(~ &.range-start) {
  //   background: red;
  // }
  //
  // &.dayName:hover ~ &.dayName:has(~ &.range-start) {
  //   background: red;
  // }

  /* Selected range days */
  /* -------------------------------------------------------------------- */

  &.range-selected {
    color: ${({ theme }) => theme.cmp.calendar.interval.color.text.selected};
    &::before {
      background: ${({ theme }) =>
        theme.cmp.calendar.interval.color.background.selected};
    }
  }

  /* Shadow ------------------------------------------------------------- */
  /* -------------------------------------------------------------------- */

  &.range-hovered {
    color: ${({ theme }) => theme.cmp.calendar.interval.color.text.activated};

    &::before {
      background: ${({ theme }) =>
        theme.cmp.calendar.interval.color.background.activated};
      width: 100%;
    }
  }

  &.range-hovered {
    + .selected {
      &::before {
        width: 50%;
        left: 0;
      }
    }
  }

  &.range-start.selected {
    &::before {
      width: 50%;
      right: 0;
    }
  }

  &.rightmost.range-hovered {
    &::before {
      width: 50%;
      left: 0;
    }
  }

  &:not(.range-hovered, .range-selected) {
    + .range-hovered:hover {
      &::before {
        width: 50%;
        right: 0;
      }
    }
  }

  /* Shadow within an interval ------------------------------------------ */
  /* -------------------------------------------------------------------- */

  // Esto parece ser para el sombreado del primer y ultimo dia del mes cuando
  // esta por seleccionar
  &.range-hovered {
    &.month-first-day {
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
    }
    &.month-last-day {
      &::before {
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
  &.range-selected {
    &.month-first-day {
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
      &.range-hovered {
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
      &.range-hovered {
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
