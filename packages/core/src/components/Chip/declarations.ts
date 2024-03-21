import type {
  TBasicState,
  TMouseState,
  TSelectedState,
} from '../../declarations/commonProps';
import type { ButtonSize } from '../Button';

export type ChipSize = ButtonSize;
export type ChipState = TBasicState | TMouseState | TSelectedState;
