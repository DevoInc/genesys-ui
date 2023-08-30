import styled from 'styled-components';
import * as React from 'react';

export interface StyledSplitPanePaneProps {
  flex?: React.CSSProperties['flex'];
  height?: React.CSSProperties['height'];
  horizontal?: boolean;
  padding?: React.CSSProperties['padding'];
  primary?: boolean;
  size?: number | string;
  vertical?: boolean;
  width?: React.CSSProperties['width'];
}

export const StyledSplitPanePane = styled.div.attrs<StyledSplitPanePaneProps>(
  ({
    flex,
    height,
    horizontal = false,
    primary = false,
    vertical = false,
    padding,
    size,
    width,
  }) => ({
    style: {
      height: !primary && vertical ? size : height,
      width: !primary && horizontal ? size : width,
      flex: primary ? '1 1 auto' : flex,
      padding: padding ? padding : null,
    },
  }),
)<StyledSplitPanePaneProps>`
  position: relative;
  flex: 0 0 auto;
  overflow: auto;
`;
