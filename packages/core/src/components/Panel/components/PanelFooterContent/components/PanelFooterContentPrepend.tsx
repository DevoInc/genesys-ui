import * as React from 'react';

import { IconButtonGoToDocs } from '../../../../';
import {
  PanelHelpTooltip,
  PanelHelpUrl,
  PanelSize,
} from '../../../declarations';
import { StyledPanelFooterContentPrepend } from '../StyledPanelFooterContent';

export interface PanelFooterContentPrependProps {
  goToDocsTooltip?: PanelHelpTooltip;
  helpUrl?: PanelHelpUrl;
  prependContent?: React.ReactElement;
  size?: PanelSize;
}

export const PanelFooterContentPrepend: React.FC<
  PanelFooterContentPrependProps
> = ({
  goToDocsTooltip = 'Go to Docs to get help',
  helpUrl,
  prependContent,
  size,
}) => {
  if (prependContent)
    return (
      <StyledPanelFooterContentPrepend size={size}>
        {prependContent}
      </StyledPanelFooterContentPrepend>
    );

  return (
    <StyledPanelFooterContentPrepend size={size}>
      <IconButtonGoToDocs href={helpUrl} size={size} title={goToDocsTooltip} />
    </StyledPanelFooterContentPrepend>
  );
};
