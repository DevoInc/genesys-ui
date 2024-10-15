import * as React from 'react';
import { css, useTheme } from 'styled-components';

import type { IToast } from '../../declarations';
import { Badge, type BadgeProps } from '../../../Badge';
import { mergeStyles } from '../../../../helpers';

export interface ToastBadgeProps
  extends BadgeProps,
    Pick<IToast, 'status' | 'updates'> {}

export const ToastBadge: React.FC<ToastBadgeProps> = ({
  colorScheme,
  status,
  style,
  text,
  updates,
  ...restBadgeProps
}) => {
  const theme = useTheme();
  const baseStyles = css`
    left: 0;
    right: auto;
    transform: translate(-50%, -50%);
    z-index: ${theme.cmp.toast.badge.elevation.zIndex};
  `;
  return (
    updates > 1 && (
      <Badge
        {...restBadgeProps}
        hasAbsolutePosition
        colorScheme={colorScheme || status}
        text={text || updates.toString()}
        style={mergeStyles(baseStyles, style)}
      />
    )
  );
};
