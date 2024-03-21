import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Divider, type DividerProps } from '../../../Divider';
import { Flex } from '../../../Flex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsDividerProps extends Omit<DividerProps, 'vertical'> {}

export const TabsDivider: React.FC<TabsDividerProps> = ({
  styles,
  ...dividerProps
}) => {
  const tokens = useTheme().cmp.tabs.divider;
  const baseStyles = `
      margin: 0 ${tokens.space.margin};
      background: ${tokens.color.background};
    `;
  return (
    <Flex.Item alignSelf="center" role="presentation">
      <Divider {...dividerProps} vertical styles={concat(baseStyles, styles)} />
    </Flex.Item>
  );
};
