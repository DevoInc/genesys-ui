import * as React from 'react';
import { useTheme } from 'styled-components';

import { GIAngleRight } from '@devoinc/genesys-icons';

import { Icon, type IconProps } from '../../../../../Icon';

export interface StepperItemDividerProps extends Omit<IconProps, 'children'> {}

export const StepperItemDivider: React.FC<StepperItemDividerProps> = ({
  style,
  ...restIconProps
}) => {
  const theme = useTheme();
  return (
    <Icon
      {...restIconProps}
      style={{
        color: theme.cmp.stepper.separator.color.background,
        marginRight: theme.cmp.stepper.separator.space.marginHor,
        ...style,
      }}
    >
      <GIAngleRight />
    </Icon>
  );
};
