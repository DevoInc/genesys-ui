import * as React from 'react';

import type { PartitionsContainerProps } from './components';
import { PartitionsContainer, PartitionsItem } from './components';

export interface PartitionsProps extends PartitionsContainerProps {
  /** Data for the partitions: array of objects with value (0-1) and color. */
  data: { value: number; color: string; tooltip: string }[];
}

const InternalPartitions: React.FC<PartitionsProps> = ({
  size = 'md',
  hasSeparators,
  data = [
    { value: 0.4, color: 'error' },
    { value: 0.2, color: 'warning' },
    { value: 0.3, color: 'info' },
    { value: 0.1, color: 'success' },
  ],
  ...nativeProps
}) => {
  return (
    <PartitionsContainer
      {...nativeProps}
      hasSeparators={hasSeparators}
      size={size}
    >
      {data &&
        data.length > 0 &&
        data.map((part, idx) => (
          <PartitionsItem
            aria-label={part.tooltip || part.value}
            key={idx}
            size={size}
            tooltip={part.tooltip}
            color={part.color}
            width={part.value}
          />
        ))}
    </PartitionsContainer>
  );
};

export const Partitions = InternalPartitions as typeof InternalPartitions & {
  _Container: typeof PartitionsContainer;
  _Item: typeof PartitionsItem;
};

Partitions._Container = PartitionsContainer;
Partitions._Item = PartitionsItem;

InternalPartitions.displayName = 'Partitions';
Partitions._Container.displayName = 'Partitions._Container';
Partitions._Item.displayName = 'Partitions._Item';
