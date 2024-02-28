import * as React from 'react';

import { Flex } from '../../Flex';
import { HFlex } from '../../HFlex';
import { Typography } from '../../Typography';

export interface ToastContentProps {
  /** Return panel content if not collapsed */
  collapsed?: boolean;
  /** Panel content */
  content?: React.ReactNode;
}

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
