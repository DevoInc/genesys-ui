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
