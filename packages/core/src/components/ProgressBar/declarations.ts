import * as React from 'react';
import type { UIColorScheme } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type TProgressBarStatus =
  | 'progressing'
  | PickUnion<UIColorScheme, 'warning' | 'error'>
  | 'complete';

export type TProgressBarColorScheme = 'light' | 'dark';

export type TProgressBarSize = 'sm' | 'md';

export type TProgressBarType = 'standard' | 'circular';
export type TProgressBarCustomInfo = {
  startInfo: string;
  endInfo: string;
};

export interface IBaseProgressBar {
  /** Color scheme of the progressbar */
  colorScheme?: TProgressBarColorScheme;
  /** This property defines the status of the progress */
  status?: TProgressBarStatus;
  /** The size of the progress bar */
  size?: TProgressBarSize;
  /** If the StatusHelper is rendered as a floating InlineMessage. */
  hasFloatingStatusHelper?: boolean;
  /** If the percent quantity is indeterminate */
  indeterminate?: boolean;
  /** Percent loaded. The value is a number between 0 and 100 */
  percent?: number;
  /** If the status helper (static or floating), custom info and percentage are shown or not. */
  showStatus?: boolean;
  /** The type of the progress bar: standard or circular */
  type?: TProgressBarType;
  /** If the progress bar has an animated stripped background */
  animated?: boolean;
  /** Helper to inform the user about the status of the process: there has been an error, some warnings... etc. */
  statusHelper?: React.ReactNode;
  /** Tooltip of the FloatingStatusHelper trigger. */
  floatingStatusHelperTooltip?: string;
  /** The id for FloatingStatusHelper for accessibility reasons. */
  floatingStatusHelperId?: string;
  /** If the progress bar has a custom info block. */
  withCustomInfo?: boolean;
}
