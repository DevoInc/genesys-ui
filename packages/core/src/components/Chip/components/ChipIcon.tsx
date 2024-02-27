import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { chipIconMixin } from '../helpers';

import { ChipContext } from '../context';

import { Icon, type IconProps } from '../../Icon';
import type { ChipContainerProps } from '../components/ChipContainer';

export interface ChipIconProps
  extends Omit<IconProps, 'size'>,
    Pick<ChipContainerProps, 'size'> {}

export const ChipIcon: React.FC<ChipIconProps> = ({
  size = 'md',
  styles,
  ...restIconProps
}) => {
  const tokens = useTheme().cmp.chip.icon;
  const context = React.useContext(ChipContext);
  return (
    <Icon
      {...context}
      {...restIconProps}
      styles={concat(chipIconMixin({ size, tokens }), styles)}
    />
  );
};
