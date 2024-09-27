import styled, { css, CSSProp } from 'styled-components';
import { pseudoElementOverlayMixin } from '@devoinc/genesys-ui';

export interface StyledTableRowProps {
  $even?: 'even' | 'odd';
  $striped?: boolean;
  $hide?: boolean;
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
  $highlightRowOnHover?: boolean;
}

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ $hide }) => ($hide ? 'none' : 'flex')};
  align-items: center;
  width: 100%;

  ${({ $even, $striped, theme, $highlightRowOnHover }) => {
    const rowTokens = theme.cmp.table.row;
    const transitionDuration = rowTokens.mutation.transitionDuration;
    const hoverBgColor = $striped
      ? theme.cmp.table.cell.color.background.backdrop.hovered.strong
      : theme.cmp.table.cell.color.background.backdrop.hovered.base;

    return css`
      @keyframes modifiedBlink {
        0% {
          background-color: ${rowTokens.color.background[$even].base};
        }
        10% {
          background-color: ${rowTokens.color.background.modifiedBlink};
        }
        60% {
          background-color: ${rowTokens.color.background.modifiedBlink};
        }
        100% {
          background-color: ${rowTokens.color.background[$even].highlighted};
        }
      }
      transition: background-color ease ${transitionDuration.bgColor};
      border: none;
      background-color: ${() => rowTokens.color.background[$even].base};

      // hovered
      ${$highlightRowOnHover &&
      css`
        &::before {
          ${pseudoElementOverlayMixin()};
          transition: background-color ease-in-out
            ${theme.cmp.table.cell.mutation.transitionDuration};
          background-color: transparent;
        }
      `}

      &:hover,
      :has(*:focus) {
        z-index: 1;

        &::before {
          background-color: ${hoverBgColor};
        }
      }

      :has(*:focus),
      :has([aria-selected='true']) {
        z-index: 2;
      }

      // border bottom when it's not striped
      ${!$striped &&
      css`
        border-bottom: solid ${rowTokens.shape.borderSize.after}
          ${rowTokens.color.background.after};
      `}
    `;
  }}
`;
