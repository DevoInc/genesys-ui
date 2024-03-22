import * as React from 'react';

import type { IToast } from '../declarations';
import { Flex } from '../../Flex';
import { HFlex } from '../../HFlex';
import { Typography } from '../../Typography';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastContentProps
  extends Pick<IToast, 'collapsed' | 'content'> {}

export const ToastContent: React.FC<ToastContentProps> = ({
  content,
  collapsed,
}) => {
  if (collapsed) return null;

  return (
    <HFlex spacing={'cmp-sm'}>
      <Flex.Item width="2rem" flex="0 0 auto" />
      <Flex.Item>
        {typeof content === 'string' ? (
          <Typography.Paragraph size={'md'}>{content}</Typography.Paragraph>
        ) : (
          content
        )}
      </Flex.Item>
    </HFlex>
  );
};
