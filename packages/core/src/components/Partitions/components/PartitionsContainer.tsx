import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
} from '../../../declarations';
import {
  partitionsContainerMixin,
  partitionsContainerMixinProps,
} from './helpers';

import { Flex } from '../../Flex';
import { concat } from 'lodash';

export interface PartitionsContainerProps
  extends Pick<GlobalAttrProps, 'id' | 'role'>,
    GlobalAriaProps,
    StyledOverloadCssProps,
    partitionsContainerMixinProps {
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
        styles
      )}
      width="100%"
    >
      {children}
    </Flex>
  );
};
