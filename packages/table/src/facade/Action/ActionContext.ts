import * as React from 'react';

import { type IconType } from '@devoinc/genesys-icons';

export type TActionMenuEntry = {
  Icon?: React.ReactNode;
  onClick?: (rowIndex: number, event: React.MouseEvent) => void;
  text?: string;
  children?: TActionMenuEntry[];
  component?: 'separator';
};

export type TQuickActionMenuEntry = {
  Icon?: IconType;
  onClick?: (rowIndex: number, event: React.MouseEvent) => void;
};

export type TActionContext = {
  quickActions?: TQuickActionMenuEntry[];
  actionMenu?: TActionMenuEntry[];
};
