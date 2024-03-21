import { css, DefaultTheme } from 'styled-components';

import { TTabsColorScheme } from '../../declarations';

export interface TabsMarkMixinProps {
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
export const tabsMarkMixin = ({ colorScheme, theme }: TabsMarkMixinProps) => {
  const tokens = theme.cmp.tabs.mark;
  const transitionDuration =
    theme.alias.mutation.transitionDuration.translation.hor.sm;
  return css`
    position: absolute;
    bottom: 0;
    transition: all ease-in-out ${transitionDuration};
    padding: 0 ${tokens.space.padding};

    ::before {
      content: '';
      display: block;
      height: ${tokens.size.height};
      background: ${tokens.color.fill[colorScheme]};
      border-radius: ${tokens.shape.borderRadius};
    }
  `;
};
