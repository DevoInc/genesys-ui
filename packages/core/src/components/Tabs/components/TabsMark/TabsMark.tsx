import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import type { IStyledOverloadCss } from '../../../../declarations';
import type { ITabs } from '../../declarations';

import { tabsMarkMixin } from './helpers';

import { Box } from '../../../Box';
import { TabsContext } from '../../context';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsMarkProps
  extends IStyledOverloadCss,
    Pick<ITabs, 'colorScheme'> {}

export const TabsMark = React.forwardRef<HTMLDivElement, TabsMarkProps>(
  ({ colorScheme, styles }, ref) => {
    const theme = useTheme();
    const context = React.useContext(TabsContext);
    const evalColorScheme = colorScheme || context.colorScheme;
    return (
      <Box
        ref={ref}
        role="presentation"
        styles={concat(
          tabsMarkMixin({ colorScheme: evalColorScheme, theme }),
          styles,
        )}
      />
    );
  },
);

TabsMark.displayName = 'TabsMark';
