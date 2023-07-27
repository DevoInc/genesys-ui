// https://www.w3.org/WAI/tutorials/forms/multi-page/#using-step-by-step-indicator
// https://designsystem.digital.gov/components/step-indicator/
// https://stackoverflow.com/questions/52932018/making-a-step-progress-indicator-accessible-for-screen-readers

import * as React from 'react';

import { HIDDEN_TEXT } from './constants';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledOverloadCssPropsWithRecord,
  StyledPolymorphicProps,
} from '../../declarations';
import { WithRequired } from '../../typeFunctions';
import { StepperStatus, StepperSize } from './declarations';

import { StepperContainer, StepperItem } from './components';

export interface BaseStepperProps
  extends WithRequired<Pick<GlobalAttrProps, 'id' | 'tooltip'>, 'id'>,
    WithRequired<
      Pick<GlobalAriaProps, 'aria-label' | 'aria-describedby'>,
      'aria-label'
    >,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  /** Stepper size */
  size?: StepperSize;
  /** Stepper model */
  steps: { name: string; label: string; status: StepperStatus }[];
}

export type StepperProps = BaseStepperProps &
  StyledOverloadCssPropsWithRecord<'container' | 'item'>;

export const InternalStepper: React.FC<StepperProps> = ({
  size = 'sm',
  steps = [],
  tooltip,
  styles,
  subcomponentStyles,
  ...nativeProps
}) => (
  <StepperContainer
    {...nativeProps}
    size={size}
    tooltip={tooltip}
    styles={subcomponentStyles?.container || styles}
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
        styles={subcomponentStyles?.item}
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
