import * as React from 'react';
import { useTheme } from 'styled-components';

import { Box, type BoxProps } from '../../../Box';
import { HFlex } from '../../../HFlex';
import type { FlexProps } from '../../../Flex';
import { mergeStyles } from '../../../../helpers';

export interface AppBarContainerProps
  extends Omit<BoxProps, 'elevation' | 'position'>,
    Pick<FlexProps, 'alignItems' | 'justifyContent'> {
  /** If the app bar has a bottom-border */
  bordered?: boolean;
  /** Define the elevation styles of the container */
  sticky?: boolean;
  /** Define some size and space properties of the container */
  compact?: boolean;
}

export const AppBarContainer: React.FC<AppBarContainerProps> = ({
  alignItems = 'center',
  bordered,
  children,
  compact,
  id,
  justifyContent,
  paddingLeft = 'cmp-md',
  paddingRight = 'cmp-md',
  sticky = false,
  style,
  ...boxProps
}) => {
  const theme = useTheme();
  const elevation = sticky ? 'stickyBottom' : 'ground';
  const tabsContainerTokens = useTheme().cmp.tabs.container;

  return (
    <Box
      {...boxProps}
      elevation={elevation}
      id={id ? `${id}__container` : null}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      position="relative"
      style={mergeStyles(
        { backgroundColor: theme.cmp.appBar.color.background },
        bordered
          ? {
              borderBottom: `solid ${theme.alias.shape.borderSize.separator.md} ${theme.alias.color.border.separator.base.weak}`,
            }
          : undefined,
        style,
      )}
    >
      <HFlex
        alignItems={alignItems}
        height={
          compact
            ? `calc(${tabsContainerTokens.size.height.lg} - 2rem)`
            : tabsContainerTokens.size.height.lg
        }
        justifyContent={justifyContent}
      >
        {children}
      </HFlex>
    </Box>
  );
};
