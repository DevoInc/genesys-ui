import * as React from 'react';

import {
  PanelActions,
  PanelHasScroll,
  PanelHelpTooltip,
  PanelHelpUrl,
  PanelSize,
} from '../../declarations';

import {
  PanelFooterContentAppend,
  PanelFooterContentBody,
  PanelFooterContentPrepend,
} from './components';

import {
  StyledPanelFooterContent,
  StyledPanelFooterContentBottom,
  StyledPanelFooterContentMiddle,
  StyledPanelFooterContentTop,
} from './StyledPanelFooterContent';

export interface PanelFooterContentProps {
  actions?: PanelActions;
  appendContent?: React.ReactElement;
  as?: string | React.ComponentType<any>;
  bottomContent?: React.ReactElement;
  children?: React.ReactElement;
  hasScroll: PanelHasScroll;
  helpTooltip?: PanelHelpTooltip;
  helpUrl?: PanelHelpUrl;
  prependContent?: React.ReactElement;
  size?: PanelSize;
  topContent?: React.ReactElement;
}

export const PanelFooterContent: React.FC<PanelFooterContentProps> = ({
  appendContent,
  as,
  actions,
  bottomContent,
  children,
  hasScroll,
  helpUrl,
  helpTooltip,
  prependContent,
  size = 'md',
  topContent,
}) => {
  const hasTopBottomContent = topContent || bottomContent;

  const renderMiddleContent = () => {
    return (
      <>
        {(helpUrl || prependContent) && (
          <PanelFooterContentPrepend
            helpUrl={helpUrl}
            goToDocsTooltip={helpTooltip}
            prependContent={prependContent}
            size={size}
          />
        )}
        {children && (
          <PanelFooterContentBody size={size}>
            {children}
          </PanelFooterContentBody>
        )}
        {(actions || appendContent) && (
          <PanelFooterContentAppend
            actions={actions}
            appendContent={appendContent}
            size={size}
          />
        )}
      </>
    );
  };

  return (
    <StyledPanelFooterContent
      as={as}
      bottomContent={bottomContent}
      hasScroll={hasScroll}
      size={size}
      topContent={topContent}
    >
      {!hasTopBottomContent ? (
        renderMiddleContent()
      ) : (
        <>
          {topContent && (
            <StyledPanelFooterContentTop>
              {topContent}
            </StyledPanelFooterContentTop>
          )}
          <StyledPanelFooterContentMiddle size={size}>
            {renderMiddleContent()}
          </StyledPanelFooterContentMiddle>
          {bottomContent && (
            <StyledPanelFooterContentBottom>
              {bottomContent}
            </StyledPanelFooterContentBottom>
          )}
        </>
      )}
    </StyledPanelFooterContent>
  );
};
