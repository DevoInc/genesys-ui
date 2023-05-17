import * as React from 'react';
import styled, { css } from 'styled-components';

import { IconButtonRemove } from '../../../../IconButton';

import { TabsItemState } from '../../../declarations';
import { buttonStateMap } from '../../../utils';
import { GlobalAttrProps } from '../../../../../declarations';
export interface StyledTabsCloseProps extends Pick<GlobalAttrProps, 'tooltip'> {
  /** Possible states */
  state?: TabsItemState;
}

export const StyledTabsClose = styled(({ state, ...props }) => {
  return (
    <IconButtonRemove {...props} size={'xs'} state={buttonStateMap[state]} />
  );
})<StyledTabsCloseProps>`
  ${({ theme }) => {
    return css`
      margin-left: ${theme.cmp.tabs.item.space.margin.iconToText};
    `;
  }}
`;
