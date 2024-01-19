import * as React from 'react';

import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../../declarations';
import { PanelFooterProps } from '../PanelFooter';
import { HeaderSettingsProps, PanelSize } from '../../declarations';

import { Typography } from '../../../Typography';
import {
  PanelHeaderCollapse,
  PanelHeaderContainer,
  PanelHeaderContainerProps,
  PanelHeaderActions,
  PanelHeaderHeading,
  PanelHeaderHeadingProps,
  PanelHeaderCollapseProps,
  PanelHeaderCloseProps,
  PanelHeaderClose,
  PanelHeaderIcon,
} from './components';

export interface PanelHeaderProps
  extends StyledOverloadCssProps,
    Pick<StyledPolymorphicProps, 'as'>,
    Omit<HeaderSettingsProps, 'renderContent'>,
    Pick<PanelHeaderContainerProps, 'hasBoxShadow'>,
    Pick<
      PanelHeaderHeadingProps,
      'legend' | 'subtitle' | 'title' | 'titleTooltip'
    >,
    Pick<PanelFooterProps, 'helpTooltip' | 'helpUrl'> {
  children?: React.ReactNode;
  closeSettings?: {
    cssTranslate?: PanelHeaderCloseProps['cssTranslate'];
    onClick: PanelHeaderCloseProps['onClick'];
    tooltip?: PanelHeaderCloseProps['tooltip'];
  };
  collapseSettings?: {
    expanded?: boolean;
    onClick: PanelHeaderCollapseProps['onClick'];
    tooltip?: PanelHeaderCollapseProps['tooltip'];
  };
  removeSpace?: boolean;
  /** Set size for Panel header components */
  size?: PanelSize;
  icon?: string;
}

export const InternalPanelHeader: React.FC<PanelHeaderProps> = ({
  actions,
  as,
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
  size = 'md',
  styles,
  subtitle,
  title,
  titleTooltip,
}) => {
  return (
    <PanelHeaderContainer
      as={as}
      hasBoxShadow={hasBoxShadow}
      bordered={bordered}
      hasSubtitle={Boolean(subtitle)}
      removeSpace={removeSpace}
      size={size}
      styles={styles}
    >
      {children ? (
        typeof children === 'string' ? (
          <Typography.Paragraph size={size}>{children}</Typography.Paragraph>
        ) : (
          children
        )
      ) : (
        <>
          {collapseSettings && (
            <PanelHeaderCollapse
              onClick={collapseSettings?.onClick}
              size={size}
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
              size={size}
              subtitle={subtitle}
              title={title}
              titleTooltip={titleTooltip}
            />
          )}
          {actions && <PanelHeaderActions actions={actions} size={size} />}
          {closeSettings && (
            <PanelHeaderClose
              cssTranslate={closeSettings.cssTranslate}
              onClick={closeSettings.onClick}
              size={size}
              tooltip={closeSettings.tooltip}
            />
          )}
        </>
      )}
    </PanelHeaderContainer>
  );
};

export const PanelHeader = InternalPanelHeader as typeof InternalPanelHeader & {
  Actions: typeof PanelHeaderActions;
  Close: typeof PanelHeaderClose;
  Collapse: typeof PanelHeaderCollapse;
  Container: typeof PanelHeaderContainer;
  Heading: typeof PanelHeaderHeading;
  Icon: typeof PanelHeaderIcon;
};

PanelHeader.Actions = PanelHeaderActions;
PanelHeader.Close = PanelHeaderClose;
PanelHeader.Collapse = PanelHeaderCollapse;
PanelHeader.Container = PanelHeaderContainer;
PanelHeader.Heading = PanelHeaderHeading;
PanelHeader.Icon = PanelHeaderIcon;

PanelHeader.displayName = 'PanelHeader';
