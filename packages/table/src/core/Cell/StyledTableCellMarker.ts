import styled, { css } from 'styled-components';

export const StyledTableCellMarker = styled.span`
  position: absolute;
  right: 0.4rem;
  top: 0.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: inherit;

  tr:hover & {
    opacity: 1;
  }

  ${({ theme }) => {
    const tokens = theme.cmp.table.cellMarker;
    const square = theme.cmp.table.cellExpandMarker.typo.fontSize;
    const transitionDuration = tokens.mutation.transitionDuration;
    return css`
      transition:
        opacity ease ${transitionDuration},
        color ease ${transitionDuration};
      color: ${tokens.color.text.enabled};
      width: ${square};
      height: ${square};

      *:enabled:hover &,
      *:enabled:focus & {
        color: ${tokens.color.text.hovered};
      }
    `;
  }}
`;