import * as React from 'react';
import {
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
} from '../../../declarations';
import { Flex } from '../../Flex';

export interface FieldContainerProps
  extends MouseEventAttrProps,
    StyledOverloadCssProps,
    Pick<GlobalAttrProps, 'tooltip' | 'role'> {
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
  styles,
  tooltip,
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
    styles={styles}
    tooltip={tooltip}
  >
    {children}
  </Flex>
);
