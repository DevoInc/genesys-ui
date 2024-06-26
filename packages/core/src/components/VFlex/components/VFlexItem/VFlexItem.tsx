import * as React from 'react';

import { FlexItem, type FlexItemProps } from '../../../Flex/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VFlexItemProps extends FlexItemProps {}

export const VFlexItem: React.FC<VFlexItemProps> = ({
  children,
  ...restFlexItemProps
}) => {
  return <FlexItem {...restFlexItemProps}>{children}</FlexItem>;
};
