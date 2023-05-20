import * as React from 'react';

import {
  StyledStepperItemContent,
  StyledStepperItemContentProps,
} from './StyledStepperItemContent';

export interface StepperItemContentProps extends StyledStepperItemContentProps {
  children: React.ReactNode;
}

export const StepperItemContent: React.FC<StepperItemContentProps> = ({
  children,
  size,
  status,
}) => {
  return (
    <StyledStepperItemContent size={size} status={status}>
      {children}
    </StyledStepperItemContent>
  );
};
