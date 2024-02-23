import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import {
  IconButtonCollapse,
  IconButtonCollapseProps,
} from '../../../../IconButton';

import { Flex } from '../../../../Flex';
import { PanelContainerAttrs } from '../../../declarations';

export interface PanelHeaderCollapseButtonProps
  extends Omit<IconButtonCollapseProps, 'size'>,
    Pick<PanelContainerAttrs, 'size'> {}

export const PanelHeaderCollapseButton: React.FC<
  PanelHeaderCollapseButtonProps
> = ({ size, state = 'enabled', styles, ...restIconButtonCollapseProps }) => {
  const theme = useTheme();
  const baseStyles = css`
    margin-right: ${theme.cmp.panel.headerPrepend.space.marginRight[size]};
  `;
  return (
    <Flex
      alignItems="flex-start"
      alignSelf="stretch"
      styles={concat(baseStyles, styles)}
      flex="0 0 auto"
    >
      <IconButtonCollapse {...restIconButtonCollapseProps} state={state} />
    </Flex>
  );
};
