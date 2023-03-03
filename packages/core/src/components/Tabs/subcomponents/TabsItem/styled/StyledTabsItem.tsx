import * as React from 'react';
import styled, { css } from 'styled-components';

import { StyledBox } from '../../../../Box/StyledBox';
import { TabsItemSize } from '../../../declarations';

export interface StyledTabsItemProps {
  /** Sizes options for icon and text */
  size?: TabsItemSize;
  /** Distribute the whole container with between tabs */
  wide?: boolean;
}

// TODO: props should be use StyledBoxProps
export const StyledTabsItem = styled((props) => (
  <StyledBox {...props} as="li" role="tab" />
))<StyledTabsItemProps>`
  ${({ size, theme, wide }) => {
    const tokens = theme.tokens.cmp.tabs;
    const { container } = tokens;
    const { content } = tokens;

    return css`
      display: inline-flex;
      ${wide &&
      css`
        flex: 1;
        display: flex;
      `};
      align-items: ${size === 'sm' ? 'flex-end' : 'center'};
      margin: 0 ${content.space.padding};
      height: ${container.size.height[size]};
    `;
  }}
`;
