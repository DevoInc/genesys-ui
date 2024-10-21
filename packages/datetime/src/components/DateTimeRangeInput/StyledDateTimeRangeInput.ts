import styled, { css } from 'styled-components';

import { IInputAttrs, TControlWidth } from '@devoinc/genesys-ui';

export interface StyledDateTimeRangeInputProps
  extends Pick<IInputAttrs, 'size'> {
  /** Set styles when is open a component */
  $isOpen?: boolean;
  $controlWidth?: TControlWidth;
}

export const StyledDateTimeRangeInput = styled.div<StyledDateTimeRangeInputProps>`
  position: relative;
  flex-wrap: nowrap;
  align-items: center;
  border-style: solid;
  display: flex;
  width: 100%;

  ${({ $isOpen, size, theme, $controlWidth }) => {
    const tokens = theme.cmp.dateTimeRangeControl;
    const borderColor = tokens.color.border.base;
    const activeBorderColor = tokens.color.border.active;
    return css`
      width: ${$controlWidth ? '100%' : 'auto'};
      transition:
        border-color ease ${tokens.mutation.transitionDuration},
        width ease ${tokens.mutation.transitionDuration};
      border-width: ${tokens.shape.borderSize};
      border-color: ${$isOpen ? activeBorderColor : borderColor};
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
