import * as React from 'react';
import { DOMAttributes } from 'react';

import {
  PanelActions,
  PanelHelpTooltip,
  PanelHelpUrl,
} from '../Panel/declarations';

import { IconButton, Box, Divider, FlexItem, Panel } from '..';

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
      <>
        <FlexItem alignSelf={'flex-start'}>
          <IconButton
            hasBoldIcon
            icon="arrow_left1"
            onClick={onClickBackwardNav}
            title={backwardTooltip}
          />
        </FlexItem>
        <Box height="100%" marginLeft="cmp-md">
          <Divider height="100%" margin="0" vertical />
        </Box>
      </>
    );

  return null;
};

export interface PanelSectionProps {
  backwardTooltip?: string;
  children?: React.ReactElement;
  display?: React.CSSProperties['display'];
  footerActions?: PanelActions;
  footerContent?: React.ReactElement;
  footerHasBackground?: boolean;
  headerActions?: PanelActions;
  height?: React.CSSProperties['height'];
  helpTooltip?: PanelHelpTooltip;
  helpUrl?: PanelHelpUrl;
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
      contentSettings={{ removeSpace: removeContentSpace }}
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
