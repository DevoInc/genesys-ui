// https://www.w3.org/WAI/tutorials/forms/multi-page/#using-step-by-step-indicator
// https://designsystem.digital.gov/components/step-indicator/
// https://stackoverflow.com/questions/52932018/making-a-step-progress-indicator-accessible-for-screen-readers
import * as React from 'react';

import { HIDDEN_TEXT } from './constants';
import type { WithRequired } from '../../typeFunctions';
import type {
  IDataAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILayoutBox,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import type { TStepperStatus, TStepperSize } from './declarations';
import { StepperContainer, StepperItem } from './components';

export interface StepperProps
  extends WithRequired<Pick<IGlobalAttrs, 'id' | 'tooltip'>, 'id'>,
    WithRequired<
      Pick<IGlobalAriaAttrs, 'aria-label' | 'aria-describedby'>,
      'aria-label'
    >,
    IDataAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss,
    Pick<ILayoutBox, 'padding'> {
  /** Stepper size */
  size?: TStepperSize;
  /** Stepper model */
  steps: { name: string; label: string; status: TStepperStatus }[];
}

export const InternalStepper: React.FC<StepperProps> = ({
  size = 'md',
  steps = [],
  padding,
  tooltip,
  style,
  ...nativeProps
}) => (
  <StepperContainer
    {...nativeProps}
    padding={padding}
    size={size}
    tooltip={tooltip}
    style={style}
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
  _Container: typeof StepperContainer;
  _Item: typeof StepperItem;
};

Stepper._Container = StepperContainer;
Stepper._Item = StepperItem;

InternalStepper.displayName = 'Stepper';
Stepper._Container.displayName = 'Stepper.Container';
Stepper._Item.displayName = 'Stepper.Item';
