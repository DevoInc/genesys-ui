import * as React from 'react';

import type { BoxProps } from '../../../src';

export interface LayoutGridContentHelperProps
  extends Pick<BoxProps, 'children' | 'style'> {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export const LayoutGridContentHelper: React.FC<
  LayoutGridContentHelperProps
> = ({ children, height, style, width }) => {
  const baseStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #9be0c6',
    width: width || '100%',
    height: height || '100%',
    backgroundColor: '#e1faf2',
    color: '#3c4952',
  };
  return <div style={{ ...baseStyles, ...style }}>{children}</div>;
};
