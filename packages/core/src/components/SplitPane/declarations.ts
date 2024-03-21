import * as React from 'react';

export interface ISplitter {
  flex?: React.CSSProperties['flex'];
  height?: React.CSSProperties['height'];
  horizontal?: boolean;
  layoutChanging?: boolean;
  padding?: React.CSSProperties['padding'];
  primary?: boolean;
  percentage?: boolean;
  size?: number | string;
  vertical?: boolean;
  width?: React.CSSProperties['width'];
}
