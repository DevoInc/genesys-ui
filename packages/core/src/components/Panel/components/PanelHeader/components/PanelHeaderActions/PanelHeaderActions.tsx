import * as React from 'react';

import { PANEL_ACTIONS_CLASS_NAME_BASE } from '../../../../constants';
import {
  TPanelActions,
  IPanelBaseAttrs,
  IPanelContainerAttrs,
} from '../../../../declarations';
import { ButtonGroup } from '../../../../../ButtonGroup';

export interface PanelHeaderActionsProps
  extends IPanelBaseAttrs,
    Pick<IPanelContainerAttrs, 'size' | 'actions'> {
  actions: TPanelActions;
}

export const PanelHeaderActions: React.FC<PanelHeaderActionsProps> = ({
  actions,
  as,
  className,
  size = 'md',
  style,
}) => {
  const filteredActions: TPanelActions = React.useMemo(
    () => (actions ? actions.filter((action) => !!action) : []),
    [actions],
  );
  const classNameBase = PANEL_ACTIONS_CLASS_NAME_BASE;
  const classNames = [
    `${classNameBase} `,
    size ? `${classNameBase}--${size} ` : '',
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <ButtonGroup
      as={as}
      className={classNames}
      alignItems="flex-start"
      alignSelf="stretch"
      style={style}
      flex="0 0 auto"
      marginLeft="auto"
    >
      {filteredActions?.map((action) => action)}
    </ButtonGroup>
  );
};
