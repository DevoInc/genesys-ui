import * as React from 'react';

import { PanelCollapseSettings, PanelSize } from '../../../declarations';

import { IconButtonCollapse } from '../../../../IconButton';

import { StyledPanelHeaderContentPrepend } from '../StyledPanelHeaderContent';

export interface PanelHeaderContentPrependProps {
  collapseSettings?: PanelCollapseSettings;
  prependContent?: React.ReactElement;
  size?: PanelSize;
}

export const PanelHeaderContentPrepend: React.FC<
  PanelHeaderContentPrependProps
> = ({ collapseSettings, prependContent, size }) => {
  if (prependContent)
    return (
      <StyledPanelHeaderContentPrepend size={size}>
        {prependContent}
      </StyledPanelHeaderContentPrepend>
    );

  return (
    <StyledPanelHeaderContentPrepend size={size}>
      <IconButtonCollapse
        onClick={collapseSettings?.onClick}
        size={size}
        state={collapseSettings?.expanded ? 'expanded' : 'enabled'}
        title={collapseSettings?.tooltip}
      />
    </StyledPanelHeaderContentPrepend>
  );
};
