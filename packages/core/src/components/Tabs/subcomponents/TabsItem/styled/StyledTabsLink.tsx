import * as React from 'react';
import styled, { css } from 'styled-components';

import { Link } from '../../../../Link';

import { utils } from '../../../../../styled/functions';
import { typoMixin } from '../../../../../styled';
import { TabsItemSize, TabsItemState } from '../../../declarations';
import { linkStateMap } from '../../../utils';

export interface StyledTabsLinkProps {
  size?: TabsItemSize;
  state?: TabsItemState;
}

// TODO: props should be use StyledBoxProps
export const StyledTabsLink = styled(({ state, ...props }) => {
  return <Link {...props} state={linkStateMap[state]} />;
})<StyledTabsLinkProps>`
  ${utils.transitionDefault}
  ${({ theme, size, state }) => {
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
  }}
`;
