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

export const StyledDateTimeRangeInput = styled.div<StyledDateTimeRangeInputProps>`
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  border-style: solid;

  ${({ isOpen, size, theme, wide }) => {
    const tokens = theme.cmp.dateTimeRangeControl;
    const borderColor = tokens.color.border.base;
    const activeBorderColor = tokens.color.border.active;
    return css`
      display: ${wide ? 'flex' : 'inline-flex'};
      transition:
        border-color ease ${tokens.mutation.transitionDuration},
        width ease ${tokens.mutation.transitionDuration};
      border-width: ${tokens.shape.borderSize};
      border-color: ${isOpen ? activeBorderColor : borderColor};
      border-radius: ${tokens.shape.borderRadius};
      padding: ${tokens.space.padding[size]};
      height: ${tokens.size.height[size]};
      gap: ${tokens.space.gap[size]};

      &:hover,
      &:active,
      &:focus-within {
        border-color: ${activeBorderColor};
      }
    `;
  }};
`;
