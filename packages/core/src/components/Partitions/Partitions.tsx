import * as React from 'react';

// styled
import {
  StyledPartitionsWrapper,
  StyledPartitionsItem,
  StyledPartitionsItemProps,
  StyledPartitionsWrapperProps,
} from './styled';

export interface PartitionsProps
  extends StyledPartitionsWrapperProps,
    Pick<StyledPartitionsItemProps, 'hasSeparators'> {
  /** Data for the partitions: array of objects with value (0-1) and color. */
  data: { value: number; color: string; tooltip: string }[];
  /** If there are separators between the partition items */
  hasSeparators?: boolean;
}

export const Partitions: React.FC<PartitionsProps> = ({
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
    <StyledPartitionsWrapper {...nativeProps} size={size}>
      {data &&
        data.length > 0 &&
        data.map((part, idx) => (
          <StyledPartitionsItem
            aria-label={part.tooltip || part.value}
            hasSeparators={hasSeparators}
            key={idx}
            size={size}
            tooltip={part.tooltip}
            title={part.tooltip}
            $color={part.color}
            $width={part.value}
          />
        ))}
    </StyledPartitionsWrapper>
  );
};
