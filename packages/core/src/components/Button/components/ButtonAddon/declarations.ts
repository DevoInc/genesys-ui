import { TButtonIconPosition, TButtonSize } from '../../declarations';

export interface IButtonAddon {
  /** If the button addon includes space next to it */
  hasSpace?: boolean;
  /** If the button addon is a dropdown */
  isDropdown?: boolean;
  /** The position of addon  */
  position?: TButtonIconPosition;
  /** Sets how much spacing, font-size, width... has the button addon etc. */
  size?: TButtonSize;
}
