import * as React from 'react';

import { ButtonProps, HFlex } from '../../index';
import { BannerContainerProps } from './BannerContainer';

export interface BannerActionsProps
  extends Pick<BannerContainerProps, 'status' | 'styles'> {
  actions?: React.ReactElement<ButtonProps>[];
}

export const BannerActions: React.FC<BannerActionsProps> = ({
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
