import * as React from 'react';
import { DOMAttributes } from 'react';

import {
  HeaderSettings as PanelHeaderSettings,
  FooterSettings as PanelFooterSettings,
} from '../Panel/declarations';

import { IconButton, Divider, Panel, HFlex } from '..';

import { StyledPanelSection } from './StyledPanelSection';

export const renderBackwardNavigation = ({
  backwardTooltip,
  onClickBackwardNav,
}: {
  backwardTooltip: string;
  onClickBackwardNav: DOMAttributes<any>['onClick'];
}) => {
  if (onClickBackwardNav)
    return (
      <HFlex alignItems="stretch" height="100%" spacing="cmp-sm">
        <IconButton
          hasBoldIcon
          icon="gi-arrow_left1"
          onClick={onClickBackwardNav}
          title={backwardTooltip}
        />
        <Divider height="auto" margin="0" vertical />
      </HFlex>
    );

  return null;
};

export interface PanelSectionProps {
  backwardTooltip?: string;
  children?: React.ReactElement;
  display?: React.CSSProperties['display'];
  footerActions?: PanelFooterSettings['actions'];
  footerContent?: React.ReactElement;
  footerHasBackground?: boolean;
  headerActions?: PanelHeaderSettings['actions'];
  height?: React.CSSProperties['height'];
  helpTooltip?: string;
  helpUrl?: string;
  id?: string;
  navigation?: React.ReactElement;
  onClickBackwardNav?: DOMAttributes<any>['onClick'];
  renderActions?: React.ReactElement;
  removeContentSpace?: boolean;
  subtitle?: string;
  title?: React.ReactNode;
  visibility?: React.CSSProperties['visibility'];
}

export const PanelSection: React.FC<PanelSectionProps> = ({
  headerActions,
  backwardTooltip = 'Back',
  children,
  display,
  footerActions,
  footerContent,
  footerHasBackground = false,
  height = '100%',
  helpUrl,
  helpTooltip,
  id,
  navigation,
  onClickBackwardNav,
  renderActions,
  removeContentSpace = false,
  subtitle,
  title,
  visibility,
}) => {
  return (
    <Panel
      display={display}
      bodySettings={{ removeSpace: removeContentSpace }}
      id={id}
      forwardedAs={StyledPanelSection}
      headerSettings={{
        bordered: !navigation,
        actions: headerActions,
        hasShadowStyle: true,
        renderContent: {
          append: renderActions,
          prepend: renderBackwardNavigation({
            backwardTooltip,
            onClickBackwardNav,
          }),
          bottom: navigation,
        },
      }}
      footerSettings={
        footerActions || footerContent
          ? {
              actions: footerActions,
              hasBackground: footerHasBackground,
              hasShadowStyle: true,
              renderContent: footerContent,
            }
          : null
      }
      heightScheme={{ height }}
      helpUrl={helpUrl}
      helpTooltip={helpTooltip}
      subtitle={subtitle}
      title={title}
      visibility={visibility}
    >
      {children}
    </Panel>
  );
};
