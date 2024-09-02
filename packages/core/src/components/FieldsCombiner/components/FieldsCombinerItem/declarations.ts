import * as React from 'react';

import type { TFieldSize, TFieldStatus } from '../../../../declarations';
import type {
  TFieldsCombinerOrder,
  TFieldsCombinerType,
} from '../../declarations';

export interface IFieldsCombinerItem {
  combinedButtons?: boolean;
  width?: React.CSSProperties['width'];
  order: TFieldsCombinerOrder;
  componentType?: TFieldsCombinerType;
  size: TFieldSize;
  status: TFieldStatus;
  children: React.ReactNode;
}

export interface IFieldsCombinerItemStyled {
  $combinedButtons?: boolean;
  $width?: React.CSSProperties['width'];
  $order: TFieldsCombinerOrder;
  $componentType?: TFieldsCombinerType;
  $size: TFieldSize;
  $status: TFieldStatus;
}
