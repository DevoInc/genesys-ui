import * as React from 'react';

import {
  StyledStepperItemContent,
  StyledStepperItemContentProps,
} from './StyledStepperItemContent';
import { StyledOverloadCssProps } from '../../../../../declarations';

export interface StepperItemContentProps
  extends StyledStepperItemContentProps,
    StyledOverloadCssProps {
  children: React.ReactNode;
}

export const StepperItemContent: React.FC<StepperItemContentProps> = ({
  children,
  size,
  status,
  styles,
}) => {
  return (
    <StyledStepperItemContent size={size} status={status} css={styles}>
      {children}
    </StyledStepperItemContent>
  );
};
