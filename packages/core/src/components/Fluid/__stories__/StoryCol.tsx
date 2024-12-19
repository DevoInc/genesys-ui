import * as React from 'react';
import { Col, ColProps } from '../Col';

interface StoryColProps extends ColProps {
  bgColor?: string;
  height?: string;
}

export const colStyles = {
  display: 'flex',
  paddingBottom: '1.6rem',
  paddingTop: '1.6rem',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  color: '#a2b62a',
  fontSize: '1.3rem',
  textAlign: 'center',
  backgroundColor: '#ebf2c5',
  border: '1px solid #a2b62a',
} as object;

export const StoryCol = React.forwardRef<HTMLDivElement, StoryColProps>(
  ({ ...props }, ref) => (
    <Col {...props} ref={ref} style={{ ...colStyles, ...props.style }}>
      {props.children}
    </Col>
  ),
);

StoryCol.displayName = 'Col';
