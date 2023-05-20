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

import {
  FooterSettings,
  HeaderSettings,
  PanelSize,
  RenderContent,
} from './declarations';
import { StyledOverloadCssProps } from '../../declarations';

export interface PanelProps
  extends StyledOverloadCssProps,
    Omit<PanelContainerProps, 'children'>,
    Pick<
      PanelHeaderContentProps,
      | 'closeSettings'
      | 'collapseSettings'
      | 'icon'
      | 'legend'
      | 'subtitle'
      | 'title'
      | 'titleTooltip'
    >,
    Pick<PanelBodyContainerProps, 'bodySettings'>,
    Pick<PanelFooterContentProps, 'helpTooltip' | 'helpUrl'> {
  children?: React.ReactNode;
  className?: string;
  footerSettings?: FooterSettings;
  headerSettings?: HeaderSettings;
  /** Set size for Panel components */
  size?: PanelSize;
}

const InternalPanel: React.FC<PanelProps> = ({
  // PanelContainerProps
  as,
  bordered,
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
  styles,
  title,
  titleTooltip,
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
  ...boxProps
}) => {
  const { hasScroll, targetElRef } = useDetectScroll();
  const headerRenderContent = headerSettings?.renderContent as RenderContent;
  const footerRenderContent = footerSettings?.renderContent as RenderContent;

  return (
    <PanelContainer
      display={display}
      as={as}
      bordered={bordered}
      className={className}
      colorScheme={colorScheme}
      elevation={elevation}
      forwardedAs={forwardedAs}
      id={id}
      position={position}
      visibility={visibility}
      widthScheme={widthScheme}
      heightScheme={heightScheme}
      styles={styles}
      {...boxProps}
    >
      <PanelHeaderContainer
        hasBoxShadow={hasScroll}
        bordered={headerSettings?.bordered}
      >
        {/** TODO: consider removal when Toast is refactored to not use Panel as styled */}
        {React.isValidElement(headerSettings?.renderContent) ? (
          headerSettings.renderContent
        ) : (
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
            titleTooltip={titleTooltip}
            topContent={headerRenderContent?.top}
          >
            {headerRenderContent?.middle}
          </PanelHeaderContent>
        )}
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
