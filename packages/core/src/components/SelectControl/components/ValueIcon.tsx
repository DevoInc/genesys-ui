import * as React from 'react';

import { ChipIconProps } from '../../Chip/components';

import { SelectControlContext } from '../context';

import { Icon, IconProps } from '../../Icon';

export interface ValueIconProps
  extends Omit<IconProps, 'size'>,
    Pick<ChipIconProps, 'size'> {}

export const ValueIcon: React.FC<ValueIconProps> = ({ ...restIconProps }) => {
  const context = React.useContext(SelectControlContext);
  return <Icon {...context} {...restIconProps} />;
};
