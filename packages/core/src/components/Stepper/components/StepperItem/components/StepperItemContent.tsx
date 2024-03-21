import * as React from 'react';

import type { IStepperItem } from '../declarations';

import { StyledStepperItemContent } from './StyledStepperItemContent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StepperItemContentProps
  extends Pick<IStepperItem, 'children' | 'size' | 'status' | 'styles'> {}

export const StepperItemContent: React.FC<StepperItemContentProps> = ({
  children,
  size,
  status = 'pending',
  styles,
}) => {
  return (
    <StyledStepperItemContent size={size} status={status} css={styles}>
      {children}
    </StyledStepperItemContent>
  );
};
