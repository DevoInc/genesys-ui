import * as React from 'react';

import type { IStepperItem } from './declarations';
import {
  StepperItemContainer,
  StepperItemDivider,
  StepperItemHiddenStatus,
  StepperItemIndicator,
  StepperItemContent,
} from './components';

export interface StepperItemProps
  extends Pick<
    IStepperItem,
    | 'children'
    | 'hasDivider'
    | 'hiddenStatusText'
    | 'stepNumberPos'
    | 'size'
    | 'status'
    | 'style'
  > {}

export const InternalStepperItem: React.FC<StepperItemProps> = ({
  children,
  hasDivider = true,
  hiddenStatusText,
  size = 'md',
  status = 'pending',
  style,
  stepNumberPos = 0,
}) => (
  <StepperItemContainer style={style}>
    {hasDivider && <StepperItemDivider />}
    <StepperItemIndicator
      stepNumberPos={stepNumberPos}
      size={size}
      status={status}
    />
    <StepperItemHiddenStatus>{hiddenStatusText}</StepperItemHiddenStatus>
    <StepperItemContent size={size} status={status}>
      {children}
    </StepperItemContent>
  </StepperItemContainer>
);

export const StepperItem = InternalStepperItem as typeof InternalStepperItem & {
  _Container: typeof StepperItemContainer;
  _Content: typeof StepperItemContent;
  _Divider: typeof StepperItemDivider;
  _HiddenStatus: typeof StepperItemHiddenStatus;
  _Indicator: typeof StepperItemIndicator;
};

StepperItem._Container = StepperItemContainer;
StepperItem._Content = StepperItemContent;
StepperItem._Divider = StepperItemDivider;
StepperItem._HiddenStatus = StepperItemHiddenStatus;
StepperItem._Indicator = StepperItemIndicator;

InternalStepperItem.displayName = 'StepperItem';
StepperItem._Container.displayName = 'StepperItem._Container';
StepperItem._Content.displayName = 'StepperItem._Content';
StepperItem._Divider.displayName = 'StepperItem._Divider';
StepperItem._HiddenStatus.displayName = 'StepperItem._HiddenStatus';
StepperItem._Indicator.displayName = 'StepperItem._Indicator';
