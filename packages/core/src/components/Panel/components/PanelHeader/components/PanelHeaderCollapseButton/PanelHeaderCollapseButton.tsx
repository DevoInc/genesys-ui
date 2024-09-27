import * as React from 'react';
import { css, useTheme } from 'styled-components';

import {
  IconButtonCollapse,
  IconButtonCollapseProps,
} from '../../../../../IconButton';
import { Flex } from '../../../../../Flex';
import { IPanelContainerAttrs } from '../../../../declarations';
import { mergeStyles } from '../../../../../../helpers';

export interface PanelHeaderCollapseButtonProps
  extends Omit<IconButtonCollapseProps, 'size'>,
    Pick<IPanelContainerAttrs, 'size'> {}

export const PanelHeaderCollapseButton: React.FC<
  PanelHeaderCollapseButtonProps
> = ({ size, state = 'enabled', style, ...restIconButtonCollapseProps }) => {
  const theme = useTheme();
  const baseStyles = css`
    margin-right: ${theme.cmp.panel.headerPrepend.space.marginRight[size]};
  `;
  return (
    <Flex
      alignItems="flex-start"
      alignSelf="stretch"
      style={mergeStyles(baseStyles, style)}
      flex="0 0 auto"
    >
      <IconButtonCollapse {...restIconButtonCollapseProps} state={state} />
    </Flex>
  );
};
