import * as React from 'react';

import type { IFieldControl } from '../../../declarations/commonProps';
import type { IField } from '../../Field/declarations';

import { Flex } from '../../Flex';

export interface InputControlContainerProps
  extends Pick<IField, 'styles'>,
    Pick<
      IFieldControl,
      | 'onClick'
      | 'onMouseDown'
      | 'onMouseLeave'
      | 'onMouseMove'
      | 'onMouseOut'
      | 'onMouseOver'
      | 'onMouseUp'
      | 'tooltip'
    > {
  children: React.ReactNode;
}

export const InputControlContainer: React.FC<InputControlContainerProps> = ({
  children,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  styles,
  tooltip,
}) => (
  <Flex
    alignItems="stretch"
    flex="1 1 auto"
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseMove={onMouseMove}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    onMouseUp={onMouseUp}
    position="relative"
    styles={styles}
    tooltip={tooltip}
  >
    {children}
  </Flex>
);
