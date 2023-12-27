import type { FeedbackColorScheme } from '@devoinc/genesys-ui';

export type ContextOption = {
  colorScheme?: FeedbackColorScheme;
  icon?: React.ReactNode;
  label?: string;
};

export type ContextOptions = {
  options?: {
    [key: string]: ContextOption;
  };
};
