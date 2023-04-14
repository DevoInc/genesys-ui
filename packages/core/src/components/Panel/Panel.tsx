import * as React from 'react';

import { Typography } from '../';
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

import {
  PanelContainer,
  PanelHeader,
  PanelBody,
  PanelFooter,
} from './subcomponents';

import { StyledPanelProps } from './StyledPanel';
import { PanelHeaderContent, PanelFooterContent } from './components';

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

const InternalPanel: React.FC<PanelProps> = ({
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

  return (
    <PanelContainer
      $display={display}
      as={as}
      borderSettings={borderSettings}
      className={className}
      colorScheme={colorScheme}
      elevation={elevation}
      forwardedAs={forwardedAs}
      id={id}
      position={position}
      visibility={visibility}
      widthScheme={widthScheme}
      heightScheme={heightScheme}
    >
      <PanelHeader hasBoxShadow={hasScroll} bordered={headerSettings?.bordered}>
        <PanelHeaderContent
          actions={headerSettings?.actions}
          appendContent={headerSettings?.renderContent?.append}
          bottomContent={headerSettings?.renderContent?.bottom}
          closeSettings={closeSettings}
          collapseSettings={collapseSettings}
          hasScroll={hasScroll}
          helpUrl={!footerSettings ? helpUrl : ''}
          helpTooltip={!footerSettings ? helpTooltip : ''}
          icon={icon}
          legend={legend}
          prependContent={headerSettings?.renderContent?.prepend}
          size={size}
          subtitle={subtitle}
          title={title}
          topContent={headerSettings?.renderContent?.top}
        >
          {headerSettings?.renderContent?.middle}
        </PanelHeaderContent>
      </PanelHeader>
      <PanelBody
        bodySettings={contentSettings}
        hasScroll={hasScroll}
        panelBodyRef={panelContentRef}
        size={size}
      >
        {children}
      </PanelBody>
      <PanelFooter
        hasBoxShadow={hasScroll}
        hasBackground={footerSettings?.hasBackground}
        bordered={footerSettings?.bordered}
      >
        <PanelFooterContent
          actions={footerSettings?.actions}
          appendContent={footerSettings?.renderContent?.append}
          bottomContent={footerSettings?.renderContent?.bottom}
          hasScroll={hasScroll}
          helpUrl={helpUrl}
          helpTooltip={helpTooltip}
          prependContent={footerSettings?.renderContent?.prepend}
          size={size}
          topContent={footerSettings?.renderContent?.top}
        >
          {footerSettings?.renderContent?.middle}
        </PanelFooterContent>
      </PanelFooter>
    </PanelContainer>
  );
};

export const Panel = InternalPanel as typeof InternalPanel & {
  Container: typeof PanelContainer;
  Header: typeof PanelHeader;
  Body: typeof PanelBody;
  Footer: typeof PanelFooter;
};

Panel.Container = PanelContainer;
Panel.Header = PanelHeader;
Panel.Body = PanelBody;
Panel.Footer = PanelFooter;
