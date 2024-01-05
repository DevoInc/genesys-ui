import * as React from 'react';

import { IconType } from '@devoinc/genesys-icons';

export type ActionMenuEntry = {
  Icon?: React.FC<IconType>;
  onClick?: (rowIndex: number, event: React.MouseEvent) => void;
  text?: string;
  children?: ActionMenuEntry[];
  component?: 'separator';
};

export type ActionContext = {
  quickActions?: {
    Icon?: React.FC<IconType>;
    onClick?: (rowIndex: number, event: React.MouseEvent) => void;
  }[];
  actionMenu?: ActionMenuEntry[];
};
