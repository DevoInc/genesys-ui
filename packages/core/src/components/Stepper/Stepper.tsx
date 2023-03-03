// https://www.w3.org/WAI/tutorials/forms/multi-page/#using-step-by-step-indicator
// https://designsystem.digital.gov/components/step-indicator/
// https://stackoverflow.com/questions/52932018/making-a-step-progress-indicator-accessible-for-screen-readers

import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';
import { WithRequired } from '../../typeFunctions';
import { StepperStatus, StepperSize } from './declarations';
import { HIDDEN_TEXT } from './constants';

// styled
import {
  StyledContainer,
  StyledHiddenStatus,
  StyledIndicator,
  StyledItem,
  StyledLabel,
  StyledSeparator,
} from './styled';

export interface StepperProps
  extends WithRequired<Pick<GlobalAttrProps, 'id' | 'title'>, 'id'>,
    WithRequired<
      Pick<GlobalAriaProps, 'aria-label' | 'aria-describedby'>,
      'aria-label'
    >,
    StyledPolymorphicProps {
  /** Stepper size */
  size?: StepperSize;
  /** Stepper model */
  steps: { name: string; label: string; status: StepperStatus }[];
}

export const Stepper: React.FC<StepperProps> = ({
  size = 'sm',
  steps = [],
  ...nativeProps
}) => (
  <StyledContainer {...nativeProps} size={size}>
    {steps.map((el, idx) => (
      <StyledItem
        key={el.name}
        aria-label={`${el.status} ${el.name}`}
        aria-current={el.status === 'current' ? true : undefined}
      >
        {idx !== 0 && <StyledSeparator />}
        <StyledIndicator idx={idx} size={size} status={el.status} />
        <StyledHiddenStatus>{HIDDEN_TEXT[el.status]}</StyledHiddenStatus>
        <StyledLabel size={size} status={el.status}>
          {el.label}
        </StyledLabel>
      </StyledItem>
    ))}
  </StyledContainer>
);
