import * as React from 'react';

import { STATUS_COLOR_SCHEME_MAP } from '../../constants';
import type { IBaseProgressBar } from '../../declarations';
import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations/styled';
import { ProgressBarContext } from '../../context';
import { Flex } from '../../../Flex';
import { Typography } from '../../../Typography';

export interface ProgressBarCustomInfoProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    Pick<Partial<IBaseProgressBar>, 'status' | 'size'> {
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
  style,
}) => {
  const context = React.useContext(ProgressBarContext);
  const evalSize = size || context.size;
  const evalStatus = status || context.status;
  return (
    <Flex
      as={as}
      justifyContent={!startInfo ? 'flex-end' : 'space-between'}
      style={style}
    >
      {children ? (
        typeof children === 'string' ? (
          <Typography.Paragraph size={evalSize}>
            {children}
          </Typography.Paragraph>
        ) : (
          children
        )
      ) : (
        <>
          {startInfo && (
            <Flex.Item>
              <Typography.Paragraph
                size={evalSize}
                colorScheme={STATUS_COLOR_SCHEME_MAP[evalStatus]}
              >
                {startInfo}
              </Typography.Paragraph>
            </Flex.Item>
          )}
          {endInfo && (
            <Flex.Item>
              <Typography.Paragraph
                size={evalSize}
                colorScheme={STATUS_COLOR_SCHEME_MAP[evalStatus]}
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
