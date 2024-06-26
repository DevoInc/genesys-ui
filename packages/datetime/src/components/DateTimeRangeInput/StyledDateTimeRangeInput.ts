import styled, { css } from 'styled-components';

import { InputControlProps } from '@devoinc/genesys-ui';

export interface StyledDateTimeRangeInputProps
  extends Pick<InputControlProps, 'size'> {
  /** Set styles when is open a component */
  isOpen?: boolean;
  /** Set styles when RT is visible */
  hideRealTime?: boolean;
  /** If the DateTimeRangeInput fills the whole space of the parent container. */
  wide?: boolean;
}

export const StyledDateTimeRangeInput = styled.div.attrs((props) => ({
  rangeControlTokens: props.theme.cmp.dateTimeRangeControl,
  aliasTokens: props.theme.alias,
}))<StyledDateTimeRangeInputProps>`
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  border-style: solid;

  ${({ aliasTokens, isOpen, rangeControlTokens, size, wide }) => {
    const borderColor = rangeControlTokens.color.border.base;
    const activeBorderColor = rangeControlTokens.color.border.active;
    return css`
      display: ${wide ? 'flex' : 'inline-flex'};
      transition:
        border-color ease ${rangeControlTokens.mutation.transitionDuration},
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
