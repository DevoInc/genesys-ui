import * as React from 'react';

import { ChipGroupContext } from '../context';

import { Chip, ChipProps } from '../../Chip';

export interface ChipGroupChipProps extends ChipProps {}

export const ChipGroupChip: React.FC<ChipGroupChipProps> = ({
  children,
  ...restButtonProps
}) => {
  const context = React.useContext(ChipGroupContext);
  return (
    <Chip {...context} {...restButtonProps}>
      {children}
    </Chip>
  );
};
