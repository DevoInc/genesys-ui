import * as React from 'react';

import { FlexItem, type FlexItemProps } from '../../../Flex/components';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HFlexItemProps extends FlexItemProps {}

export const HFlexItem: React.FC<HFlexItemProps> = ({
  children,
  ...restFlexItemProps
}) => {
  return <FlexItem {...restFlexItemProps}>{children}</FlexItem>;
};
