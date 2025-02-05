import { TChipSize, TChipState } from '../../declarations';

export interface IChipContainer {
  /** It sets padding, line-height, font-size, etc. */
  size?: TChipSize;
  /** It sets the color scheme and the selection behavior. */
  state?: TChipState;
  /** If you can drag & drop the Chip. */
  sortable?: boolean;
  /** If the Chip renders inside a remove icon button. */
  removable?: boolean;
}

export interface IChipContainerStyled {
  /** It sets padding, line-height, font-size, etc. */
  $size?: TChipSize;
  /** It sets the color scheme and the selection behavior. */
  $state?: TChipState;
  /** If you can drag & drop the Chip. */
  $sortable?: boolean;
  /** If the Chip renders inside a remove icon button. */
  $removable?: boolean;
}
