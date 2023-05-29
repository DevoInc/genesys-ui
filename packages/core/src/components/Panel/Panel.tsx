import * as React from 'react';

import { useDetectScroll } from '../../hooks';

import {
  BodySettingsProps,
  FooterSettingsProps,
  HeaderSettingsProps,
  PanelSize,
} from './declarations';
import { StyledOverloadCssProps } from '../../declarations';

import {
  PanelContainer,
  PanelBody,
  PanelContainerProps,
  PanelFooter,
  PanelHeader,
  PanelFooterProps,
  PanelHeaderProps,
} from './components';

export interface PanelProps
  extends StyledOverloadCssProps,
    Omit<PanelContainerProps, 'children'>,
    Pick<
      PanelHeaderProps,
      | 'closeSettings'
      | 'collapseSettings'
      | 'icon'
      | 'legend'
      | 'subtitle'
      | 'title'
      | 'titleTooltip'
    >,
    Pick<PanelFooterProps, 'helpTooltip' | 'helpUrl'> {
  children?: React.ReactNode;
  className?: string;
  bodySettings?: BodySettingsProps;
  footerSettings?: FooterSettingsProps;
  headerSettings?: HeaderSettingsProps;
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
  // PanelHeaderProps
  headerSettings,
  closeSettings,
  collapseSettings,
  subtitle,
  styles,
  title,
  titleTooltip,
  legend,
  icon,
  // PanelBodyProps
  bodySettings,
  // PanelFooterProps
  footerSettings,
  helpUrl,
  helpTooltip,
  // commons
  size = 'md',
  children,
  ...boxProps
}) => {
  const { hasScroll, targetElRef } = useDetectScroll();
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
      <PanelHeader
        hasBoxShadow={headerSettings?.hasBoxShadow ?? hasScroll}
        actions={headerSettings?.actions}
        bordered={headerSettings?.bordered}
        closeSettings={closeSettings}
        collapseSettings={collapseSettings}
        helpUrl={!footerSettings ? helpUrl : undefined}
        helpTooltip={!footerSettings ? helpTooltip : undefined}
        icon={icon}
        legend={legend}
        removeSpace={headerSettings?.removeSpace}
        size={size}
        subtitle={subtitle}
        title={title}
        titleTooltip={titleTooltip}
      >
        {headerSettings?.renderContent}
      </PanelHeader>
      <PanelBody
        hasScroll={hasScroll}
        panelBodyRef={targetElRef}
        removeSpace={bodySettings.removeSpace}
        size={size}
      >
        {children}
      </PanelBody>
      <PanelFooter
        actions={footerSettings?.actions}
        bordered={footerSettings?.bordered}
        hasBoxShadow={hasScroll}
        hasBackground={footerSettings?.hasBackground}
        helpUrl={helpUrl}
        helpTooltip={helpTooltip}
        removeSpace={footerSettings?.removeSpace}
        size={size}
      >
        {footerSettings?.renderContent}
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
