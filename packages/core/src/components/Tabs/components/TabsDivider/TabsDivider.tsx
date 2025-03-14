import * as React from 'react';
import { useTheme } from 'styled-components';

import { Divider, type DividerProps } from '../../../Divider';
import { Flex } from '../../../Flex';
import { mergeStyles } from '../../../../helpers';

export interface TabsDividerProps extends Omit<DividerProps, 'vertical'> {}

export const TabsDivider: React.FC<TabsDividerProps> = ({
  margin,
  style,
  ...dividerProps
}) => {
  const tokens = useTheme().cmp.tabs.divider;
  const baseStyles = `
      margin: ${!margin && `0 ${tokens.space.margin}`};
      background: ${tokens.color.background};
    `;
  return (
    <Flex.Item alignSelf="center" role="presentation">
      <Divider
        {...dividerProps}
        margin={margin}
        vertical
        style={mergeStyles(baseStyles, style)}
      />
    </Flex.Item>
  );
};
