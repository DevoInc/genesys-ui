import * as React from 'react';

import type { IBaseProgressBar } from '../declarations';
import { ProgressBarContext } from '../context';
import { Flex, type FlexProps } from '../../Flex';

export interface ProgressBarInnerContainerProps
  extends FlexProps,
    Pick<IBaseProgressBar, 'type'> {}

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
  const context = React.useContext(ProgressBarContext);
  const evalType = type || context.type;
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      flexDirection={
        flexDirection || (evalType === 'circular' ? 'column' : 'row')
      }
      justifyContent={
        justifyContent || (evalType === 'circular' ? 'center' : 'space-between')
      }
      position={position}
    >
      {children}
    </Flex>
  );
};
