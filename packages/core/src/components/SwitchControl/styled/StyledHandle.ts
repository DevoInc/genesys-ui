import styled, { css } from 'styled-components';

interface StyledHandleProps {
  $disabled?: boolean;
  $checked?: boolean;
  switchHeight: number;
  diameter: number;
}

export const StyledHandle = styled.span<StyledHandleProps>`
  ${({ $disabled = false, $checked, switchHeight, diameter, theme }) => {
    const switchTokens = theme.tokens.cmp.switchControl;
    const handlerTokens = switchTokens.handler;
    const offset = +((switchHeight - diameter) / 2).toFixed(2);
    const checkedCss = css`
      left: calc(100% - ${offset}px);
      transform: translateX(-100%);
    `;
    return css`
      content: '';
      position: absolute;
      top: ${offset}px;
      left: ${offset}px;
      transition: all ease ${handlerTokens.mutation.transitionDuration};
      box-shadow: ${handlerTokens.elevation.boxShadow.enabled};
      border-radius: ${diameter}px;
      width: ${diameter}px;
      height: ${diameter}px;
      background-color: ${handlerTokens.color.background};

      ${!$disabled &&
      css`
        &:hover {
          box-shadow: ${handlerTokens.elevation.boxShadow.hovered};
        }

        &:active {
          box-shadow: ${handlerTokens.elevation.boxShadow.pressed};
        }
      `}

      ${$checked && checkedCss};

      input:checked ~ & {
        ${checkedCss};
      }
    `;
  }};
`;
