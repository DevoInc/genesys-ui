// https://www.w3.org/WAI/tutorials/forms/multi-page/#using-step-by-step-indicator
// https://designsystem.digital.gov/components/step-indicator/
// https://stackoverflow.com/questions/52932018/making-a-step-progress-indicator-accessible-for-screen-readers

import * as React from 'react';

import { HIDDEN_TEXT } from './constants';

import {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import { WithRequired } from '../../typeFunctions';
import { StepperStatus, StepperSize } from './declarations';

import { StepperContainer, StepperItem } from './components';

export interface StepperProps
  extends WithRequired<Pick<IGlobalAttrs, 'id' | 'tooltip'>, 'id'>,
    WithRequired<
      Pick<IGlobalAriaAttrs, 'aria-label' | 'aria-describedby'>,
      'aria-label'
    >,
    IStyledPolymorphic,
    IStyledOverloadCss {
  /** Stepper size */
  size?: StepperSize;
  /** Stepper model */
  steps: { name: string; label: string; status: StepperStatus }[];
}

export const InternalStepper: React.FC<StepperProps> = ({
  size = 'md',
  steps = [],
  tooltip,
  styles,
  ...nativeProps
}) => (
  <StepperContainer
    {...nativeProps}
    size={size}
    tooltip={tooltip}
    styles={styles}
  >
    {steps.map((el, idx) => (
      <StepperItem
        key={el.name}
        aria-label={`${el.status} ${el.name}`}
        aria-current={el.status === 'current' ? true : undefined}
        hasDivider={idx !== 0}
        hiddenStatusText={HIDDEN_TEXT[el.status]}
        size={size}
        status={el.status}
        stepNumberPos={idx}
      >
        {el.label}
      </StepperItem>
    ))}
  </StepperContainer>
);

export const Stepper = InternalStepper as typeof InternalStepper & {
  Container: typeof StepperContainer;
  Item: typeof StepperItem;
};

Stepper.Container = StepperContainer;
