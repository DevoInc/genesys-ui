import * as React from 'react';
import { GlobalAttrProps, MouseEventAttrProps } from '../../../declarations';
import { Flex } from '../../Flex';

export interface FieldContainerProps
  extends MouseEventAttrProps,
    Pick<GlobalAttrProps, 'title' | 'role'> {
  children: React.ReactNode;
}

export const FieldContainer: React.FC<FieldContainerProps> = ({
  children,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  role,
  title,
}) => (
  <Flex
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseMove={onMouseMove}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    onMouseUp={onMouseUp}
    alignItems={'stretch'}
    flexDirection={'column'}
    gap={'cmp-xxs'}
    role={role}
    title={title}
  >
    {children}
  </Flex>
);
