import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import { chipIconMixin } from '../helpers';

import { ChipContainerProps } from '../components';
import { Icon, IconProps } from '../../Icon';

export interface ChipIconProps
  extends Pick<IconProps, 'strong' | 'iconId' | 'styles'>,
    Pick<ChipContainerProps, 'size'> {}

export const ChipIcon: React.FC<ChipIconProps> = ({
  iconId,
  size = 'md',
  strong,
  styles,
}) => {
  const tokens = useTheme().cmp.chip.icon;
  return (
    <Icon
      iconId={iconId}
      strong={strong}
      styles={concat(chipIconMixin({ size, tokens }), styles)}
    />
  );
};
