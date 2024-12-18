import * as React from 'react';
import { Row, RowProps } from '../Row';

interface StoryRowProps extends RowProps {
  height?: string;
}

export const StoryRow: React.FC<StoryRowProps> = (
  { ...props }: StoryRowProps,
  ref,
) => (
  <Row
    {...props}
    ref={ref}
    style={{
      height: props.height,
      backgroundColor: '#f5f9dd',
      ...props.style,
    }}
  >
    {props.children}
  </Row>
);

StoryRow.displayName = 'Row';
