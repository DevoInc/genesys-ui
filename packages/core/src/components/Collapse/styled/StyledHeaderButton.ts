import styled, { css } from 'styled-components';

export const StyledHeaderButton = styled.button`
  ${({ theme }) => {
    const colorTokens = theme?.alias?.color;
    const elevationTokens = theme?.alias?.elevation;

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
