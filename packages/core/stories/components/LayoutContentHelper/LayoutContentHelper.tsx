import * as React from 'react';

import { BoxProps } from '../../../src';

export interface LayoutContentHelperProps
  extends Pick<BoxProps, 'children' | 'style'> {}

export const LayoutContentHelper: React.FC<LayoutContentHelperProps> = ({
  style,
  children,
}) => {
  const baseStyles = {
    fontSize: '1.4rem',
    lineHeight: '2rem',
    padding: '2rem 3.2rem',
    backgroundColor: '#e1faf2',
    color: '#3c4952',
  };
  return <div style={{ ...baseStyles, ...style }}>{children}</div>;
};
