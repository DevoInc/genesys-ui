import type { TControlWidth, TFieldStatus } from '../../../../declarations';
import type { TFieldSize } from '../../../Field/declarations';

export interface IInputControlInput {
  /** Size of the input: height, padding, font-size... etc. */
  size?: TFieldSize;
  /** If the Input has an addon to its left, so it needs special styles. */
  hasAddonToLeft?: boolean;
  /** If the Input has an addon to its right, so it needs special styles. */
  hasAddonToRight?: boolean;
  /** Whether the component displays an icon. */
  hasIcon?: boolean;
  /** Whether the component displays an icon related with type. */
  hasTypeIcon?: boolean;
  /** Width of the input control based in predefined values as 'xxs', 'xs',
   * 'sm'... etc. or directly in a css value. It should reflect the length of
   * the content you expect the user to enter. */
  inputWidth?: TControlWidth;
  /** This property defines the status color schema for the input */
  status?: TFieldStatus;
}
