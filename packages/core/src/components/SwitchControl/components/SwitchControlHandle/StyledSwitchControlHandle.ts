import styled, { css, type CSSProp } from 'styled-components';
import type {
  ISwitch,
  TSwitchDiameter,
  TSwitchHeight,
} from '../../declarations';

export interface StyledSwitchControlHandleProps {
  $checked?: ISwitch['checked'];
  $disabled?: ISwitch['disabled'];
  switchHeight: TSwitchHeight;
  diameter: TSwitchDiameter;
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledSwitchControlHandle = styled.span<StyledSwitchControlHandleProps>`
  ${({ $disabled = false, $checked, switchHeight, diameter, theme }) => {
    const switchTokens = theme.cmp.switchControl;
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
