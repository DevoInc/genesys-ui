import * as React from 'react';
import * as _ from 'lodash';

import {
  IconButton,
  IconButtonClose,
  Button,
  Box,
  IconButtonCloseProps,
} from '../../../../..';

// TODO ad the component when it's ready
//const DropDownMenu = require('../../../../../react/molecules/DropDownMenu');
import { StyledPanelHeaderContentAppend } from './StyledPanelHeaderContentAppend';
import { PanelHeaderActions, PanelHeaderSize } from '../../declarations';

export interface PanelHeaderContentAppendProps {
  actions?: PanelHeaderActions;
  appendContent?: React.ReactNode;
  closeSettings?: {
    cssTranslate?: string;
    onClick?: IconButtonCloseProps['onClick'];
    tooltip?: IconButtonCloseProps['title'];
  };
  size: PanelHeaderSize;
}

export const PanelHeaderContentAppend: React.FC<
  PanelHeaderContentAppendProps
> = ({ actions, appendContent, closeSettings, size }) => {
  const filteredActions: PanelHeaderActions = React.useMemo(
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
