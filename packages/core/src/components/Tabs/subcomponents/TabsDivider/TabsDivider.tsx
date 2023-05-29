import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { StyledOverloadCssProps } from '../../../../declarations';

import { Divider, DividerProps } from '../../../Divider';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsDividerProps
  extends DividerProps,
    StyledOverloadCssProps {}

export const TabsDivider: React.FC<TabsDividerProps> = ({
  styles,
  ...dividerProps
}) => {
  const tokens = useTheme().cmp.tabs.divider;
  const baseStyles = `
      margin: 0 ${tokens.space.margin};
      background: ${tokens.color.background};
    `;
  return <Divider {...dividerProps} styles={concat(baseStyles, styles)} />;
};
