import styled, { css } from 'styled-components';

interface Props {
  $isDraggable?: boolean;
}

export const StyledCollapseContainerButton = styled.button<Props>`
  all: unset;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: ${({ $isDraggable = false }) => ($isDraggable ? 'grab' : 'pointer')};

  ${({ $isDraggable }) =>
    $isDraggable
      ? css`
          &:active {
            cursor: grabbing;
          }
        `
      : ''}

  &::after,
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 0 0;
    transition: all ease
      ${({ theme }) =>
        theme.cmp.collapse.button.mutation.transitionDuration}0.15s;
    pointer-events: none;
    background-color: ${({ theme }) =>
      theme.cmp.collapse.button.color.background.base};
  }

  &:hover::before {
    background-color: ${({ theme }) =>
      theme.cmp.collapse.button.color.background.hovered};
  }

  &:focus-visible {
    outline: none;
    box-shadow: ${({ theme }) =>
      theme.cmp.collapse.button.elevation.bosShadow.focused};
  }
`;
