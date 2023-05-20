import * as React from 'react';
import {
  StepperItemContainer,
  StepperItemContainerProps,
  StepperItemDivider,
  StepperItemHiddenStatus,
  StepperItemHiddenStatusProps,
  StepperItemIndicator,
  StepperItemIndicatorProps,
  StepperItemContent,
} from './components';

export interface StepperItemProps
  extends StepperItemIndicatorProps,
    StepperItemContainerProps {
  hasDivider?: boolean;
  hiddenStatusText?: StepperItemHiddenStatusProps['children'];
}

export const InternalStepperItem: React.FC<StepperItemProps> = ({
  children,
  hasDivider,
  hiddenStatusText,
  size = 'md',
  status,
  stepNumberPos,
}) => {
  return (
    <StepperItemContainer>
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
};

export const StepperItem = InternalStepperItem as typeof InternalStepperItem & {
  Container: typeof StepperItemContainer;
  Content: typeof StepperItemContent;
  Divider: typeof StepperItemDivider;
  HiddenStatus: typeof StepperItemHiddenStatus;
  Indicator: typeof StepperItemIndicator;
};

StepperItem.Container = StepperItemContainer;
StepperItem.Content = StepperItemContent;
StepperItem.Divider = StepperItemDivider;
StepperItem.HiddenStatus = StepperItemHiddenStatus;
StepperItem.Indicator = StepperItemIndicator;
