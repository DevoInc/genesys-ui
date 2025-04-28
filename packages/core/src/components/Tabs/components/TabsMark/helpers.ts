import { css, DefaultTheme } from 'styled-components';

import type { ITabs, TTabsColorScheme } from '../../declarations';

export interface ITabsMarkMixin extends Pick<ITabs, 'align'> {
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
export const tabsMarkMixin = ({
  align,
  colorScheme,
  theme,
}: ITabsMarkMixin) => {
  const tokens = theme.cmp.tabs.mark;
  const ColorSchemeForTokens = colorScheme === 'base' ? 'default' : colorScheme;
  return css`
    position: absolute;
    inset: ${align === 'top' ? '0 auto auto auto' : 'auto auto 0 auto'};
    transition: all ease-in-out ${tokens.mutation.transitionDuration};
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
