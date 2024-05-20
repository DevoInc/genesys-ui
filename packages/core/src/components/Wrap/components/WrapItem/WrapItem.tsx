import * as React from 'react';

import { FlexItem, type FlexItemProps } from '../../../Flex/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WrapItemProps extends FlexItemProps {}

export const WrapItem: React.FC<WrapItemProps> = ({
  children,
  ...restFlexItemProps
}) => {
  return <FlexItem {...restFlexItemProps}>{children}</FlexItem>;
};
