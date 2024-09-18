import * as React from 'react';
import { useTheme } from 'styled-components';

import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
} from '../../../../declarations';
import { partitionsContainerMixin } from './helpers';
import type { IPartitions } from '../../declarations';
import { Flex } from '../../../Flex';
import { mergeStyles } from '../../../../helpers';

export interface PartitionsContainerProps
  extends Pick<IGlobalAttrs, 'id' | 'role'>,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    Pick<IPartitions, 'hasSeparators' | 'size'> {
  children: React.ReactNode;
}

export const PartitionsContainer: React.FC<PartitionsContainerProps> = ({
  children,
  hasSeparators,
  size = 'md',
  style,
  ...restNativeProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...restNativeProps}
      as="ul"
      overflow="hidden"
      position="relative"
      style={mergeStyles(
        partitionsContainerMixin({ hasSeparators, size, theme }),
        style,
      )}
      width="100%"
    >
      {children}
    </Flex>
  );
};
