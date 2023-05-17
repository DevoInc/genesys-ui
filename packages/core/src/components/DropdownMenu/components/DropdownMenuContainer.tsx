import * as React from 'react';

import { BoxProps } from '../../';

import { StyledDropdownMenuContainer } from './StyledDropdownMenuContainer';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DropdownMenuContainerProps extends BoxProps {}

export const DropdownMenuContainer: React.FC<DropdownMenuContainerProps> =
  React.forwardRef<HTMLElement, DropdownMenuContainerProps>(
    (
      {
        children,
        maxWidth = '32rem',
        minWidth = '24rem',
        padding = 'cmp-xs',
        ...boxProps
      },
      ref
    ) => (
      <StyledDropdownMenuContainer
        {...boxProps}
        elevation="activated"
        maxWidth={maxWidth}
        minWidth={minWidth}
        padding={padding}
        ref={ref}
      >
        {children}
      </StyledDropdownMenuContainer>
    )
  );

DropdownMenuContainer.displayName = 'DropdownMenuContainer';
