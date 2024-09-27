import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IStyledOverloadCss } from '../../../../declarations';
import type { ITabs } from '../../declarations';
import { tabsMarkMixin } from './helpers';
import { Box } from '../../../Box';
import { TabsContext } from '../../context';
import { mergeStyles } from '../../../../helpers';

export interface TabsMarkProps
  extends IStyledOverloadCss,
    Pick<ITabs, 'colorScheme'> {}

export const TabsMark = React.forwardRef<HTMLDivElement, TabsMarkProps>(
  ({ colorScheme, style }, ref) => {
    const theme = useTheme();
    const context = React.useContext(TabsContext);
    const evalColorScheme = colorScheme || context.colorScheme;
    return (
      <Box
        ref={ref}
        role="presentation"
        style={mergeStyles(
          tabsMarkMixin({ colorScheme: evalColorScheme, theme }),
          style,
        )}
      />
    );
  },
);

TabsMark.displayName = 'TabsMark';
