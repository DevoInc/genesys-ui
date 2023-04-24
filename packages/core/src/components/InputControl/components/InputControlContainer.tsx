import * as React from 'react';

// declarations
import {
  FieldControlCommonProps,
  StyledOverloadCssProps,
} from '../../../declarations';

// components
import { Flex } from '../../';

export interface InputControlContainerProps
  extends Pick<FieldControlCommonProps, 'title'>,
    Pick<
      FieldControlCommonProps,
      | 'onClick'
      | 'onMouseDown'
      | 'onMouseLeave'
      | 'onMouseMove'
      | 'onMouseOut'
      | 'onMouseOver'
      | 'onMouseUp'
    >,
    StyledOverloadCssProps {
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
  title,
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
    title={title}
  >
    {children}
  </Flex>
);