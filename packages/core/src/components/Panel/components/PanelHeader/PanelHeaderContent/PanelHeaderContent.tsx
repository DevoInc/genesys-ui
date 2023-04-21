import * as React from 'react';

import {
  PanelHeaderContentBody,
  PanelHeaderContentBodyProps,
} from './components';

import {
  StyledPanelHeaderContent,
  StyledPanelHeaderContentBottom,
  StyledPanelHeaderContentMiddle,
  StyledPanelHeaderContentTop,
} from './StyledPanelHeaderContent';
import { PanelHeaderSize } from '../declarations';

export interface PanelHeaderContentProps extends PanelHeaderContentBodyProps {
  as?: string | React.ComponentType<any>;
  /** Content to add at the end of the header*/
  bottomContent?: React.ReactElement;
  children?: React.ReactElement;
  /** Content to add at the begining of the header */
  topContent?: React.ReactElement;
  /** Size for the header */
  size?: PanelHeaderSize;
}

export const PanelHeaderContent: React.FC<PanelHeaderContentProps> = ({
  actions,
  appendContent,
  as,
  bottomContent,
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
  topContent,
}) => (
  <StyledPanelHeaderContent
    as={as}
    bottomContent={bottomContent}
    size={size}
    subtitle={subtitle}
    topContent={topContent}
  >
    {!(topContent || bottomContent) ? (
      <PanelHeaderContentBody
        actions={actions}
        appendContent={appendContent}
        closeSettings={closeSettings}
        collapseSettings={collapseSettings}
        helpTooltip={helpTooltip}
        helpUrl={helpUrl}
        icon={icon}
        legend={legend}
        prependContent={prependContent}
        size={size}
        subtitle={subtitle}
        title={title}
      >
        {children}
      </PanelHeaderContentBody>
    ) : (
      <>
        {topContent && (
          <StyledPanelHeaderContentTop>
            {topContent}
          </StyledPanelHeaderContentTop>
        )}
        <StyledPanelHeaderContentMiddle size={size}>
          <PanelHeaderContentBody
            actions={actions}
            appendContent={appendContent}
            closeSettings={closeSettings}
            collapseSettings={collapseSettings}
            helpTooltip={helpTooltip}
            helpUrl={helpUrl}
            icon={icon}
            legend={legend}
            prependContent={prependContent}
            size={size}
            subtitle={subtitle}
            title={title}
          >
            {children}
          </PanelHeaderContentBody>
        </StyledPanelHeaderContentMiddle>
        {bottomContent && (
          <StyledPanelHeaderContentBottom>
            {bottomContent}
          </StyledPanelHeaderContentBottom>
        )}
      </>
    )}
  </StyledPanelHeaderContent>
);
