import * as React from 'react';

import type {
  IPanelBaseAttrs,
  IPanelHelpAttrs,
  IPanelSpaceAttrs,
} from '../../declarations';
import type {
  IPanelCloseAttrs,
  IPanelCollapseAttrs,
  IPanelHeaderAttrs,
  IPanelHeadingAttrs,
} from './declarations';
import { PanelContext } from '../../context';
import { Typography } from '../../../Typography';
import {
  PanelHeaderContainer,
  PanelHeaderActions,
  PanelHeaderHeading,
  PanelHeaderCollapseButton,
  PanelHeaderClose,
  PanelHeaderIcon,
  PanelHeaderNavigation,
} from './components';
import { VFlex } from '../../../VFlex';
import { HFlex } from '../../../HFlex';

export interface PanelHeaderProps
  extends IPanelBaseAttrs,
    IPanelHeaderAttrs,
    IPanelHelpAttrs,
    IPanelHeadingAttrs,
    IPanelSpaceAttrs {
  closeSettings?: IPanelCloseAttrs;
  collapseSettings?: IPanelCollapseAttrs;
}

export const InternalPanelHeader: React.FC<PanelHeaderProps> = ({
  actions,
  appendContent,
  as = 'header',
  bordered,
  bottomContent,
  children,
  closeSettings,
  collapseSettings,
  hasBoxShadow,
  helpTooltip,
  helpUrl,
  icon,
  legend,
  navigationContent,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  prependContent,
  removeSpace,
  size,
  style,
  subtitle,
  title,
  titleTooltip,
}) => {
  const context = React.useContext(PanelContext);
  const evalSize = size || context.size || 'md';
  return (
    <PanelHeaderContainer
      as={as}
      hasBoxShadow={hasBoxShadow ?? context.scrolledBodyContent}
      bordered={bordered}
      removeSpace={removeSpace}
      padding={padding}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      size={evalSize}
      style={style}
    >
      {children ? (
        typeof children === 'string' ? (
          <Typography.Paragraph size={evalSize}>
            {children}
          </Typography.Paragraph>
        ) : (
          children
        )
      ) : collapseSettings ||
        prependContent ||
        title ||
        subtitle ||
        icon ||
        appendContent ||
        actions ||
        closeSettings ||
        bottomContent ? (
        <VFlex spacing="0">
          <HFlex spacing="0">
            {collapseSettings && (
              <PanelHeaderCollapseButton
                onClick={collapseSettings?.onClick}
                size={evalSize}
                state={collapseSettings.expanded ? 'expanded' : 'enabled'}
                tooltip={collapseSettings?.tooltip}
              />
            )}
            {prependContent}
            {(title || subtitle || icon) && (
              <PanelHeaderHeading
                helpTooltip={helpTooltip}
                helpUrl={helpUrl}
                icon={icon}
                legend={legend}
                size={evalSize}
                subtitle={subtitle}
                title={title}
                titleTooltip={titleTooltip}
              />
            )}
            {appendContent}
            {actions && (
              <PanelHeaderActions actions={actions} size={evalSize} />
            )}
            {closeSettings && (
              <PanelHeaderClose
                cssTranslate={closeSettings.cssTranslate}
                onClick={closeSettings.onClick}
                size={evalSize}
                tooltip={closeSettings.tooltip}
              />
            )}
          </HFlex>
          {bottomContent}
          {navigationContent && (
            <PanelHeaderNavigation
              removeSpace={removeSpace}
              padding={padding}
              paddingLeft={paddingLeft}
              paddingRight={paddingRight}
              size={evalSize}
              style={style}
            >
              {navigationContent}
            </PanelHeaderNavigation>
          )}
        </VFlex>
      ) : null}
    </PanelHeaderContainer>
  );
};

export const PanelHeader = InternalPanelHeader as typeof InternalPanelHeader & {
  _Actions: typeof PanelHeaderActions;
  _Close: typeof PanelHeaderClose;
  _CollapseButton: typeof PanelHeaderCollapseButton;
  _Container: typeof PanelHeaderContainer;
  _Heading: typeof PanelHeaderHeading;
  _Icon: typeof PanelHeaderIcon;
  _Navigation: typeof PanelHeaderNavigation;
};

PanelHeader._Actions = PanelHeaderActions;
PanelHeader._Close = PanelHeaderClose;
PanelHeader._CollapseButton = PanelHeaderCollapseButton;
PanelHeader._Container = PanelHeaderContainer;
PanelHeader._Heading = PanelHeaderHeading;
PanelHeader._Icon = PanelHeaderIcon;
PanelHeader._Navigation = PanelHeaderNavigation;

InternalPanelHeader.displayName = 'Panel.Header';
PanelHeader._Actions.displayName = 'Panel.Header._Actions';
PanelHeader._Close.displayName = 'Panel.Header._Close';
PanelHeader._CollapseButton.displayName = 'Panel.Header._CollapseButton';
PanelHeader._Container.displayName = 'Panel.Header._Container';
PanelHeader._Heading.displayName = 'Panel.Header._Heading';
PanelHeader._Icon.displayName = 'Panel.Header._Icon';
PanelHeader._Navigation.displayName = 'Panel.Header._Navigation';
