import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { Flex, type FlexProps } from '../../../Flex';
import type { ITabs } from '../../declarations';
import { mergeStyles } from '../../../../helpers';
import { Resolve } from '../../../../typeFunctions';

export interface TabsContainerProps extends FlexProps, ITabs {}

export const TabsContainer = React.forwardRef<
  HTMLDivElement,
  Resolve<TabsContainerProps>
>(({ children, contained, style, ...restFlexProps }, ref) => {
  const tokens = useTheme().cmp.tabs.container;
  const baseStyles = css`
    ${contained &&
    css`
      padding: 0 ${tokens.space.padding};
      background: ${tokens.color.background};
      box-shadow:
        inset 0 ${tokens.shape.borderSize} 0 ${tokens.color.border},
        inset 0 -${tokens.shape.borderSize} 0 ${tokens.color.border};
    `}
  `;
  return (
    <Flex
      {...restFlexProps}
      ref={ref}
      as="nav"
      position="relative"
      style={mergeStyles(baseStyles, style)}
    >
      {children}
    </Flex>
  );
});
