import styled, { css } from 'styled-components';

export const StyledCellMarker = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  cursor: inherit;

  tr:hover &,
  *:enabled:hover &,
  *:enabled:focus & {
    opacity: 0.6;
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
        opacity: 1;
        color: ${tokens.color.text.hovered};
      }
    `;
}}
`;
