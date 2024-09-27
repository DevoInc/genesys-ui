import * as React from 'react';

import { FlexItem, type FlexItemProps } from '../../../Flex/components';

export interface HFlexItemProps extends FlexItemProps {}

export const HFlexItem: React.FC<HFlexItemProps> = ({
  children,
  ...restFlexItemProps
}) => <FlexItem {...restFlexItemProps}>{children}</FlexItem>;
