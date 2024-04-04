import type {
  TBasicState,
  TMouseState,
  TSelectedState,
} from '../../declarations/commonProps';
import type { TButtonSize } from '../Button';

export type TChipSize = TButtonSize;
export type TChipState = TBasicState | TMouseState | TSelectedState;
