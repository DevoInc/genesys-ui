import * as React from 'react';

import { useDetectScroll } from '../../hooks';

import {
  PanelContainer,
  PanelHeaderContainer,
  PanelBodyContainer,
  PanelFooterContainer,
  PanelFooterContent,
  PanelContainerProps,
  PanelBodyContainerProps,
  PanelHeaderContent,
  PanelHeaderContentProps,
  PanelFooterContentProps,
} from './components';

import { FooterSettings, HeaderSettings, RenderContent } from './declarations';
import { BaseSize } from '../../declarations';

export interface PanelProps
  extends Pick<
      PanelContainerProps,
      | 'as'
      | 'borderSettings'
      | 'colorScheme'
      | 'display'
      | 'elevation'
      | 'forwardedAs'
      | 'heightScheme'
      | 'id'
      | 'position'
      | 'visibility'
      | 'widthScheme'
    >,
    Pick<
      PanelHeaderContentProps,
      | 'closeSettings'
      | 'collapseSettings'
      | 'icon'
      | 'legend'
      | 'subtitle'
      | 'title'
    >,
    Pick<PanelBodyContainerProps, 'bodySettings'>,
    Pick<PanelFooterContentProps, 'helpTooltip' | 'helpUrl'> {
  children: React.ReactNode;
  className: string;
  footerSettings: FooterSettings;
  headerSettings: HeaderSettings;
  size: BaseSize;
}

const InternalPanel: React.FC<PanelProps> = ({
  // PanelContainerProps
  as,
  borderSettings,
  className,
  colorScheme,
  display,
  elevation = 'raised',
  forwardedAs,
  heightScheme,
  id,
  visibility,
  widthScheme,
  position,
  // PanelHeaderContentProps
  headerSettings,
  closeSettings,
  collapseSettings,
  subtitle,
  title,
  legend,
  icon,
  // PanelBodyContainerProps
  bodySettings,
  // PanelFooterContentProps
  footerSettings,
  helpUrl,
  helpTooltip,
  // commons
  size = 'md',
  children,
}) => {
  const { hasScroll, targetElRef } = useDetectScroll();
  const headerRenderContent = headerSettings?.renderContent as RenderContent;
  const footerRenderContent = footerSettings?.renderContent as RenderContent;

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
      <PanelHeaderContainer
        hasBoxShadow={hasScroll}
        bordered={headerSettings?.bordered}
      >
        <PanelHeaderContent
          actions={headerSettings?.actions}
          appendContent={headerRenderContent?.append}
          as={as}
          bottomContent={headerRenderContent?.bottom}
          closeSettings={closeSettings}
          collapseSettings={collapseSettings}
          helpUrl={!footerSettings ? helpUrl : undefined}
          helpTooltip={!footerSettings ? helpTooltip : undefined}
          icon={icon}
          legend={legend}
          prependContent={headerRenderContent?.prepend}
          size={size}
          subtitle={subtitle}
          title={title}
          topContent={headerRenderContent?.top}
        >
          {headerRenderContent?.middle}
        </PanelHeaderContent>
      </PanelHeaderContainer>
      <PanelBodyContainer
        bodySettings={bodySettings}
        hasScroll={hasScroll}
        panelBodyRef={targetElRef}
        size={size}
      >
        {children}
      </PanelBodyContainer>
      <PanelFooterContainer
        hasBoxShadow={hasScroll}
        hasBackground={footerSettings?.hasBackground}
        bordered={footerSettings?.bordered}
      >
        <PanelFooterContent
          actions={footerSettings?.actions}
          appendContent={footerRenderContent?.append}
          bottomContent={footerRenderContent?.bottom}
          helpUrl={helpUrl}
          helpTooltip={helpTooltip}
          prependContent={footerRenderContent?.prepend}
          size={size}
          topContent={footerRenderContent?.top}
        >
          {footerRenderContent?.middle}
        </PanelFooterContent>
      </PanelFooterContainer>
    </PanelContainer>
  );
};

export const Panel = InternalPanel as typeof InternalPanel & {
  Container: typeof PanelContainer;
  Header: typeof PanelHeaderContainer;
  Body: typeof PanelBodyContainer;
  Footer: typeof PanelFooterContainer;
};

Panel.Container = PanelContainer;
Panel.Header = PanelHeaderContainer;
Panel.Body = PanelBodyContainer;
Panel.Footer = PanelFooterContainer;
