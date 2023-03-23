import styled, { css } from 'styled-components';

export interface StyledDraggableContainerProps {
  isDragging: boolean;
}

export const StyledDraggableContainer = styled.div<StyledDraggableContainerProps>`
  ${({ isDragging, theme }) => {
    const colorTokens = theme?.tokens?.alias?.color;
    const elevationTokens = theme?.tokens?.alias?.elevation;

    return css`
      all: unset;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: ${isDragging ? 'grabbing' : 'grab'};

      &::after,
      &::before {
        content: '';
        position: absolute;
        inset: 0 0 0 0;
        transition: all ease 0.15s;
        pointer-events: none;
        background-color: transparent;
      }

      &:hover::before {
        background-color: ${colorTokens?.background?.surface?.backdrop?.base
          ?.hovered};
      }

      &:focus-visible {
        outline: none;
        box-shadow: ${elevationTokens?.boxShadow?.base?.focused};
      }
    `;
  }}
`;
