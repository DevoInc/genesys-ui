import styled from 'styled-components';
import type { ISplitter } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledSplitPanePaneProps
  extends Pick<
    ISplitter,
    | 'flex'
    | 'height'
    | 'horizontal'
    | 'layoutChanging'
    | 'padding'
    | 'primary'
    | 'size'
    | 'vertical'
    | 'width'
  > {}

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
