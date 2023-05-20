import * as React from 'react';

import { ToastStatus } from '../declarations';

import { Badge, BadgeProps } from '../../Badge';

export interface ToastBadgeProps extends BadgeProps {
  /** Status of notification */
  status?: ToastStatus;
  /** Number of instances for the same notification */
  updates?: number;
}

export const ToastBadge: React.FC<ToastBadgeProps> = ({
  colorScheme,
  status,
  styles,
  text,
  updates,
  ...restBadgeProps
}) =>
  updates > 1 && (
    <Badge
      {...restBadgeProps}
      className={`${status}-updates`}
      hasAbsolutePosition
      colorScheme={colorScheme || status}
      text={text || updates.toString()}
      styles={
        styles || 'left: 0; right: auto; transform: translate(-50%, -50%);'
      }
    />
  );
