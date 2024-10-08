import * as React from 'react';

import { Typography } from '../../../../../Typography';

export interface StepperItemHiddenStatusProps {
  children: string;
}

export const StepperItemHiddenStatus: React.FC<
  StepperItemHiddenStatusProps
> = ({ children }) => <Typography.SrOnly>{children}</Typography.SrOnly>;
