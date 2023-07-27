import * as React from 'react';

import { StyledOverloadCssPropsWithRecord } from '../../../../declarations';

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

export interface BaseStepperItemProps
  extends StepperItemIndicatorProps,
    StepperItemContainerProps {
  hasDivider?: boolean;
  hiddenStatusText?: StepperItemHiddenStatusProps['children'];
}

export type StepperItemProps = BaseStepperItemProps &
  StyledOverloadCssPropsWithRecord<
    'container' | 'content' | 'divider' | 'indicator'
  >;

export const InternalStepperItem: React.FC<StepperItemProps> = ({
  children,
  hasDivider,
  hiddenStatusText,
  size = 'md',
  status,
  styles,
  subcomponentStyles,
  stepNumberPos,
}) => {
  return (
    <StepperItemContainer styles={subcomponentStyles?.container || styles}>
      {hasDivider && (
        <StepperItemDivider styles={subcomponentStyles?.divider} />
      )}
      <StepperItemIndicator
        stepNumberPos={stepNumberPos}
        size={size}
        status={status}
        styles={subcomponentStyles?.indicator}
      />
      <StepperItemHiddenStatus>{hiddenStatusText}</StepperItemHiddenStatus>
      <StepperItemContent
        size={size}
        status={status}
        styles={subcomponentStyles?.content}
      >
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
