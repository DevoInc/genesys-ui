import { css, DefaultTheme } from 'styled-components';

import type { TTabsColorScheme } from '../../declarations';

export interface ITabsMarkMixin {
  /** The color scheme of the tabs mark. */
  colorScheme?: TTabsColorScheme;
  /** The common theme object with all the tokens. */
  theme: DefaultTheme;
}

/**
 * Get the custom styles for the tabs mark.
 *
 * @return object with the css.
 */
export const tabsMarkMixin = ({ colorScheme, theme }: ITabsMarkMixin) => {
  const tokens = theme.cmp.tabs.mark;
  const ColorSchemeForTokens = colorScheme === 'base' ? 'default' : colorScheme;
  // TODO: cmpTokens
  const transitionDuration =
    theme.alias.mutation.transitionDuration.translation.hor.sm;
  return css`
    position: absolute;
    bottom: 0;
    transition: all ease-in-out ${transitionDuration};
    padding: 0 ${tokens.space.padding};

    &::before {
      content: '';
      display: block;
      height: ${tokens.size.height};
      background: ${tokens.color.fill[ColorSchemeForTokens]};
      border-radius: ${tokens.shape.borderRadius};
    }
  `;
};
