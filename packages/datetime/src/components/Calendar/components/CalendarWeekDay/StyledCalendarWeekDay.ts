import styled from 'styled-components';

import { typoMixin } from '@devoinc/genesys-ui';

export const StyledCalendarWeekDay = styled.div`
  ${({ theme }) => typoMixin({ theme, $size: 'sm' })};
  position: relative;
  font-weight: 300;

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

  /* Week days name */
  /* -------------------------------------------------------------------- */

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
`;
