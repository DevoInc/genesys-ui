import * as React from 'react';
import { Flex, FlexProps } from '../../../Flex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToolbarItemProps extends FlexProps {}

export const ToolbarItem: React.FC<ToolbarItemProps> = ({
  children,
  ...flexProps
}) => {
  return <Flex {...flexProps}>{children}</Flex>;
};
