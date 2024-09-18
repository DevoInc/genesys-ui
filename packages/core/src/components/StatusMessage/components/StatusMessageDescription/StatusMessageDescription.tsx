import * as React from 'react';

import { Typography } from '../../../Typography';
import type { ParagraphProps } from '../../../Typography/components/Paragraph';

export interface StatusMessageDescriptionProps extends ParagraphProps {
  isLong?: boolean;
}

export const StatusMessageDescription: React.FC<
  StatusMessageDescriptionProps
> = ({
  colorScheme = 'weak',
  children,
  gutterBottom = '0',
  isLong,
  textAlign,
  ...paragraphProps
}) =>
  children && React.isValidElement(children) ? (
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
