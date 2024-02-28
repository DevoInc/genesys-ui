import * as React from 'react';

import { Typography } from '../../Typography';
import type { ParagraphProps } from '../../Typography/components/block';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StatusMessageDescriptionProps extends ParagraphProps {
  isLong?: boolean;
}

export const StatusMessageDescription = ({
  colorScheme = 'weak',
  children,
  gutterBottom = '0',
  isLong,
  textAlign,
  ...paragraphProps
}: StatusMessageDescriptionProps) => {
  return children && React.isValidElement(children) ? (
    children
  ) : children ? (
    <Typography.Paragraph
      {...paragraphProps}
      colorScheme={colorScheme}
      gutterBottom={gutterBottom}
      textAlign={textAlign || (isLong ? 'left' : 'center')}
    >
      {children}
    </Typography.Paragraph>
  ) : null;
};
