import * as React from 'react';
import type { IField } from '../declarations';
import { Flex } from '../../Flex';
export interface FieldContainerProps
  extends Pick<
    IField,
    | 'as'
    | 'onClick'
    | 'onMouseDown'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onMouseOut'
    | 'onMouseOver'
    | 'onMouseUp'
    | 'role'
    | 'styles'
    | 'tooltip'
  > {
  children?: React.ReactNode;
}

export const FieldContainer: React.FC<FieldContainerProps> = ({
  children,
  ...restProps
}) => (
  <Flex
    {...restProps}
    alignItems={'stretch'}
    flexDirection={'column'}
    gap={'cmp-xxs'}
  >
    {children}
  </Flex>
);
