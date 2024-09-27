import * as React from 'react';
import { useTheme } from 'styled-components';

import { GIArrowLeft } from '@devoinc/genesys-icons';

import type { IDataAttrs } from '../../declarations';
import type {
  IPanelContainerAttrs,
  IPanelHelpAttrs,
} from '../Panel/declarations';
import type { IPanelHeadingAttrs } from '../Panel/components/PanelHeader/declarations';
import { useIsOverflow } from '../../hooks';
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
  onClickBackwardNav: React.DOMAttributes<any>['onClick'];
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
  extends IDataAttrs,
    Pick<PanelProps, 'display' | 'id' | 'style' | 'visibility'>,
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
  onClickBackwardNav?: React.DOMAttributes<any>['onClick'];
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
  style,
  subtitle,
  title,
  visibility,
  ...dataProps
}) => {
  const theme = useTheme();
  const targetElRef = React.useRef<HTMLDivElement>(null);
  const { hasScroll } = useIsOverflow(targetElRef);
  return (
    <Panel
      {...dataProps}
      display={display}
      id={id}
      height={height}
      style={style}
      visibility={visibility}
    >
      {(onClickBackwardNav || title || headerActions || renderActions) && (
        <Panel.Header._Container
          bordered={!navigation}
          hasBoxShadow={hasScroll}
          style="padding: 0;"
        >
          <Panel.Header._Container
            as="div"
            bordered={false}
            hasBoxShadow={false}
            style={panelSectionHeaderMixin({ theme })}
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
        style={panelSectionBodyMixin({
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
          style={panelSectionFooterMixin({ theme })}
        >
          {footerContent}
        </Panel.Footer>
      )}
    </Panel>
  );
};
