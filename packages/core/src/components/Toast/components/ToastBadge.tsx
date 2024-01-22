import * as React from 'react';
import { concat } from 'lodash';

import { ToastStatus } from '../declarations';

import { Badge, BadgeProps } from '../../Badge';
import { css, useTheme } from 'styled-components';
import { TOAST_ELEVATION_LEVEL } from '../constants';

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
