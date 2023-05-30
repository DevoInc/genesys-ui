import { UIColorScheme } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ProgressBarStatus =
  | 'progressing'
  | PickUnion<UIColorScheme, 'warning' | 'error'>
  | 'warning'
  | 'error'
  | 'complete';

export type ProgressBarColorScheme = 'light' | 'dark';

export type ProgressBarSize = 'sm' | 'md';

export type ProgressBarType = 'standard' | 'circular';

export interface BaseProgressBarProps {
  /** Color scheme of the progressbar */
  colorScheme: ProgressBarColorScheme;
  /** This property defines the status of the progress */
  status: ProgressBarStatus;
  /** The size of the progress bar */
  size: ProgressBarSize;
  /** If the percent quantity is indeterminate */
  indeterminate?: boolean;
  /** Percent loaded. The value is a number between 0 and 100 */
  percent: number;
  /** If the default and custom info are shown or not */
  showInfo?: boolean;
  /** The type of the progress bar: standard or circular */
  type: ProgressBarType;
  /** If the progress bar has an animated stripped background */
  animated?: boolean;
}
