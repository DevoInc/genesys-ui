import * as React from 'react';

import { FLOATING_HELPER_ICON_BUTTON_SIZE_MAP } from './constants';
import type { HelperProps } from '../Helper';
import type { TFloatingHelperSize } from './declarations';
import { hasStatus } from '../../utils/validations';

import { Typography } from '../Typography';
import { InlineMessage } from '../InlineMessage';

export interface FloatingHelperProps extends Omit<HelperProps, 'size'> {
  size?: TFloatingHelperSize;
}

export const FloatingHelper: React.FC<FloatingHelperProps> = ({
  id,
  message,
  size = 'md',
  status = 'base',
  tooltip,
}) => {
  return (
    <InlineMessage
      id={id}
      trigger={{ size: FLOATING_HELPER_ICON_BUTTON_SIZE_MAP[size] }}
      status={hasStatus(status) ? status : 'help'}
      tooltip={tooltip}
    >
      <InlineMessage.Panel>
        <Typography.Paragraph>{message}</Typography.Paragraph>
      </InlineMessage.Panel>
    </InlineMessage>
  );
};
