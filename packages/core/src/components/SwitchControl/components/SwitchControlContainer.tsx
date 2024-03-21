import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import type { ISwitch, TSwitchDiameter, TSwitchHeight } from '../declarations';
import { getPxFromRem } from '../../../helpers';
import { switchControlContainerMixin } from '../helpers';

import { Flex, type FlexProps } from '../../Flex';

export interface SwitchControlContainerProps
  extends FlexProps,
    Pick<ISwitch, 'checked' | 'disabled' | 'size' | 'status'> {
  heightPx: TSwitchHeight;
  handleDiameter: TSwitchDiameter;
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
  id,
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
      id={id ? `${id}-container` : undefined}
      inline
      minWidth={minWidth || `${minWidthPx}px`}
      padding={
        padding ||
        (checked ? `0 ${spaceForHandler}px 0 0` : `0 0 0 ${spaceForHandler}px`)
      }
      position={position}
      styles={concat(
        switchControlContainerMixin({
          checked,
          disabled,
          handleDiameter,
          status,
          theme,
        }),
        styles,
      )}
    >
      {children}
    </Flex>
  );
};
