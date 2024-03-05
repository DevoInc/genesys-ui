import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import type {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
} from '../../../declarations';
import { partitionsContainerMixin } from './helpers';

import type { IPartitions } from '../declarations';
import { Flex } from '../../Flex';

export interface PartitionsContainerProps
  extends Pick<GlobalAttrProps, 'id' | 'role'>,
    GlobalAriaProps,
    StyledOverloadCssProps,
    Pick<IPartitions, 'hasSeparators' | 'size'> {
  children: React.ReactNode;
}

export const PartitionsContainer: React.FC<PartitionsContainerProps> = ({
  children,
  hasSeparators,
  size = 'md',
  styles,
  ...restNativeProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restNativeProps}
      as="ul"
      overflow="hidden"
      position="relative"
      styles={concat(
        partitionsContainerMixin({ hasSeparators, size, theme }),
        styles,
      )}
      width="100%"
    >
      {children}
    </Flex>
  );
};
