import * as React from 'react';
import { useTheme } from 'styled-components';

import type {
  ISwitch,
  TSwitchDiameter,
  TSwitchHeight,
} from '../../declarations';
import { getPxFromRem, mergeStyles } from '../../../../helpers';
import { switchControlContainerMixin } from '../../helpers';
import { Flex, type FlexProps } from '../../../Flex';

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
  style,
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
      style={mergeStyles(
        switchControlContainerMixin({
          checked,
          disabled,
          handleDiameter,
          status,
          theme,
        }),
        style,
      )}
    >
      {children}
    </Flex>
  );
};
