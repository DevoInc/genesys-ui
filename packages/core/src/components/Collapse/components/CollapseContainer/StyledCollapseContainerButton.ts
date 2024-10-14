import styled, { css } from 'styled-components';

export const StyledCollapseContainerButton = styled.button`
  ${({ theme }) => {
    const cmpTokens = theme.cmp.collapse.button;

    return css`
      all: unset;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      cursor: pointer;

      &::after,
      &::before {
        content: '';
        position: absolute;
        inset: 0 0 0 0;
        transition: all ease ${cmpTokens.mutation.transitionDuration};
        pointer-events: none;
        background-color: ${cmpTokens.color.background.base};
      }

      &:hover::before {
        background-color: ${cmpTokens.color.background.hovered};
      }

      &:focus-visible {
        outline: none;
        box-shadow: ${cmpTokens.elevation.bosShadow.focused};
      }
    `;
  }}
`;
