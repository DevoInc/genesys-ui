import * as React from 'react';
import { StyledFieldAddon } from './StyledFieldAddon';
import { MouseEventAttrProps } from '../../../declarations';
import { Flex } from '../../Flex';

export interface FieldContainerProps extends MouseEventAttrProps {
  children: React.ReactNode;
}

export const FieldContainer: React.FC<FieldContainerProps> = ({
  children,
  position = 'left',
  disabled,
  size = 'md',
  ...styledProps
}) => (
  <Flex
    {...mouseEventAttrProps}
    alignItems={'stretch'}
    flexDirection={'column'}
    gap={'cmp-xxs'}
    role={role}
    title={title}
  >
    {children}
  </Flex>
);
