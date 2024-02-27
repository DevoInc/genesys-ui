import * as React from 'react';

import { BaseProgressBarProps } from '../declarations';
import {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations/styled';
import { STATUS_COLOR_SCHEME_MAP } from '../constants';

import { Flex } from '../../Flex';
import { Typography } from '../../Typography';

export interface ProgressBarCustomInfoProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<Partial<BaseProgressBarProps>, 'status' | 'size'> {
  children?: React.ReactNode;
  endInfo?: string;
  startInfo?: string;
}

export const ProgressBarCustomInfo: React.FC<ProgressBarCustomInfoProps> = ({
  as,
  children,
  endInfo,
  size,
  startInfo,
  status,
  styles,
}) => {
  return (
    <Flex
      as={as}
      justifyContent={!startInfo ? 'flex-end' : 'space-between'}
      styles={styles}
    >
      {children ? (
        typeof children === 'string' ? (
          <Typography.Paragraph size={size}>{children}</Typography.Paragraph>
        ) : (
          children
        )
      ) : (
        <>
          {startInfo && (
            <Flex.Item>
              <Typography.Paragraph
                size={size}
                colorScheme={STATUS_COLOR_SCHEME_MAP[status]}
              >
                {startInfo}
              </Typography.Paragraph>
            </Flex.Item>
          )}
          {endInfo && (
            <Flex.Item>
              <Typography.Paragraph
                size={size}
                colorScheme={STATUS_COLOR_SCHEME_MAP[status]}
              >
                {endInfo}
              </Typography.Paragraph>
            </Flex.Item>
          )}
        </>
      )}
    </Flex>
  );
};
