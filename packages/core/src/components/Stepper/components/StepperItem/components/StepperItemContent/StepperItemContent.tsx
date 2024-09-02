import * as React from 'react';

import type { IStepperItem } from '../../declarations';
import { StyledStepperItemContent } from './StyledStepperItemContent';

export interface StepperItemContentProps
  extends Pick<IStepperItem, 'children' | 'size' | 'status' | 'style'> {}

export const StepperItemContent: React.FC<StepperItemContentProps> = ({
  children,
  size,
  status = 'pending',
  style,
}) => (
  <StyledStepperItemContent $size={size} $status={status} css={style}>
    {children}
  </StyledStepperItemContent>
);
