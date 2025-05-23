import * as React from 'react';

import { FLOATING_HELPER_ICON_BUTTON_SIZE_MAP } from './constants';
import type { IDataAttrs } from '../../declarations';
import type { HelperProps } from '../Helper';
import type {
  TFloatingHelperSize,
  TFloatingHelperStatus,
} from './declarations';
import { hasStatus } from '../../utils/validations';
import { InlineMessage } from '../InlineMessage';

export interface FloatingHelperProps
  extends IDataAttrs,
    Omit<HelperProps, 'size' | 'status'> {
  size?: TFloatingHelperSize;
  status?: TFloatingHelperStatus;
}

export const FloatingHelper: React.FC<FloatingHelperProps> = ({
  id,
  message,
  size = 'md',
  status = 'base',
  tooltip,
  ...restDataProps
}) => {
  return (
    <InlineMessage
      id={id}
      trigger={{ size: FLOATING_HELPER_ICON_BUTTON_SIZE_MAP[size] }}
      status={hasStatus(status) ? status : 'help'}
      tooltip={tooltip}
      {...restDataProps}
    >
      <InlineMessage.Panel>{message}</InlineMessage.Panel>
    </InlineMessage>
  );
};
