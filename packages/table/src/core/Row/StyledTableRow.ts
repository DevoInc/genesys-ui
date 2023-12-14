import React from 'react';
import styled, { css } from 'styled-components';
import {
  pseudoElementMixin,
  pseudoElementOverlayMixin,
} from '@devoinc/genesys-ui';

export interface StyledTableRowProps {
  draggable?: boolean;
  even?: boolean;
  $height?: React.CSSProperties['height'];
  isAfterRow?: boolean;
  isDragging?: boolean;
  state?:
    | 'enabled'
    | 'disabled'
    | 'expanded'
    | 'highlighted'
    | 'modified'
    | 'selected'
    | 'created'
    | 'deleted';
  striped?: boolean;
  transform?: React.CSSProperties['transform'];
  $width?: React.CSSProperties['width'];
}

export const StyledTableRow = styled.tr.attrs<StyledTableRowProps>(
  ({ $width, $height, transform }) => ({
    style: {
      position: 'absolute',
      width: $width ? $width : '100%',
      height: $height,
      transform,
    },
  }),
)<StyledTableRowProps>`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;

  ${({ even, isAfterRow, draggable, isDragging, striped, state, theme }) => {
    const evenOddType = striped && even ? 'even' : 'odd';
    const aliasTokens = theme.alias;
    const rowTokens = theme.cmp.table.row;
    const transitionDuration = rowTokens.mutation.transitionDuration;
    const hoverBgColor = striped
      ? theme.cmp.table.cell.color.background.backdrop.hovered.strong
      : theme.cmp.table.cell.color.background.backdrop.hovered.base;
    return css`
      @keyframes modifiedBlink {
        0% {
          background-color: ${rowTokens.color.background[evenOddType].base};
        }
        10% {
          background-color: ${rowTokens.color.background.modifiedBlink};
        }
        60% {
          background-color: ${rowTokens.color.background.modifiedBlink};
        }
        100% {
          background-color: ${rowTokens.color.background[evenOddType]
            .highlighted};
        }
      }
      z-index: ${isAfterRow && rowTokens.elevation.zIndex.isAfterRow};
      transition: background-color ease ${transitionDuration.bgColor};
      animation: ${state === 'modified' &&
      `modifiedBlink ${transitionDuration.modifiedBlink} ease-in-out`};
      border: none;
      box-shadow: ${isDragging &&
      theme.alias.elevation.boxShadow.depth.draggable};
      background-color: ${() => {
        if (isAfterRow) return rowTokens.color.background[evenOddType].afterRow;
        if (state === 'selected')
          return rowTokens.color.background[evenOddType].selected;
        if (state === 'created')
          return aliasTokens.color.background.surface.base.created;
        if (state === 'deleted')
          return aliasTokens.color.background.surface.base.deleted;
        if (state === 'highlighted' || state === 'modified')
          return rowTokens.color.background[evenOddType].highlighted;
        if (state === 'expanded')
          return rowTokens.color.background[evenOddType].expanded;
        if (isDragging) return rowTokens.color.background.odd.base;
        return rowTokens.color.background[evenOddType].base;
      }};

      // hovered
      &::before {
        ${pseudoElementOverlayMixin({})};
        transition: background-color ease-in-out
          ${theme.cmp.table.cell.mutation.transitionDuration};
        background-color: transparent;
      }

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

      // draggable
      ${draggable &&
      css`
        position: relative;
        cursor: grab;

        &::after {
          ${pseudoElementMixin({})}
          background: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ctitle%3Erow_drag_drop%3C/title%3E%3Cpath d='M12.933 0h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 29.467h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 25.2h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 16.8h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 12.667h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 8.4h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 4.267h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M12.933 21.067h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 0h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 29.467h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 25.2h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 16.8h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 12.667h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 8.4h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 4.267h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3Cpath d='M16.533 21.067h2.533v2.533h-2.533v-2.533z'%3E%3C/path%3E%3C/svg%3E")
            no-repeat;
          background-clip: border-box;
          top: 50%;
          width: 3.2rem;
          height: 3.2rem;
          left: -1rem;
          transition: opacity 0.1s ease-in-out;
          transform: translate(0, -50%) scale(0.6);
          opacity: 0;
        }

        &:hover::after,
        &:active::after {
          opacity: 0.4;
        }

        &:active {
          cursor: grabbing;
          background-color: ${rowTokens.color.background.odd.base};
        }
      `}

      // disabled
      ${state === 'disabled' &&
      css`
        opacity: ${rowTokens.shape.opacity.disabled};
        pointer-events: none;
      `}

      // border bottom when it's not striped
      ${!isAfterRow &&
      state !== 'expanded' &&
      !striped &&
      css`
        border-bottom: solid ${rowTokens.shape.borderSize.after}
          ${rowTokens.color.background.after};
      `}
    `;
  }}
`;
