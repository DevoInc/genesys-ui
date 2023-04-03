import styled, { css, DefaultTheme, StyledComponent } from 'styled-components';

import { ButtonSize } from '../../';

const spacingSizeMap: { [key in ButtonSize]: ButtonSize } = {
  xxs: 'xxs',
  xs: 'xxs',
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;

const getSpacingSize = (itemsGap: ButtonSize, theme: DefaultTheme) => {
  const sizeForSpacing = spacingSizeMap[itemsGap];
  return theme.alias.space.cmp[sizeForSpacing];
};

export interface StyledButtonGroupProps {
  /** If the actions are hidden opacity to 0. */
  hidden?: boolean;
  /** The gap between the form group items.*/
  itemsGap?: ButtonSize;
  /** The parent styled component which makes actions visible when it's hovered, focused... etc. */
  visibilityTrigger?: StyledComponent<any, any>;
}

export const StyledButtonGroup = styled.ul<StyledButtonGroupProps>`
  ${({ hidden = false, itemsGap = 'md', theme, visibilityTrigger }) => {
    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: ${getSpacingSize(itemsGap, theme)};
      opacity: ${hidden ? '0' : null};
      transition: all ease ${theme.cmp.button.mutation.transitionDuration};
      padding: 0;
      list-style: none;

      // If visibility trigger then the actions only are visible if this one is
      // hovered, focused or pressed
      ${visibilityTrigger &&
      css`
        opacity: 0;

        ${visibilityTrigger}:hover &,
        ${visibilityTrigger}:focus &,
        ${visibilityTrigger}:active & {
          opacity: 1;
        }
      `}
    `;
  }}
`;

export interface StyledButtonGroupItemProps {
  /** If the child action has 'quiet' colorScheme. */
  quietChildButton?: boolean;
  /** The size of the action/s */
  size?: ButtonSize;
}

export const StyledButtonGroupItem = styled.li<StyledButtonGroupItemProps>`
  ${({ quietChildButton, size, theme }) => {
    const spacingBetweenButtons = getSpacingSize(size, theme);
    return css`
      list-style: none;

      & + & {
        margin-left: ${quietChildButton
          ? `0 calc((${spacingBetweenButtons} / 3) * -1)`
          : null};
      }
    `;
  }}
`;
