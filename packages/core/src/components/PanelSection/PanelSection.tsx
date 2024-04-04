import * as React from 'react';
import { DOMAttributes } from 'react';
import { useTheme } from 'styled-components';
import { GIArrowLeft } from '@devoinc/genesys-icons';

import type {
  IPanelContainerAttrs,
  IPanelHelpAttrs,
} from '../Panel/declarations';
import type { IPanelHeadingAttrs } from '../Panel/components/PanelHeader/declarations';

import { useDetectScroll } from '../../hooks';

import {
  panelSectionBodyMixin,
  panelSectionFooterMixin,
  panelSectionHeaderMixin,
} from './helpers';

import { HFlex } from '../HFlex';
import { IconButton } from '../IconButton';
import { Divider } from '../Divider';
import { Panel, type PanelProps } from '../Panel';

const renderBackwardNavigation = ({
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
        icon={<GIArrowLeft />}
        onClick={onClickBackwardNav}
        tooltip={backwardTooltip}
      />
      <Divider height="auto" margin="0" vertical />
    </HFlex>
  );
};

export interface PanelSectionProps
  extends Pick<PanelProps, 'display' | 'id' | 'styles' | 'visibility'>,
    IPanelHelpAttrs,
    Pick<IPanelHeadingAttrs, 'title' | 'subtitle'> {
  backwardTooltip?: string;
  children?: React.ReactElement | React.ReactElement[];
  footerActions?: IPanelContainerAttrs['actions'];
  footerContent?: React.ReactElement;
  footerHasBackground?: boolean;
  headerActions?: IPanelContainerAttrs['actions'];
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
  styles,
  subtitle,
  title,
  visibility,
}) => {
  const theme = useTheme();
  const { hasScroll, targetElRef } = useDetectScroll();
  return (
    <Panel
      display={display}
      id={id}
      height={height}
      styles={styles}
      visibility={visibility}
    >
      {(onClickBackwardNav || title || headerActions || renderActions) && (
        <Panel.Header._Container
          bordered={!navigation}
          hasBoxShadow={hasScroll}
          styles="padding: 0;"
        >
          <Panel.Header._Container
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
              <Panel.Header._Heading
                subtitle={subtitle}
                title={title}
                helpUrl={helpUrl}
                helpTooltip={helpTooltip}
              />
            )}
            {headerActions && <Panel.Header._Actions actions={headerActions} />}
            {renderActions}
          </Panel.Header._Container>
        </Panel.Header._Container>
      )}
      <Panel.Body
        removeSpace={removeContentSpace}
        ref={targetElRef}
        styles={panelSectionBodyMixin({
          hasScroll: hasScroll,
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
          hasBoxShadow={hasScroll}
          bordered
          styles={panelSectionFooterMixin({ theme })}
        >
          {footerContent}
        </Panel.Footer>
      )}
    </Panel>
  );
};
