import { css, DefaultTheme, StyledComponent } from 'styled-components';
import type { TButtonSize } from '../Button';
import { FLEX_SPACING_SIZE_MAP } from './constants';

export const getButtonGroupSpacingSize = (
  size: TButtonSize,
  theme: DefaultTheme,
) => {
  const sizeForSpacing = FLEX_SPACING_SIZE_MAP[size];
  return theme.alias.space.cmp[sizeForSpacing];
};

export interface ButtonGroupMixinProps {
  /** If the actions are hidden opacity to 0. */
  hidden?: boolean;
  /** The parent styled component which makes actions visible when it's hovered, focused... etc. */
  visibilityTrigger?: StyledComponent<any, any>;
  theme: DefaultTheme;
}

/**
 * Get the ButtonGroup custom styles applied to a Flex component.
 *
 * @return object with the css.
 */
export const buttonGroupMixin = ({
  hidden,
  theme,
  visibilityTrigger,
}: ButtonGroupMixinProps) => {
  return css`
    opacity: ${hidden ? '0' : null};
    transition: all ease ${theme.cmp.button.mutation.transitionDuration};
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
};

export interface ButtonGroupItemMixinProps {
  /** If the child action has 'quiet' colorScheme. */
  hasQuietButton?: boolean;
  /** The size of the action/s */
  size?: TButtonSize;
  theme: DefaultTheme;
}

export const buttonGroupItemMixin = ({
  hasQuietButton,
  size,
  theme,
}: ButtonGroupItemMixinProps) => {
  const spacingBetweenButtons = getButtonGroupSpacingSize(size, theme);
  return css`
    list-style: none;
    // to reduce the long distance optical effect when the buttons are quiet colorScheme
    margin-left: ${hasQuietButton
      ? `calc((${spacingBetweenButtons} / 2) * -1)`
      : null};
  `;
};
