import { css, DefaultTheme } from 'styled-components';

import { CONTENT_SWITCHER_ITEM_SIZE_MAP } from '../../constants';
import { BaseSize } from '../../../../declarations';

export interface contentSwitcherContainerMixinProps {
  size?: BaseSize;
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
  const aliasTokens = theme.alias;
  const buttonTokens = theme.cmp.button;
  const baseSpace = aliasTokens.space.cmp.xs;
  const height = css`calc(${
    buttonTokens.size.height[CONTENT_SWITCHER_ITEM_SIZE_MAP[size]]
  } + ${baseSpace})`;
  const horPadding = css`calc(${baseSpace} / 2)`;

  return css`
    gap: ${aliasTokens.space.cmp.xxs};
    border-radius: ${buttonTokens.shape.borderRadius.medium};
    height: ${height};
    padding: 0 ${horPadding};
    background-color: ${aliasTokens.color.background.track.base};
  `;
};
