import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IStyledOverloadCss } from '../../../../declarations';
import type { ITabs } from '../../declarations';
import { tabsMarkMixin } from './helpers';
import { Box } from '../../../Box';
import { TabsContext } from '../../context';
import { mergeStyles } from '../../../../helpers';
import type { Resolve } from '../../../../typeFunctions';

export interface TabsMarkProps
  extends IStyledOverloadCss,
    Pick<ITabs, 'align' | 'colorScheme'> {}

export const TabsMark = React.forwardRef<
  HTMLDivElement,
  Resolve<TabsMarkProps>
>(({ align, colorScheme, style }, ref) => {
  const theme = useTheme();
  const context = React.useContext(TabsContext);
  const evalColorScheme = colorScheme || context.colorScheme;
  const evalAlign = align || context.align;
  return (
    <Box
      ref={ref}
      role="presentation"
      style={mergeStyles(
        tabsMarkMixin({
          align: evalAlign,
          colorScheme: evalColorScheme,
          theme,
        }),
        style,
      )}
    />
  );
});
