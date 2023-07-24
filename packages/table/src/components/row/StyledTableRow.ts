import styled, { css, DefaultTheme } from 'styled-components';
import { getSizes, getZindexMap } from './constants';
import {
  pseudoElementOverlayMixin,
  pseudoElementMixin,
  iconFontMixin,
} from '@devoinc/genesys-ui';
import icons from '@devoinc/genesys-icons/dist/icon-variables.js';
import { Density } from './declarations';

interface StyledTableRowProps {
  density?: Density;
  disabled?: boolean;
  even?: boolean;
  expanded?: boolean;
  heightProp?: number;
  highlighted?: boolean;
  isAfterRow?: boolean;
  isDraggable?: boolean;
  isDragging?: boolean;
  isVirtual?: boolean;
  modified?: boolean;
  opacity?: number;
  selected?: boolean;
  striped?: boolean;
}

const getBorderRadiusValue = (
  expanded: boolean,
  isAfterRow: boolean,
  borderRadius: string
) => {
  if (expanded) {
    return `${borderRadius} ${borderRadius} 0 0`;
  }
  return !isAfterRow ? borderRadius : '0';
};

const draggableStyles = (theme: DefaultTheme) => css`
  position: relative;
  &::after {
    ${pseudoElementMixin(null)};
    ${iconFontMixin()};
    content: '${icons.row_drag_drop}';
    top: 50%;
    left: -0.4rem;
    transition: opacity 0.1s ease-in-out;
    transform: translate(0, -50%);
    opacity: 0;
    font-size: 2rem;
    color: ${theme.alias.color.text.body.base};
  }

  &:hover::after,
  &:active::after {
    opacity: 0.5;
  }

  &:active {
    cursor: grabbing;
  }
`;

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  ${({
    density,
    disabled,
    even,
    expanded,
    heightProp,
    highlighted,
    isAfterRow,
    isDraggable,
    isDragging,
    isVirtual,
    modified,
    opacity,
    selected,
    striped,
    theme,
  }) => {
    const evenOddType = even ? 'even' : 'odd';
    const tableTokens = theme.cmp.table;
    const cmpTokens = tableTokens.row;
    const transitionDuration = cmpTokens.mutation.transitionDuration;
    const borderRadius = getSizes(density, tableTokens).row.br + 'px';
    return css`
      @keyframes modifiedBlink {
        0% {
          background-color: ${cmpTokens.color.background.modifiedBlink};
        }
        100% {
          background-color: ${striped &&
          cmpTokens.color.background[evenOddType].highlighted};
        }
      }
      z-index: ${isAfterRow && getZindexMap(theme).afterRow};
      transition: background-color ease ${transitionDuration.bgColor};
      animation: ${modified &&
      `modifiedBlink ${transitionDuration.modifiedBlink} ease-in-out`};
      border: none;
      box-shadow: ${isDragging &&
      '0 8px 16px -4px rgba(24,43,66, 0.25), 0 0 1px 0 rgba(24,43,66, 0.31)'};
      border-radius: ${getBorderRadiusValue(
        expanded,
        isAfterRow,
        borderRadius
      )};
      height: ${heightProp + 'px'};
      background-color: ${() => {
        if (selected) return cmpTokens.color.background.odd.selected;
        if (isAfterRow) return cmpTokens.color.background.odd.afterRow;
        if (highlighted) return cmpTokens.color.background.odd.highlighted;
        if (expanded) return cmpTokens.color.background.odd.expanded;
        return cmpTokens.color.background.odd.base;
      }};

      // striped mode
      ${striped &&
      css`
        background-color: ${() => {
          if (selected) return cmpTokens.color.background[evenOddType].selected;
          if (isAfterRow)
            return cmpTokens.color.background[evenOddType].afterRow;
          if (highlighted)
            return cmpTokens.color.background[evenOddType].highlighted;
          if (expanded) return cmpTokens.color.background[evenOddType].expanded;
          return cmpTokens.color.background[evenOddType].base;
        }};
      `}

      ${isDraggable && draggableStyles}

      // dragging
      ${isDragging &&
      css`
        &::before {
          ${pseudoElementOverlayMixin()};
          background-color: ${cmpTokens.color.background.odd.base};
        }
      `}

      // virtualized
      ${isVirtual &&
      css`
        display: flex;
        position: absolute;
        left: 0;
      `}

      ${disabled &&
      css`
        opacity: ${cmpTokens.shape.opacity.disabled};
        pointer-events: none;
      `}

      // border bottom with pseudo element to avoid border radius effect
      ${!isAfterRow &&
      !expanded &&
      !striped &&
      css`
        &::after {
          ${pseudoElementMixin(null)};
          bottom: 0;
          left: ${borderRadius};
          right: ${borderRadius};
          height: ${cmpTokens.shape.borderSize.after};
          background-color: ${cmpTokens.color.background.after};
          pointer-events: none;
        }
      `}

      // opacity after row
      ${isAfterRow &&
      css`
        opacity: ${opacity};
      `}
    `;
  }}
`;
