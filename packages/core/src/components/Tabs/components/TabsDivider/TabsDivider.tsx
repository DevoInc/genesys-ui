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
  const bgStyles = `
      background: ${tokens.color.background};
    `;
  const marginStyles = margin
    ? null
    : `
      margin: ${!margin ? `0 ${tokens.space.margin}` : undefined};
    `;
  return (
    <Flex.Item alignSelf="center" role="presentation" display="inline-flex">
      <Divider
        {...dividerProps}
        margin={margin}
        vertical
        style={mergeStyles(bgStyles, marginStyles, style)}
      />
    </Flex.Item>
  );
};
