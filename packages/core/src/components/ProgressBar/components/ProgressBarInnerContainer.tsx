import * as React from 'react';

import { Flex, FlexProps } from '../../';

import { ProgressBarType } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProgressBarInnerContainerProps extends FlexProps {
  /** The type of the progress bar: standard or circular */
  type?: ProgressBarType;
}

export const ProgressBarInnerContainer: React.FC<
  ProgressBarInnerContainerProps
> = ({
  alignItems = 'center',
  children,
  flexDirection,
  justifyContent,
  position = 'relative',
  type,
  ...restFlexProps
}) => {
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      flexDirection={flexDirection || (type === 'circular' ? 'column' : 'row')}
      justifyContent={
        justifyContent || (type === 'circular' ? 'center' : 'space-between')
      }
      position={position}
    >
      {children}
    </Flex>
  );
};
