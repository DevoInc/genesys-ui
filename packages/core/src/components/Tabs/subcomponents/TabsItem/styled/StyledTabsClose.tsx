import * as React from 'react';
import styled, { css } from 'styled-components';

import { IconButtonRemove } from '../../../../IconButton';

import { TabsItemState } from '../../../declarations';
import { buttonStateMap } from '../../../utils';
export interface StyledTabsCloseProps {
  /** Possible states */
  state?: TabsItemState;
  /** Tooltip for icon accessibility */
  tooltip?: string;
}

export const StyledTabsClose = styled(({ state, tooltip, ...props }) => {
  return (
    <IconButtonRemove
      {...props}
      title={tooltip}
      size={'xs'}
      state={buttonStateMap[state]}
    />
  );
})<StyledTabsCloseProps>`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.tokens.cmp.tabs.item.space.margin.iconToText};
    `;
  }}
`;
