import * as React from 'react';

import type { IToast } from '../../declarations';
import { Flex } from '../../../Flex';
import { HFlex } from '../../../HFlex';
import { Typography } from '../../../Typography';
import { Panel } from '../../../Panel';

export interface ToastBodyProps extends Pick<IToast, 'collapsed' | 'content'> {}

export const ToastBody: React.FC<ToastBodyProps> = ({ content, collapsed }) =>
  collapsed ? null : (
    <Panel.Body removeSpace={collapsed}>
      <HFlex spacing={'cmp-sm'}>
        <Flex.Item width="2rem" flex="0 0 auto" />
        <Flex.Item>
          {typeof content === 'string' ? (
            <Typography.Paragraph size="md">{content}</Typography.Paragraph>
          ) : (
            content
          )}
        </Flex.Item>
      </HFlex>
    </Panel.Body>
  );
