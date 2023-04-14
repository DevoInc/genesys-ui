import * as React from 'react';

import { Typography } from '..';
import { GlobalStatus } from '../../declarations';
import {
  PanelCloseSettings,
  PanelCollapseSettings,
  PanelContentSettings,
  PanelFooterSettings,
  PanelHeaderSettings,
  PanelHelpTooltip,
  PanelHelpUrl,
  PanelSize,
} from './declarations';
import { useContainerDimensions } from '../../hooks';
import { PanelHeaderContent, PanelFooterContent } from './components';
import {
  StyledPanel,
  StyledPanelHeader,
  StyledPanelContent,
  StyledPanelFooter,
  StyledPanelProps,
} from './StyledPanel';

export interface PanelProps extends StyledPanelProps {
  as?: string | React.ComponentType<any>;
  children?: React.ReactNode;
  className?: string;
  closeSettings?: PanelCloseSettings;
  collapseSettings?: PanelCollapseSettings;
  contentSettings?: PanelContentSettings;
  display?: React.CSSProperties['display'];
  footerSettings?: PanelFooterSettings;
  forwardedAs?: string | React.ComponentType<any>;
  headerSettings?: PanelHeaderSettings;
  helpTooltip?: PanelHelpTooltip;
  helpUrl?: PanelHelpUrl;
  icon?: string;
  id?: string;
  legend?: React.ReactNode;
  size?: PanelSize;
  status?: GlobalStatus;
  subtitle?: string;
  title?: React.ReactNode;
  visibility?: React.CSSProperties['visibility'];
}

export const Panel: React.FC<PanelProps> = ({
  as,
  borderSettings,
  colorScheme,
  children,
  className,
  closeSettings,
  collapseSettings,
  contentSettings,
  display,
  elevation = 'raised',
  footerSettings,
  forwardedAs,
  headerSettings,
  heightScheme,
  helpUrl,
  helpTooltip,
  icon,
  id,
  legend,
  position,
  size = 'md',
  status = 'base',
  subtitle,
  title,
  visibility,
  widthScheme,
}) => {
  const [hasScroll, setHasScroll] = React.useState(false);
  const { setRef: panelContentRef, size: measures } = useContainerDimensions();
  const updateHasScroll = () => {
    if (measures) {
      const hasNewScroll = measures.scrollHeight > measures.clientHeight;

      if (hasNewScroll !== hasScroll) setHasScroll(hasNewScroll);
    }
  };

  React.useEffect(updateHasScroll, [measures, hasScroll, setHasScroll]);

  const renderPanelHeader = () => {
    const renderHeaderContent = headerSettings?.renderContent;
    const hasHeader =
      icon ||
      title ||
      subtitle ||
      headerSettings?.actions ||
      renderHeaderContent;
    if (hasHeader) {
      if (React.isValidElement(renderHeaderContent)) {
        return (
          <StyledPanelHeader
            hasScroll={hasScroll}
            headerSettings={headerSettings}
          >
            {renderHeaderContent}
          </StyledPanelHeader>
        );
      } else {
        return (
          <StyledPanelHeader
            hasScroll={hasScroll}
            headerSettings={headerSettings}
          >
            <PanelHeaderContent
              actions={headerSettings?.actions}
              appendContent={renderHeaderContent?.append}
              bottomContent={renderHeaderContent?.bottom}
              closeSettings={closeSettings}
              collapseSettings={collapseSettings}
              hasScroll={hasScroll}
              helpUrl={!footerSettings ? helpUrl : ''}
              helpTooltip={!footerSettings ? helpTooltip : ''}
              icon={icon}
              legend={legend}
              prependContent={renderHeaderContent?.prepend}
              size={size}
              subtitle={subtitle}
              title={title}
              topContent={renderHeaderContent?.top}
            >
              {renderHeaderContent?.middle}
            </PanelHeaderContent>
          </StyledPanelHeader>
        );
      }
    } else {
      return null;
    }
  };

  const renderPanelFooter = () => {
    const renderFooterContent = footerSettings?.renderContent;
    const hasFooter = footerSettings?.actions || renderFooterContent;
    if (hasFooter) {
      if (React.isValidElement(renderFooterContent)) {
        return (
          <StyledPanelFooter
            hasScroll={hasScroll}
            footerSettings={footerSettings}
          >
            {renderFooterContent}
          </StyledPanelFooter>
        );
      } else {
        return (
          <StyledPanelFooter
            hasScroll={hasScroll}
            footerSettings={footerSettings}
          >
            <PanelFooterContent
              actions={footerSettings?.actions}
              appendContent={renderFooterContent?.append}
              bottomContent={renderFooterContent?.bottom}
              hasScroll={hasScroll}
              helpUrl={helpUrl}
              helpTooltip={helpTooltip}
              prependContent={renderFooterContent?.prepend}
              size={size}
              topContent={renderFooterContent?.top}
            >
              {renderFooterContent?.middle}
            </PanelFooterContent>
          </StyledPanelFooter>
        );
      }
    } else {
      return null;
    }
  };

  return (
    <StyledPanel
      as={as}
      borderSettings={borderSettings}
      colorScheme={colorScheme}
      className={className}
      contentSettings={contentSettings}
      $display={display}
      elevation={elevation}
      forwardedAs={forwardedAs}
      hasScroll={hasScroll}
      headerSettings={headerSettings}
      $height={heightScheme?.height}
      id={id}
      maxHeight={heightScheme?.maxHeight}
      maxWidth={widthScheme?.maxWidth}
      minHeight={heightScheme?.minHeight}
      minWidth={widthScheme?.minWidth}
      position={position}
      size={size}
      status={status}
      visibility={visibility}
      $width={widthScheme?.width}
    >
      {renderPanelHeader()}
      <StyledPanelContent
        contentSettings={contentSettings}
        hasScroll={hasScroll}
        ref={panelContentRef}
        size={size}
      >
        {typeof children === 'string' ? (
          <Typography.Paragraph size={size}>{children}</Typography.Paragraph>
        ) : (
          children
        )}
      </StyledPanelContent>
      {renderPanelFooter()}
    </StyledPanel>
  );
};
