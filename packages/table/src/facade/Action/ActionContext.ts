import * as React from 'react';

import type { IconButtonProps } from '@devoinc/genesys-ui';

export type TActionMenuEntry = {
  Icon?: React.ReactNode;
  onClick?: (rowIndex: number, event: React.MouseEvent) => void;
  text?: string;
  children?: TActionMenuEntry[];
  component?: 'separator';
  tooltip?: string;
};

export type TQuickActionMenuEntry = {
  badgeText?: IconButtonProps['badgeText'];
  hasBadge?: IconButtonProps['hasBadge'];
  Icon?: React.ReactNode;
  onClick?: (rowIndex: number, event: React.MouseEvent) => void;
  tooltip?: string;
};

export type TActionContext = {
  quickActions?: TQuickActionMenuEntry[];
  actionMenu?: TActionMenuEntry[];
};
