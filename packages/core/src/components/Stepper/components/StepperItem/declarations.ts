import * as React from 'react';
import type { StepperSize, StepperStatus } from '../../declarations';
import type { IStyledOverloadCss } from '../../../../declarations';

export interface IStepperItem extends IStyledOverloadCss {
  hasDivider?: boolean;
  hiddenStatusText?: string;
  children?: React.ReactNode;
  size?: StepperSize;
  status: StepperStatus;
  stepNumberPos?: number;
}
