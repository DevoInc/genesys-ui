import { FeedbackColorScheme } from '@devoinc/genesys-ui';

export type Option = {
  colorScheme?: FeedbackColorScheme;
  icon?: React.ReactNode;
  label?: string;
};

export type Options = { [key: string]: Option };
