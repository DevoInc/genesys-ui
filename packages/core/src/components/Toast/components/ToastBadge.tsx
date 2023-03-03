import * as React from 'react';

import { StyledBadge } from '../styled';
import { ToastStatus } from '../declarations';

export interface ToastBadgeProps {
  /** Status of notification */
  status?: ToastStatus;
  /** Number of instances for the same notification */
  updates?: number;
}

export const ToastBadge: React.FC<ToastBadgeProps> = ({ status, updates }) =>
  updates > 1 && (
    <StyledBadge
      className={`${status}-updates`}
      hasAbsolutePosition
      colorScheme={status}
      text={updates.toString()}
    />
  );
