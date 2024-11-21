import * as React from 'react';
import type {
  TBasicState,
  TMouseState,
  TReadonlyState,
  TSelectedState,
} from '../../declarations/commonProps';
import type { TButtonSize } from '../Button';

export type TChipSize = TButtonSize;
export type TChipState =
  | TBasicState
  | TMouseState
  | TSelectedState
  | TReadonlyState;
export type TChipIcon = React.ReactNode;
