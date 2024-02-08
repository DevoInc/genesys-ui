import * as React from 'react';

import { type IconType } from '@devoinc/genesys-icons';

export type ActionMenuEntry = {
  Icon?: React.ReactNode;
  onClick?: (rowIndex: number, event: React.MouseEvent) => void;
  text?: string;
  children?: ActionMenuEntry[];
  component?: 'separator';
};

export type QuickActionMenuEntry = {
  Icon?: IconType;
  onClick?: (rowIndex: number, event: React.MouseEvent) => void;
};

export type ActionContext = {
  quickActions?: QuickActionMenuEntry[];
  actionMenu?: ActionMenuEntry[];
};
