import * as React from 'react';

import { CHIP_REMOVE_BUTTON_SIZE_MAP } from '../../constants';
import { ChipContext } from '../../context';
import { useTheme } from 'styled-components';

import {
  IconButtonRemove,
  type IconButtonRemoveProps,
} from '../../../IconButton';

export interface ChipRemoveButtonProps extends IconButtonRemoveProps {}

export const ChipRemoveButton: React.FC<ChipRemoveButtonProps> = ({
  size = 'md',
  ...restIconButtonProps
}) => {
  const context = React.useContext(ChipContext);
  const tokens = useTheme().cmp.chip.icon;
  return (
    <IconButtonRemove
      {...context}
      {...restIconButtonProps}
      size={CHIP_REMOVE_BUTTON_SIZE_MAP[size]}
      style={`margin-left: calc(${tokens.space.margin[size]} * 2);`}
    />
  );
};
