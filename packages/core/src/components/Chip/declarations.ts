import type {
  BasicState,
  MouseState,
  SelectedState,
} from '../../declarations/commonProps';
import type { ButtonSize } from '../Button';

export type ChipSize = ButtonSize;
export type ChipState = BasicState | MouseState | SelectedState;
