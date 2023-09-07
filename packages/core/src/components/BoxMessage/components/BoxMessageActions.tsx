import * as React from 'react';

import { ButtonProps, HFlex } from '../../index';
import { BoxMessageContainerProps } from './BoxMessageContainer';

export interface BoxMessageActionsProps
  extends Pick<BoxMessageContainerProps, 'status' | 'styles'> {
  actions?: React.ReactElement<ButtonProps>[];
}

export const BoxMessageActions: React.FC<BoxMessageActionsProps> = ({
  actions,
  styles,
  status,
}) => (
  <HFlex
    alignItems="center"
    justifyContent="flex-end"
    marginTop="cmp-sm"
    spacing="cmp-xs"
    styles={styles}
  >
    {React.Children.map(
      actions,
      (action, idx) =>
        action &&
        React.cloneElement(action, {
          key: idx,
          size: action.props.size || 'sm',
          colorScheme: action.props.colorScheme || status,
        }),
    )}
  </HFlex>
);
