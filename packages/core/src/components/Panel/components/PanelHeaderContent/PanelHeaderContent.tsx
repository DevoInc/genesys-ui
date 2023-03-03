import * as React from 'react';

import {
  PanelActions,
  PanelCloseSettings,
  PanelCollapseSettings,
  PanelHasScroll,
  PanelHelpTooltip,
  PanelHelpUrl,
  PanelSize,
} from '../../declarations';

import {
  PanelHeaderContentAppend,
  PanelHeaderContentBody,
  PanelHeaderContentPrepend,
} from './components';

import {
  StyledPanelHeaderContent,
  StyledPanelHeaderContentBottom,
  StyledPanelHeaderContentMiddle,
  StyledPanelHeaderContentTop,
} from './StyledPanelHeaderContent';

export interface PanelHeaderContentProps {
  actions?: PanelActions;
  appendContent?: React.ReactElement;
  as?: string | React.ComponentType<any>;
  bottomContent?: React.ReactElement;
  children?: React.ReactElement;
  closeSettings?: PanelCloseSettings;
  collapseSettings?: PanelCollapseSettings;
  hasScroll?: PanelHasScroll;
  helpTooltip?: PanelHelpTooltip;
  helpUrl?: PanelHelpUrl;
  icon?: string;
  legend?: React.ReactNode;
  prependContent?: React.ReactElement;
  size?: PanelSize;
  subtitle?: string;
  title?: React.ReactNode;
  topContent?: React.ReactElement;
}

export const PanelHeaderContent: React.FC<PanelHeaderContentProps> = ({
  actions,
  appendContent,
  as,
  bottomContent,
  children,
  closeSettings,
  collapseSettings,
  hasScroll,
  helpTooltip,
  helpUrl,
  icon,
  legend,
  prependContent,
  size = 'md',
  subtitle,
  title,
  topContent,
}) => {
  const hasTopBottomContent = topContent || bottomContent;
  const renderMiddleContent = () => {
    return (
      <>
        {(collapseSettings || prependContent) && (
          <PanelHeaderContentPrepend
            collapseSettings={collapseSettings}
            prependContent={prependContent}
            size={size}
          />
        )}
        {(children || icon || subtitle || title) && (
          <PanelHeaderContentBody
            helpUrl={helpUrl}
            helpTooltip={helpTooltip}
            icon={icon}
            legend={legend}
            size={size}
            subtitle={subtitle}
            title={title}
          >
            {children}
          </PanelHeaderContentBody>
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
  };

  return (
    <StyledPanelHeaderContent
      as={as}
      bottomContent={bottomContent}
      hasScroll={hasScroll}
      size={size}
      subtitle={subtitle}
      topContent={topContent}
    >
      {!hasTopBottomContent ? (
        renderMiddleContent()
      ) : (
        <>
          {topContent && (
            <StyledPanelHeaderContentTop>
              {topContent}
            </StyledPanelHeaderContentTop>
          )}
          <StyledPanelHeaderContentMiddle size={size}>
            {renderMiddleContent()}
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
};
