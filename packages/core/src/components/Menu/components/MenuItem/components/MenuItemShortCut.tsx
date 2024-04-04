import * as React from 'react';

import type { CaptionProps } from '../../../../Typography/components/block';

import { Flex } from '../../../../Flex';
import { Typography } from '../../../../Typography';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MenuItemShortCutProps extends Pick<CaptionProps, 'children'> {}

export const MenuItemShortCut: React.FC<MenuItemShortCutProps> = ({
  children,
}) => (
  <Flex marginLeft="auto" alignItems="center" as="span">
    <Typography.Caption colorScheme="weak">{children}</Typography.Caption>
  </Flex>
);
