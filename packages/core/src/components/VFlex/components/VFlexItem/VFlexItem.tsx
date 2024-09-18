import * as React from 'react';

import { FlexItem, type FlexItemProps } from '../../../Flex/components';

export interface VFlexItemProps extends FlexItemProps {}

export const VFlexItem: React.FC<VFlexItemProps> = ({
  children,
  ...restFlexItemProps
}) => <FlexItem {...restFlexItemProps}>{children}</FlexItem>;
