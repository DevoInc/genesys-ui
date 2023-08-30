import { Col, ColProps } from '../Col';
import * as React from 'react';

interface StoryColProps extends ColProps {
  bgColor?: string;
  height?: string;
}

export const StoryCol = React.forwardRef<HTMLDivElement, StoryColProps>(
  ({ ...props }, ref) => (
    <Col
      {...props}
      ref={ref}
      style={{
        display: 'flex',
        paddingBottom: '1.6rem',
        paddingTop: '1.6rem',
        alignItems: 'center',
        justifyContent: 'center',
        height: props.height,
        outline: 'none',
        color: '#a2b62a',
        fontSize: '1.3rem',
        textAlign: 'center',
        backgroundColor: props.bgColor || '#ebf2c5',
        border: '1px solid #a2b62a',
        ...props.style,
      }}
    >
      {props.children}
    </Col>
  ),
);

StoryCol.displayName = 'StoryCol';
