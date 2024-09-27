import * as React from 'react';

import type { IToast } from '../../declarations';
import { Divider } from '../../../Divider';
import { Flex } from '../../../Flex';
import { HFlex } from '../../../HFlex';
import { IconButtonClose, IconButtonCollapse } from '../../../IconButton';
import { Typography } from '../../../Typography';
import { VFlex } from '../../../VFlex';
import { ToastHeaderIcon } from '../ToastHeaderIcon';
import { getToastStatusIcon } from '../../utils';
import { Panel } from '../../../Panel';
import { PanelContext } from '../../../Panel/context';

export interface ToastHeaderProps
  extends Pick<
    IToast,
    | 'closeToast'
    | 'closeTooltip'
    | 'collapsable'
    | 'collapsed'
    | 'collapseTooltip'
    | 'expandTooltip'
    | 'onCollapse'
    | 'status'
    | 'subtitle'
    | 'title'
  > {}

export const ToastHeader: React.FC<ToastHeaderProps> = ({
  closeToast,
  closeTooltip,
  collapsable,
  collapseTooltip,
  expandTooltip,
  collapsed,
  onCollapse,
  status,
  subtitle,
  title,
}) => {
  const panelContext = React.useContext(PanelContext);
  const padding =
    collapsable || panelContext.scrolledBodyContent
      ? 'cmp-sm cmp-xs cmp-sm cmp-md'
      : 'cmp-sm cmp-xs cmp-xxs cmp-md';
  return (
    <Panel.Header
      hasBoxShadow={collapsable ? collapsable && !collapsed : undefined}
      removeSpace
    >
      <HFlex
        alignItems="stretch"
        flex="1 1 auto"
        padding={padding}
        spacing="cmp-sm"
      >
        {collapsable && (
          <>
            <Flex.Item alignSelf="center" flex="0 0 auto">
              <IconButtonCollapse
                onClick={onCollapse}
                size="md"
                state={collapsed ? undefined : 'expanded'}
                tooltip={collapsed ? expandTooltip : collapseTooltip}
              />
            </Flex.Item>
            <Divider height="auto" margin="0" vertical />
          </>
        )}
        <ToastHeaderIcon colorScheme={status}>
          {status ? getToastStatusIcon(status) : null}
        </ToastHeaderIcon>
        <VFlex spacing={'cmp-xs'}>
          <Flex alignItems="center" minHeight="2rem">
            <Typography.Heading truncateLine={2} size="h5">
              {title}
            </Typography.Heading>
          </Flex>
          <Typography.Heading colorScheme="weak" truncateLine={3} size="h6">
            {subtitle}
          </Typography.Heading>
        </VFlex>
        <Flex.Item marginLeft="auto" flex="0 0 auto">
          <IconButtonClose
            tooltip={closeTooltip}
            onClick={closeToast}
            size="md"
          />
        </Flex.Item>
      </HFlex>
    </Panel.Header>
  );
};
