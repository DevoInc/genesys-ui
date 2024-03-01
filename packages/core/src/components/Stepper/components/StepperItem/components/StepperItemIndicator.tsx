import * as React from 'react';
import { css } from 'styled-components';
import { concat } from 'lodash';

import { BADGE_COLOR } from '../../../constants';
import { StepperSize, StepperStatus } from '../../../declarations';

import { Badge, BadgeProps } from '../../../../Badge';
import { GICheckThick } from '@devoinc/genesys-icons';

export interface StepperItemIndicatorProps extends Omit<BadgeProps, 'size'> {
  size?: StepperSize;
  status?: StepperStatus;
  stepNumberPos?: number;
}

export const StepperItemIndicator: React.FC<StepperItemIndicatorProps> = ({
  colorScheme,
  icon,
  inverse,
  stepNumberPos,
  size,
  status,
  styles,
  text,
  ...restBadgeProps
}) => {
  const baseStyles = css`
    opacity: ${status === 'disabled' ? '0.4' : undefined};
  `;
  const isCompletedStep = status === 'completed';
  return (
    <Badge
      {...restBadgeProps}
      colorScheme={colorScheme || BADGE_COLOR[status]}
      icon={isCompletedStep ? <GICheckThick /> : icon}
      inverse={inverse || status === 'current'}
      size={size}
      styles={concat(baseStyles, styles)}
      text={!isCompletedStep ? (stepNumberPos + 1).toString() : text}
    />
  );
};
