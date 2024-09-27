import type { TSelectionScheme } from '../../../../declarations';
import type {
  TButtonColorScheme,
  TButtonSize,
  TButtonState,
} from '../../declarations';

export interface IButtonContainer {
  /** Color scheme: background color, text color, backdrop... etc. */
  colorScheme?: TButtonColorScheme;
  /** Icon Component */
  icon?: React.ReactNode;
  /** Border Radius 50% */
  circular?: boolean;
  /** The button has the dropdown marker. */
  hasDropdown?: boolean;
  /** Button has the same width and height: it's usually used for IconButtons. */
  squared?: boolean;
  /** Button fully adjusts the width of its parent container */
  wide?: boolean;
  /** If it's multiple we use a checkbox and if it's single we use a radio */
  selectionScheme?: TSelectionScheme;
  /** Sets padding, line-height, font-size, etc. */
  size?: TButtonSize;
  /** Sets the color scheme according to component state */
  state?: TButtonState;
}

export interface IButtonContainerStyled {
  /** Color scheme: background color, text color, backdrop... etc. */
  $colorScheme?: IButtonContainer['colorScheme'];
  /** Icon Component */
  $icon?: React.ReactNode;
  /** Border Radius 50% */
  $circular?: boolean;
  /** The button has the dropdown marker. */
  $hasDropdown?: boolean;
  /** Button has the same width and height: it's usually used for IconButtons. */
  $squared?: boolean;
  /** Button fully adjusts the width of its parent container */
  $wide?: boolean;
  /** If it's multiple we use a checkbox and if it's single we use a radio */
  $selectionScheme?: TSelectionScheme;
  /** Sets padding, line-height, font-size, etc. */
  $size?: TButtonSize;
  /** Sets the color scheme according to component state */
  $state?: TButtonState;
}
