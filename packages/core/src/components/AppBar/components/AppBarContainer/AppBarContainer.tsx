import * as React from 'react';
import { useTheme } from 'styled-components';

import { Box, type BoxProps } from '../../../Box';
import { HFlex } from '../../../HFlex';
import type { FlexProps } from '../../../Flex';
import { mergeStyles } from '../../../../helpers';

export interface AppBarContainerProps
  extends Omit<BoxProps, 'elevation'>,
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
  height,
  id,
  justifyContent,
  padding = '0 cmp-md',
  position = 'relative',
  sticky = false,
  style,
  ...restBoxProps
}) => {
  const cmpTokens = useTheme().cmp.appBar;
  const elevation = sticky ? 'stickyBottom' : 'ground';
  const tabsContainerTokens = useTheme().cmp.tabs.container;

  return (
    <Box
      {...restBoxProps}
      elevation={elevation}
      height={
        height ||
        (compact
          ? `calc(${tabsContainerTokens.size.height.lg} - 2rem)`
          : tabsContainerTokens.size.height.lg)
      }
      id={id ? `${id}__container` : null}
      padding={padding}
      position={position}
      style={mergeStyles(
        { backgroundColor: cmpTokens.color.background },
        bordered
          ? {
              borderBottom: `solid ${cmpTokens.shape.borderSize} ${cmpTokens.color.border}`,
            }
          : undefined,
        style,
      )}
    >
      <HFlex
        alignItems={alignItems}
        justifyContent={justifyContent}
        height="100%"
      >
        {children}
      </HFlex>
    </Box>
  );
};
