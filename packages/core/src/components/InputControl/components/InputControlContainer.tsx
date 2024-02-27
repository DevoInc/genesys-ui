import * as React from 'react';

// declarations
import type { StyledOverloadCssProps } from '../../../declarations/styled';
import type { FieldControlCommonProps } from '../../../declarations/commonProps';

// components
import { Flex } from '../../Flex';

export interface InputControlContainerProps
  extends Pick<FieldControlCommonProps, 'tooltip'>,
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
