import { css, DefaultTheme } from 'styled-components';

// declarations
import { ButtonSelectableState } from '../../../';

export interface ContentSwitcherItemMixinProps {
  /** Sets the color scheme according to component state */
  state?: ButtonSelectableState;
  /** If the item occupies all the available space. */
  wide?: boolean;
  theme: DefaultTheme;
}

export const contentSwitcherItemMixin = ({
  state,
  theme,
  wide,
}: ContentSwitcherItemMixinProps) => {
  const aliasTokens = theme.alias;
  return css`
    ${wide &&
    css`
      flex: 1 1 100%;
    `}

    &&&:has(:checked) {
      box-shadow: ${aliasTokens.elevation.boxShadow.depth.raised};
      background-color: ${aliasTokens.color.background.surface.base.base};
    }

    ${state === 'selected' &&
    css`
      &&& {
        box-shadow: ${aliasTokens.elevation.boxShadow.depth.raised};
        background-color: ${aliasTokens.color.background.surface.base.base};
      }
    `}

    ${state !== 'disabled' &&
    state !== 'selected' &&
    css`
      &:hover {
        background-color: ${theme.cmp.button.color.background.blendBase
          .hovered};
      }
    `}
  `;
};
