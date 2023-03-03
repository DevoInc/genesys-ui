import * as React from 'react';
import styled, { css } from 'styled-components';

import { BADGE_COLOR } from '../constants';
import { StepperSize, StepperStatus } from '../declarations';
import { Badge } from '../../Badge';

interface StyledIndicatorProps {
  size?: StepperSize;
  status: StepperStatus;
  idx: number;
}

export const StyledIndicator = styled(
  ({ idx, size, status, ...props }: StyledIndicatorProps) => {
    const isCompletedStep = status === 'completed';
    return (
      <Badge
        {...props}
        colorScheme={BADGE_COLOR[status]}
        iconName={isCompletedStep ? 'check_thick' : undefined}
        inverse={status === 'current'}
        size={size}
        text={!isCompletedStep ? (idx + 1).toString() : undefined}
      />
    );
  }
)<StyledIndicatorProps>`
  ${({ status }) => css`
    opacity: ${status === 'disabled' ? '0.4' : undefined};
  `};
`;
