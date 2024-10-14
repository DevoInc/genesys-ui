import styled, { css } from 'styled-components';

export interface StyledDraggableContainerProps {
  $isDragging: boolean;
}

export const StyledDraggableContainer = styled.div<StyledDraggableContainerProps>`
  ${({ $isDragging, theme }) => {
    const cmpTokens = theme.cmp.selectControl.multiValueDraggable;

    return css`
      all: unset;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: ${$isDragging ? 'grabbing' : 'grab'};

      &::after,
      &::before {
        content: '';
        position: absolute;
        inset: 0 0 0 0;
        transition: all ease ${cmpTokens.mutation.transitionDuration};
        pointer-events: none;
        background-color: transparent;
      }

      &:hover::before {
        background-color: ${cmpTokens.color.background.hovered};
      }

      &:focus-visible {
        outline: none;
        box-shadow: ${cmpTokens.elevation.boxShadow.focused};
      }
    `;
  }}
`;
