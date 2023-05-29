import * as React from 'react';
import { useTheme, css } from 'styled-components';
import { concat } from 'lodash';

import { Icon, IconProps } from '../../../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StepperItemDividerProps extends Omit<IconProps, 'iconId'> {}

export const StepperItemDivider: React.FC<StepperItemDividerProps> = ({
  styles,
  ...restIconProps
}) => {
  const theme = useTheme();
  const baseStyles = css`
    color: ${theme.cmp.stepper.separator.color.background};
    margin-right: ${theme.cmp.stepper.separator.space.marginHor};
  `;
  return (
    <Icon
      {...restIconProps}
      iconId="gi-arrow_right"
      styles={concat(baseStyles, styles)}
    />
  );
};
