import * as React from 'react';
import { useTheme } from 'styled-components';

import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import {
  partitionsContainerMixin,
  partitionsContainerMixinProps,
} from './helpers';

import { Flex } from '../../Flex';

export interface PartitionsContainerProps
  extends Pick<GlobalAttrProps, 'id' | 'role'>,
    GlobalAriaProps,
    partitionsContainerMixinProps {
  children: React.ReactNode;
}

export const PartitionsContainer: React.FC<PartitionsContainerProps> = ({
  children,
  hasSeparators,
  size = 'md',
  ...restNativeProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restNativeProps}
      as="ul"
      overflow="hidden"
      position="relative"
      styles={partitionsContainerMixin({ hasSeparators, size, theme })}
      width="100%"
    >
      {children}
    </Flex>
  );
};
