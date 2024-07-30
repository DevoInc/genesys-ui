import * as React from 'react';

import { FlexItem, type FlexItemProps } from '../../../Flex/components';

export interface WrapItemProps extends FlexItemProps {}

export const WrapItem: React.FC<WrapItemProps> = ({
  children,
  ...restFlexItemProps
}) => <FlexItem {...restFlexItemProps}>{children}</FlexItem>;
