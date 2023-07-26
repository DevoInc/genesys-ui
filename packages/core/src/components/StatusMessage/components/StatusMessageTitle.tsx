import * as React from 'react';

import { Typography } from '../../';
import { HeadingProps } from '../../Typography/components/block';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatusMessageTitleProps extends HeadingProps {}

export const StatusMessageTitle = ({
  children,
  ...headingProps
}: StatusMessageTitleProps) => {
  return children && React.isValidElement(children) ? (
    children
  ) : children ? (
    <Typography.Heading {...headingProps} textAlign="center">
      {children}
    </Typography.Heading>
  ) : null;
};
