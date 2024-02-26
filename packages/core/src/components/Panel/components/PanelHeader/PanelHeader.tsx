import * as React from 'react';

import { PanelBaseAttrs, PanelHelpAttrs } from '../../declarations';

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
import {
  PanelCloseAttrs,
  PanelCollapseAttrs,
  PanelHeaderAttrs,
  PanelHeadingAttrs,
} from './declarations';

export interface PanelHeaderProps
  extends PanelBaseAttrs,
    PanelHeaderAttrs,
    PanelHelpAttrs,
    PanelHeadingAttrs {
  closeSettings?: PanelCloseAttrs;
  collapseSettings?: PanelCollapseAttrs;
}

export const InternalPanelHeader: React.FC<PanelHeaderProps> = ({
  actions,
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
  removeSpace,
  size,
  styles,
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
      hasSubtitle={Boolean(subtitle)}
      removeSpace={removeSpace}
      size={evalSize}
      styles={styles}
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

PanelHeader.displayName = 'PanelHeader';

PanelHeader._Actions.displayName = 'PanelHeader._Actions';
PanelHeader._Close.displayName = 'PanelHeader._Close';
PanelHeader._CollapseButton.displayName = 'PanelHeader._CollapseButton';
PanelHeader._Container.displayName = 'PanelHeader._Container';
PanelHeader._Heading.displayName = 'PanelHeader._Heading';
PanelHeader._Icon.displayName = 'PanelHeader._Icon';
