import * as React from 'react';
import type { TStepperSize, TStepperStatus } from '../../declarations';
import type { IStyledOverloadCss } from '../../../../declarations';

export interface IStepperItem extends IStyledOverloadCss {
  hasDivider?: boolean;
  hiddenStatusText?: string;
  children?: React.ReactNode;
  size?: TStepperSize;
  status: TStepperStatus;
  stepNumberPos?: number;
}
