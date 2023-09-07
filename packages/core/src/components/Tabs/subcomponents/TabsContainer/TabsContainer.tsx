import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Flex, FlexProps } from '../../../Flex';

export interface TabsContainerProps extends Omit<FlexProps, 'children'> {
  /** Adjust the appearance of the TabsContainer */
  contained?: boolean;
  children?: React.ReactNode;
}

export const TabsContainer = React.forwardRef<HTMLElement, TabsContainerProps>(
  ({ children, contained, styles, ...restFlexProps }, ref) => {
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
        as="nav"
        role="tablist"
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
