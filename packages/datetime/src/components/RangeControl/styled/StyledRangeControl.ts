import styled, { css } from 'styled-components';
import { InputProps } from '@devoinc/genesys-ui-form';

export interface StyledRangeControlProps extends Pick<InputProps, 'size'> {
  /** Set styles when is open a component */
  isOpen?: boolean;
  /** Input width value*/
  width?: string;
  /** Set styles when RT is visible */
  hideRealTime?: boolean;
}

export const StyledRangeControl = styled.div.attrs((props) => ({
  rangeControlTokens: props.theme.cmp.rangeInput,
  aliasTokens: props.theme.alias,
}))<StyledRangeControlProps>`
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  display: inline-flex;
  border-style: solid;

  ${({ aliasTokens, isOpen, rangeControlTokens, size }) => {
    const borderColor = rangeControlTokens.color.border.base;
    const activeBorderColor = rangeControlTokens.color.border.active;
    return css`
      transition: border-color ease
          ${rangeControlTokens.mutation.transitionDuration},
        width ease ${rangeControlTokens.mutation.transitionDuration};
      border-width: ${rangeControlTokens.shape.borderSize};
      border-color: ${isOpen ? activeBorderColor : borderColor};
      border-radius: ${rangeControlTokens.shape.borderRadius};
      padding: ${rangeControlTokens.space.padding[size]};
      height: ${rangeControlTokens.size.height[size]};
      gap: ${aliasTokens.space.cmp.xxs};

      &:hover,
      &:active,
      &:focus-within {
        border-color: ${activeBorderColor};
      }
    `;
  }};
`;
