import * as React from 'react';

import {
  IconButtonCollapse,
  IconButtonCollapseProps,
} from '../../../../../IconButton';
import { Flex } from '../../../../../Flex';
import {
  IPanelBaseAttrs,
  IPanelContainerAttrs,
} from '../../../../declarations';
import { PANEL_COLLAPSE_CLASS_NAME_BASE } from '../../../../constants';

export interface PanelHeaderCollapseButtonProps
  extends Omit<IconButtonCollapseProps, 'size'>,
    Pick<IPanelBaseAttrs, 'className'>,
    Pick<IPanelContainerAttrs, 'size'> {}

export const PanelHeaderCollapseButton: React.FC<
  PanelHeaderCollapseButtonProps
> = ({
  className,
  size,
  state = 'enabled',
  style,
  ...restIconButtonCollapseProps
}) => {
  const classNames = [
    `${PANEL_COLLAPSE_CLASS_NAME_BASE} `,
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Flex
      alignItems="flex-start"
      alignSelf="stretch"
      className={classNames}
      flex="0 0 auto"
      style={style}
    >
      <IconButtonCollapse {...restIconButtonCollapseProps} state={state} />
    </Flex>
  );
};
