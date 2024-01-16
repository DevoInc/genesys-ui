import * as React from 'react';

import { IconType } from '@devoinc/genesys-icons';

export type ActionMenuEntry = {
  Icon?: React.FC<IconType>;
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
