import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, FlexProps } from '../../Flex';
import { FieldSize, FieldStatus } from '../../../declarations';
import { getPxFromRem } from '../../../styled/functions';
import {
  switchControlContainerMixin,
  SwitchControlContainerMixinProps,
} from '../helpers';

export interface SwitchControlContainerProps
  extends FlexProps,
    Omit<SwitchControlContainerMixinProps, 'theme'> {
  heightPx: number;
  disabled?: boolean;
  checked?: boolean;
  handleDiameter: number;
  size: FieldSize;
  status: FieldStatus;
}

export const SwitchControlContainer: React.FC<SwitchControlContainerProps> = ({
  alignItems = 'center',
  as = 'label',
  checked,
  children,
  disabled,
  flexDirection,
  handleDiameter,
  height,
  heightPx,
  minWidth,
  padding,
  position = 'relative',
  size,
  status,
  styles,
  ...restFlexProps
}) => {
  const theme = useTheme();
  const switchTokens = theme.cmp.switchControl;
  const trackTokens = switchTokens.track;
  const minWidthPx = getPxFromRem(trackTokens.size.width[size]);
  const offset = +((heightPx - handleDiameter) / 2).toFixed(2);
  const spaceForHandler = handleDiameter + offset * 2;
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      as={as}
      flexDirection={flexDirection || (checked ? 'row' : 'row-reverse')}
      height={height || `${heightPx}px`}
      inline
      minWidth={minWidth || `${minWidthPx}px`}
      padding={
        padding ||
        (checked ? `0 ${spaceForHandler}px 0 0` : `0 0 0 ${spaceForHandler}px`)
      }
      position={position}
      styles={
        styles ||
        switchControlContainerMixin({
          checked,
          disabled,
          handleDiameter,
          status,
          theme,
        })
      }
    >
      {children}
    </Flex>
  );
};
