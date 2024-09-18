import * as React from 'react';

import type { IBanner } from '../../declarations';
import { Flex } from '../../../Flex';
import { BannerContext } from '../../context';

export interface BannerContentContainerProps
  extends Pick<IBanner, 'children' | 'subtle'> {}

export const BannerContentContainer: React.FC<BannerContentContainerProps> = ({
  children,
  subtle,
}) => {
  const context = React.useContext(BannerContext);
  const evalSubtle = subtle || context.subtle;
  return (
    <Flex
      flex="1 1 auto"
      gap={evalSubtle ? 'cmp-xxs' : 'cmp-sm'}
      alignItems={evalSubtle ? 'center' : undefined}
      flexDirection={evalSubtle ? 'row' : 'column'}
      minWidth="0"
    >
      {children}
    </Flex>
  );
};
