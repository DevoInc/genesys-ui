import * as React from 'react';

import { HFlex } from '../../HFlex';
import { ButtonProps } from '../../Button';
import { BannerContainerProps } from './BannerContainer';
import { BannerContext } from '../context';

export interface BannerActionsProps
  extends Pick<BannerContainerProps, 'status' | 'styles'> {
  actions?: React.ReactElement<ButtonProps>[];
}

export const BannerActions: React.FC<BannerActionsProps> = ({
  actions,
  styles,
}) => {
  const { status } = React.useContext(BannerContext);
  return (
    <HFlex
      alignItems="center"
      justifyContent="flex-end"
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
};
