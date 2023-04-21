import * as React from 'react';

import {
  PanelHeaderContentAppend,
  PanelHeaderContentAppendProps,
  PanelHeaderContentBodyHeader,
  PanelHeaderContentBodyHeaderProps,
  PanelHeaderContentPrepend,
  PanelHeaderContentPrependProps,
} from '.';
import { PanelHeaderSize } from '../../declarations';

export interface PanelHeaderContentBodyProps
  extends Omit<PanelHeaderContentPrependProps, 'size'>,
    Omit<PanelHeaderContentBodyHeaderProps, 'size'>,
    Omit<PanelHeaderContentAppendProps, 'size'> {
  /** Size for components */
  size?: PanelHeaderSize;
}

export const PanelHeaderContentBody: React.FC<PanelHeaderContentBodyProps> = ({
  actions,
  appendContent,
  children,
  closeSettings,
  collapseSettings,
  helpTooltip,
  helpUrl,
  icon,
  legend,
  prependContent,
  size = 'md',
  subtitle,
  title,
}) => (
  <>
    {(collapseSettings || prependContent) && (
      <PanelHeaderContentPrepend
        collapseSettings={collapseSettings}
        prependContent={prependContent}
        size={size}
      />
    )}
    {(children || icon || subtitle || title) && (
      <PanelHeaderContentBodyHeader
        helpTooltip={helpTooltip}
        helpUrl={helpUrl}
        icon={icon}
        legend={legend}
        size={size}
        subtitle={subtitle}
        title={title}
      >
        {children}
      </PanelHeaderContentBodyHeader>
    )}
    {(actions || appendContent || closeSettings) && (
      <PanelHeaderContentAppend
        actions={actions}
        appendContent={appendContent}
        closeSettings={closeSettings}
        size={size}
      />
    )}
  </>
);
