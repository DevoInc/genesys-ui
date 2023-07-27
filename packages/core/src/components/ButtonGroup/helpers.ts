import { css, DefaultTheme, StyledComponent } from 'styled-components';
import { ButtonSize } from '../Button';
import { FLEX_SPACING_SIZE_MAP } from './constants';

const getSpacingSize = (size: ButtonSize, theme: DefaultTheme) => {
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
};

export interface ButtonGroupItemMixinProps {
  /** If the child action has 'quiet' colorScheme. */
  quietChildButton?: boolean;
  /** The size of the action/s */
  size?: ButtonSize;
  theme: DefaultTheme;
}

export const buttonGroupItemMixin = ({
  quietChildButton,
  size,
  theme,
}: ButtonGroupItemMixinProps) => {
  const spacingBetweenButtons = getSpacingSize(size, theme);
  return css`
    list-style: none;

    & + & {
      margin-left: ${quietChildButton
        ? `calc((${spacingBetweenButtons} / 2) * -1)`
        : null};
    }
  `;
};
