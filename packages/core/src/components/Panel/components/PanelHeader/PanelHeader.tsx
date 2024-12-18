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
} from './components';

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
  children,
  closeSettings,
  collapseSettings,
  hasBoxShadow,
  helpTooltip,
  helpUrl,
  icon,
  legend,
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
      customContent={Boolean(children)}
      hasSubtitle={Boolean(subtitle)}
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
      ) : (
        <>
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
          {actions && <PanelHeaderActions actions={actions} size={evalSize} />}
          {closeSettings && (
            <PanelHeaderClose
              cssTranslate={closeSettings.cssTranslate}
              onClick={closeSettings.onClick}
              size={evalSize}
              tooltip={closeSettings.tooltip}
            />
          )}
        </>
      )}
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
};

PanelHeader._Actions = PanelHeaderActions;
PanelHeader._Close = PanelHeaderClose;
PanelHeader._CollapseButton = PanelHeaderCollapseButton;
PanelHeader._Container = PanelHeaderContainer;
PanelHeader._Heading = PanelHeaderHeading;
PanelHeader._Icon = PanelHeaderIcon;

InternalPanelHeader.displayName = 'PanelHeader';
PanelHeader._Actions.displayName = 'PanelHeader._Actions';
PanelHeader._Close.displayName = 'PanelHeader._Close';
PanelHeader._CollapseButton.displayName = 'PanelHeader._CollapseButton';
PanelHeader._Container.displayName = 'PanelHeader._Container';
PanelHeader._Heading.displayName = 'PanelHeader._Heading';
PanelHeader._Icon.displayName = 'PanelHeader._Icon';
