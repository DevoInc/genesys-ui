import * as React from 'react';
import { css } from 'styled-components';

import { GICheckThick } from '@devoinc/genesys-icons';

import { STEPPER_BADGE_COLOR_MAP } from '../../../../constants';
import type { IStepperItem } from '../../declarations';
import { Badge, type BadgeProps } from '../../../../../Badge';
import { mergeStyles } from '../../../../../../helpers';

export interface StepperItemIndicatorProps
  extends Omit<BadgeProps, 'size'>,
    Pick<IStepperItem, 'stepNumberPos' | 'size' | 'status'> {}

export const StepperItemIndicator: React.FC<StepperItemIndicatorProps> = ({
  colorScheme,
  icon,
  inverse,
  stepNumberPos,
  size,
  status = 'pending',
  style,
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
      colorScheme={colorScheme || STEPPER_BADGE_COLOR_MAP[status]}
      icon={isCompletedStep ? <GICheckThick /> : icon}
      inverse={inverse || status === 'current'}
      size={size}
      style={mergeStyles(baseStyles, style)}
      text={!isCompletedStep ? (stepNumberPos + 1).toString() : text}
    />
  );
};
