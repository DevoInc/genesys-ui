import { MouseEventAttrProps } from '../../../declarations';
import * as React from 'react';

import { toastStatusToIconMap } from '../constants';
import { ToastStatus } from '../declarations';

import {
  Divider,
  Flex,
  HFlex,
  IconButtonClose,
  IconButtonCollapse,
  Typography,
  VFlex,
} from '../..';

import { ToastHeaderIcon } from './ToastHeaderIcon';

export interface ToastHeaderProps {
  /** react-toastify's function to close itself */
  closeToast?: () => void;
  /** Header close button tooltip */
  closeTooltip?: string;
  /** Allow collapse notification */
  collapsable?: boolean;
  /** Header collapse button tooltip */
  collapseTooltip?: string;
  /** Header expand button tooltip */
  expandTooltip?: string;
  /** Show notification collapsed or expanded */
  collapsed?: boolean;
  /** Action of collapse button */
  onCollapse?: MouseEventAttrProps['onClick'];
  /** Notification status */
  status?: ToastStatus;
  /** Notification subtitle */
  subtitle?: string;
  /** Notification title */
  title?: string;
}

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
}) => (
  <HFlex
    alignItems="stretch"
    padding="cmp-sm cmp-xs cmp-sm cmp-md"
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
    <ToastHeaderIcon
      colorScheme={status}
      iconId={status ? toastStatusToIconMap[status] : ''}
    />
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
      <IconButtonClose tooltip={closeTooltip} onClick={closeToast} size="md" />
    </Flex.Item>
  </HFlex>
);
