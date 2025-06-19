import * as React from 'react';

import type {
  IFieldControl,
  TControlWidth,
} from '../../../../declarations/commonProps';
import type { IField } from '../../../Field/declarations';
import { Flex } from '../../../Flex';
import type { IDataAttrs } from '../../../../declarations';

export interface InputControlContainerProps
  extends Pick<IField, 'style'>,
    IDataAttrs,
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
  /** Width of the input control based in predefined values as 'xxs', 'xs',
   * 'sm'... etc. or directly in a CSS value. It should reflect the length of
   * the content you expect the user to enter. */
  inputWidth?: TControlWidth;
}

export const InputControlContainer: React.FC<InputControlContainerProps> = ({
  children,
  inputWidth,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  style,
  tooltip,
  ...dataProps
}) => (
  <Flex
    {...dataProps}
    alignItems="stretch"
    flex={inputWidth ? undefined : '1 1 auto'}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseMove={onMouseMove}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    onMouseUp={onMouseUp}
    position="relative"
    style={style}
    tooltip={tooltip}
  >
    {children}
  </Flex>
);
