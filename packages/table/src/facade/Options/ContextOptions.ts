import * as React from 'react';
import type { TFeedbackColorScheme } from '@devoinc/genesys-ui';

export type TContextOption = {
  colorScheme?: TFeedbackColorScheme;
  icon?: React.ReactNode;
  label?: string;
};

export type TContextOptions = {
  options?: {
    [key: string]: TContextOption;
  };
};
