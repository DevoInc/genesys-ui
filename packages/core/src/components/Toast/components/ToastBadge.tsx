import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import { TOAST_ELEVATION_LEVEL } from '../constants';
import type { IToast } from '../declarations';
import { Badge, type BadgeProps } from '../../Badge';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastBadgeProps
  extends BadgeProps,
    Pick<IToast, 'status' | 'updates'> {}

export const ToastBadge: React.FC<ToastBadgeProps> = ({
  colorScheme,
  status,
  styles,
  text,
  updates,
  ...restBadgeProps
}) => {
  const theme = useTheme();
  const baseStyles = css`
    left: 0;
    right: auto;
    transform: translate(-50%, -50%);
    z-index: calc(
      ${theme.alias.elevation.zIndex.depth[TOAST_ELEVATION_LEVEL]} + 1
    );
  `;
  return (
    updates > 1 && (
      <Badge
        {...restBadgeProps}
        hasAbsolutePosition
        colorScheme={colorScheme || status}
        text={text || updates.toString()}
        styles={concat(baseStyles, styles)}
      />
    )
  );
};
