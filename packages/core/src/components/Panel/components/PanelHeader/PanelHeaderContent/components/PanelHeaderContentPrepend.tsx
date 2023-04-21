import * as React from 'react';

import { IconButtonCollapse } from '../../../../../IconButton';
import { StyledPanelHeaderContentPrepend } from './StyledPanelHeaderContentPrepend';
import { PanelHeaderSize } from '../../declarations';
import { ContainerEventAttrProps } from '../../../../../../declarations';

export interface PanelHeaderContentPrependProps {
  collapseSettings?: {
    expanded?: boolean;
    onClick?: ContainerEventAttrProps<any>['onClick'];
    tooltip?: string;
  };
  prependContent?: React.ReactElement;
  size?: PanelHeaderSize;
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
