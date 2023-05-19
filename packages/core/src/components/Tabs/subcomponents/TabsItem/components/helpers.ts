import * as React from 'react';
import { css, DefaultTheme } from 'styled-components';

import { TabsItemSize, TabsItemState } from '../../../declarations';
import { typoMixin } from '../../../../../styled';

export interface TabsLinkMixinProps {
  size?: TabsItemSize;
  state?: TabsItemState;
  theme: DefaultTheme;
}

/**
 * Get the custom link styles when it's used as a Tab inner.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.state The state of the component: enabled, disabled... etc.
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const tabsLinkMixin = ({
  size = 'md',
  state = 'enabled',
  theme,
}: TabsLinkMixinProps) => {
  const tokens = theme.cmp.tabs.item;
  const borderRadius = tokens.shape.borderRadius;
  const fontSize = typoMixin({ theme, size });
  return css`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: ${tokens.size.height[size]};
    padding: 0 ${tokens.space.padding};
    border-radius: ${size === 'sm'
      ? `${borderRadius} ${borderRadius} 0 0`
      : `${borderRadius}`};
    white-space: nowrap;
    color: ${tokens.color.text[state]};
    ${fontSize}

    &:hover,
    &:focus,
    &:active {
      color: ${tokens.color.text[state]};
      text-decoration: none;
    }

    &:hover {
      background-color: ${state !== 'disabled' &&
      tokens.color.background.hover};
    }
  `;
};
