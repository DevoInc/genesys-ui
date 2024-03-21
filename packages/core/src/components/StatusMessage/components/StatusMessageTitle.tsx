import * as React from 'react';

import { Typography } from '../../Typography';
import type { HeadingProps } from '../../Typography/components/block';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatusMessageTitleProps extends HeadingProps {}

export const StatusMessageTitle = ({
  children,
  textAlign = 'center',
  ...restHeadingProps
}: StatusMessageTitleProps) => {
  return children && React.isValidElement(children) ? (
    children
  ) : children ? (
    <Typography.Heading {...restHeadingProps} textAlign={textAlign}>
      {children}
    </Typography.Heading>
  ) : null;
};
