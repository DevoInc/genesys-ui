import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Flex, type FlexProps } from '../../../Flex';
import type { ITabs } from '../../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsContainerProps extends FlexProps, ITabs {}

export const TabsContainer = React.forwardRef<HTMLElement, TabsContainerProps>(
  ({ children, contained, size, styles, ...restFlexProps }, ref) => {
    const tokens = useTheme().cmp.tabs.container;
    const baseStyles = css`
      ${contained &&
      css`
        min-height: ${tokens.size.height[size]};
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
        as="nav"
        position="relative"
        ref={ref}
        styles={concat(baseStyles, styles)}
      >
        {children}
      </Flex>
    );
  },
);

TabsContainer.displayName = 'TabsContainer';
