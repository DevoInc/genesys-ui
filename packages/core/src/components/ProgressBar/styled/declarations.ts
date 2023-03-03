import {
  ProgressBarColorScheme,
  ProgressBarSize,
  ProgressBarStatus,
  ProgressBarType,
} from '../declarations';

export interface BaseStyledProgressBarProps {
  /** It defines if the component occupies the full width of its parent  */
  wide?: boolean;
  /** Margin */
  margin?: React.CSSProperties['margin'];
  /** Padding */
  padding?: React.CSSProperties['padding'];
  /** Color scheme of the progressbar */
  colorScheme: ProgressBarColorScheme;
  /** This property defines the status of the progress */
  progress: ProgressBarStatus;
  /** The size of the progress bar */
  size: ProgressBarSize;
  /** If the percent quantity is indeterminate */
  indeterminate?: boolean;
  /** Percent loaded. The value is a number between 0 and 100 */
  percent: number;
  /** If the default and custom info are shown or not */
  showInfo?: boolean;
  /** The type of the progress bar: standard or circular */
  typeProp: ProgressBarType;
  /** If the progress bar has an animated stripped background */
  animated?: boolean;
}
