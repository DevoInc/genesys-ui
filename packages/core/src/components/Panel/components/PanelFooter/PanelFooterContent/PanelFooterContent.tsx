import * as React from 'react';

import {
  PanelFooterContentBody,
  PanelFooterContentBodyProps,
} from './components';

import {
  StyledPanelFooterContent,
  StyledPanelFooterContentBottom,
  StyledPanelFooterContentMiddle,
  StyledPanelFooterContentTop,
} from './StyledPanelFooterContent';

export interface PanelFooterContentProps extends PanelFooterContentBodyProps {
  as?: string | React.ComponentType<any>;
  /** Content to show at the bottom of the footer */
  bottomContent?: React.ReactNode;
  /** Content of the footer */
  children?: React.ReactNode;
  /** Content to show at the top of the footer */
  topContent?: React.ReactNode;
}

export const PanelFooterContent: React.FC<PanelFooterContentProps> = ({
  appendContent,
  as,
  actions,
  bottomContent,
  children,
  helpUrl,
  helpTooltip = 'Go to Docs to get help',
  prependContent,
  size = 'md',
  topContent,
}) => {
  const hasTopBottomContent = topContent || bottomContent;

  return (
    <StyledPanelFooterContent
      as={as}
      hasBottomContent={!!bottomContent}
      hasTopContent={!!topContent}
      size={size}
    >
      {!hasTopBottomContent ? (
        <PanelFooterContentBody
          actions={actions}
          appendContent={appendContent}
          helpTooltip={helpTooltip}
          helpUrl={helpUrl}
          prependContent={prependContent}
          size={size}
        >
          {children}
        </PanelFooterContentBody>
      ) : (
        <>
          {topContent && (
            <StyledPanelFooterContentTop>
              {topContent}
            </StyledPanelFooterContentTop>
          )}
          <StyledPanelFooterContentMiddle size={size}>
            <PanelFooterContentBody
              actions={actions}
              appendContent={appendContent}
              helpTooltip={helpTooltip}
              helpUrl={helpUrl}
              prependContent={prependContent}
              size={size}
            >
              {children}
            </PanelFooterContentBody>
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
