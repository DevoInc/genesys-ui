import { css, DefaultTheme } from 'styled-components';

import type { TBaseSize } from '../../declarations';

export interface contentSwitcherContainerMixinProps {
  size?: TBaseSize;
  theme: DefaultTheme;
}

/**
 * Get the custom ContentSwitcherContainer styles.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const contentSwitcherContainerMixin = ({
  size = 'md',
  theme,
}: contentSwitcherContainerMixinProps) => {
  const cmpTokens = theme.cmp.contentSwitcher;
  return css`
    gap: ${cmpTokens.space.gap};
    border-radius: ${cmpTokens.shape.borderRadius};
    height: ${cmpTokens.size.height[size]};
    padding: 0 ${cmpTokens.space.padding};
    background-color: ${cmpTokens.color.background.base};
  `;
};
