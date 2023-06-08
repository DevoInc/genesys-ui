import * as React from 'react';
import { DOMAttributes } from 'react';

import {
  HeaderSettingsProps as PanelHeaderSettings,
  FooterSettingsProps as PanelFooterSettingsProps,
} from '../Panel/declarations';

import { IconButton, Divider, Panel, HFlex, PanelProps } from '..';
import { useDetectScroll } from '../../hooks';
import {
  panelSectionBodyMixin,
  panelSectionFooterMixin,
  panelSectionHeaderMixin,
} from './helpers';
import { useTheme } from 'styled-components';

export const renderBackwardNavigation = ({
  backwardTooltip,
  onClickBackwardNav,
}: {
  backwardTooltip: string;
  onClickBackwardNav: DOMAttributes<any>['onClick'];
}) => {
  return (
    <HFlex
      alignItems="stretch"
      height="100%"
      spacing="cmp-sm"
      marginRight="cmp-sm"
    >
      <IconButton
        hasBoldIcon
        icon="gi-arrow_left1"
        onClick={onClickBackwardNav}
        tooltip={backwardTooltip}
      />
      <Divider height="auto" margin="0" vertical />
    </HFlex>
  );
};

export interface PanelSectionProps
  extends Pick<
    PanelProps,
    | 'children'
    | 'display'
    | 'helpTooltip'
    | 'helpUrl'
    | 'id'
    | 'subtitle'
    | 'title'
    | 'visibility'
  > {
  backwardTooltip?: string;
  children?: React.ReactElement;
  footerActions?: PanelFooterSettingsProps['actions'];
  footerContent?: React.ReactElement;
  footerHasBackground?: boolean;
  headerActions?: PanelHeaderSettings['actions'];
  height?: React.CSSProperties['height'];
  navigation?: React.ReactElement;
  onClickBackwardNav?: DOMAttributes<any>['onClick'];
  renderActions?: React.ReactElement;
  removeContentSpace?: boolean;
}

export const PanelSection: React.FC<PanelSectionProps> = ({
  backwardTooltip = 'Back',
  children,
  display,
  footerActions,
  footerContent,
  footerHasBackground = false,
  headerActions,
  height = '100%',
  helpTooltip,
  helpUrl,
  id,
  navigation,
  onClickBackwardNav,
  removeContentSpace = false,
  renderActions,
  subtitle,
  title,
  visibility,
}) => {
  const theme = useTheme();
  const { hasScroll, targetElRef } = useDetectScroll();
  return (
    <Panel.Container
      display={display}
      id={id}
      heightScheme={{ height }}
      visibility={visibility}
    >
      {(onClickBackwardNav || title || headerActions || renderActions) && (
        <Panel.Header.Container
          bordered={!navigation}
          hasBoxShadow
          styles="padding: 0;"
        >
          <Panel.Header.Container
            as="div"
            bordered={false}
            hasBoxShadow={false}
            styles={panelSectionHeaderMixin({ theme })}
          >
            {onClickBackwardNav &&
              renderBackwardNavigation({
                backwardTooltip,
                onClickBackwardNav,
              })}
            {title && (
              <Panel.Header.Heading
                subtitle={subtitle}
                title={title}
                helpUrl={helpUrl}
                helpTooltip={helpTooltip}
              />
            )}
            {headerActions && <Panel.Header.Actions actions={headerActions} />}
            {renderActions}
          </Panel.Header.Container>
        </Panel.Header.Container>
      )}
      <Panel.Body
        hasScroll={hasScroll}
        removeSpace={removeContentSpace}
        panelBodyRef={targetElRef}
        styles={panelSectionBodyMixin({
          hasScroll,
          removeSpace: removeContentSpace,
          theme,
        })}
      >
        {children}
      </Panel.Body>
      {(footerContent || footerActions) && (
        <Panel.Footer
          actions={footerActions}
          hasBackground={footerHasBackground}
          hasBoxShadow
          styles={panelSectionFooterMixin({ theme })}
        >
          {footerContent}
        </Panel.Footer>
      )}
    </Panel.Container>
  );
};
