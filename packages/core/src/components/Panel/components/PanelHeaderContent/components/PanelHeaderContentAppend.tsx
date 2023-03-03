import * as React from 'react';
import * as _ from 'lodash';

import { IconButton, IconButtonClose, Button, Box } from '../../../../';
import {
  PanelActions,
  PanelCloseSettings,
  PanelSize,
} from '../../../declarations';
// TODO ad the component when it's ready
//const DropDownMenu = require('../../../../../react/molecules/DropDownMenu');
import { StyledPanelHeaderContentAppend } from '../StyledPanelHeaderContent';

export interface PanelHeaderContentAppendProps {
  actions?: PanelActions;
  appendContent?: React.ReactElement;
  closeSettings: PanelCloseSettings;
  size?: PanelSize;
}

export const PanelHeaderContentAppend: React.FC<
  PanelHeaderContentAppendProps
> = ({ actions, appendContent, closeSettings, size }) => {
  const filteredActions: PanelActions = React.useMemo(
    () => actions && actions.filter((action) => !_.isEmpty(action)),
    [actions]
  );

  if (appendContent)
    return (
      <StyledPanelHeaderContentAppend size={size}>
        {appendContent}
      </StyledPanelHeaderContentAppend>
    );

  if (closeSettings?.onClick)
    return (
      <StyledPanelHeaderContentAppend size={size}>
        <Box cssTranslate={closeSettings?.cssTranslate}>
          <IconButtonClose
            onClick={closeSettings?.onClick}
            size={size}
            title={closeSettings?.tooltip}
          />
        </Box>
      </StyledPanelHeaderContentAppend>
    );

  const renderAction = (action, idx) => {
    const getActionCmp = (close) =>
      action.children ? (
        <Button {...action} key={idx} onClick={action.onClick || close}>
          {action.children}
        </Button>
      ) : (
        <IconButton {...action} key={idx} size={action.size || size} />
      );

    return !action.items
      ? getActionCmp(undefined)
      : {
          /* TODO add this component when it's ready */
          /* <DropDownMenu items={action.items} key={idx} trigger={getActionCmp} />*/
        };
  };

  return (
    filteredActions && (
      <StyledPanelHeaderContentAppend size={size}>
        <>{filteredActions.map(renderAction)}</>
      </StyledPanelHeaderContentAppend>
    )
  );
};
