import * as React from 'react';

import { APP_BAR_CLASS_NAME_BASE } from '../../constants';
import { Box, type BoxProps } from '../../../Box';
import { HFlex } from '../../../HFlex';
import type { FlexProps } from '../../../Flex';

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
  className,
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
  const elevation = sticky ? 'stickyBottom' : 'ground';
  const classNameBase = APP_BAR_CLASS_NAME_BASE;
  const classNames = [
    `${classNameBase} `,
    sticky ? `${classNameBase}--sticky ` : '',
    compact ? `${classNameBase}--compact ` : '',
    className ? `${className} ` : '',
  ]
    .join('')
    .trim();
  return (
    <Box
      {...restBoxProps}
      className={classNames}
      elevation={elevation}
      height={height}
      id={id ? `${id}__container` : null}
      padding={padding}
      position={position}
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
