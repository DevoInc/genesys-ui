import * as React from 'react';

import { PartitionsContainerProps } from './components';
import { PartitionsContainer, PartitionsItem } from './components';

export interface PartitionsProps extends PartitionsContainerProps {
  /** Data for the partitions: array of objects with value (0-1) and color. */
  data: { value: number; color: string; tooltip: string }[];
}

const InternalPartitions: React.FC<PartitionsProps> = ({
  size = 'md',
  hasSeparators,
  data = [
    { value: 0.4, color: '#D62433' },
    { value: 0.2, color: '#F7B94F' },
    { value: 0.3, color: '#53BAED' },
    { value: 0.1, color: '#03855A' },
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
  Container: typeof PartitionsContainer;
  Item: typeof PartitionsItem;
};

Partitions.Container = PartitionsContainer;
Partitions.Item = PartitionsItem;
