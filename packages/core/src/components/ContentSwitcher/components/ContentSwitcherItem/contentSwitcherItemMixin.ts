import { css, DefaultTheme } from 'styled-components';

// declarations
import type { ButtonProps, TButtonSelectableState } from '../../../Button';

export interface ContentSwitcherItemMixinProps {
  /** Sets the color scheme according to component state */
  state?: TButtonSelectableState;
  /** If the item occupies all the available space. */
  wide?: ButtonProps['wide'];
  theme: DefaultTheme;
}

export const contentSwitcherItemMixin = ({
  state,
  theme,
  wide,
}: ContentSwitcherItemMixinProps) => {
  const cmpTokens = theme.cmp.contentSwitcher.item;
  const bgActivated = cmpTokens.color.background.activated;
  const bsActivated = cmpTokens.elevation.boxShadow.activated;
  return css`
    ${wide &&
    css`
      flex: 1 1 100%;
    `}

    &&&:has(:checked) {
      box-shadow: ${bsActivated};
      background-color: ${bgActivated};
    }

    ${state === 'selected' &&
    css`
      &&& {
        box-shadow: ${bsActivated};
        background-color: ${bgActivated};
      }
    `}

    ${state !== 'disabled' &&
    state !== 'selected' &&
    css`
      &:hover {
        background-color: ${cmpTokens.color.background.hovered};
      }
    `}
  `;
};
