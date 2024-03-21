// Based on the work of:
// https://github.com/zesik/react-splitter-layout
import * as React from 'react';

import type { ISplitter } from './declarations';
import { StyledSplitPanePane } from './styled';

export interface PaneProps
  extends Pick<
    ISplitter,
    'vertical' | 'size' | 'primary' | 'padding' | 'percentage'
  > {
  children?: React.ReactNode;
}

const PaneBase: React.FC<PaneProps> = ({
  vertical = false,
  primary = false,
  padding,
  size = 0,
  percentage = false,
  children = [],
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const getSize = () => {
    const sizeVal = size || 0;
    const unit = percentage ? '%' : 'px';
    return `${sizeVal}${unit}`;
  };

  const setStyles = () => {
    const el = ref.current;
    if (!el) return;
    el.style[vertical ? 'height' : 'width'] =
      !primary && size ? getSize() : '0px';
  };

  React.useEffect(() => {
    setStyles();
  });

  return (
    <StyledSplitPanePane
      ref={ref}
      primary={primary}
      vertical={vertical}
      padding={padding}
    >
      {children}
    </StyledSplitPanePane>
  );
};

export const Pane = React.memo(PaneBase);
