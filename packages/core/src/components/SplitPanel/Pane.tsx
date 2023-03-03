// Based on the work of:
// https://github.com/zesik/react-splitter-layout

import * as React from 'react';

import { StyledSplitPanelPane, StyledSplitPanelPaneProps } from './styled';

export interface PaneProps
  extends Pick<StyledSplitPanelPaneProps, 'vertical' | 'primary' | 'padding'> {
  size?: number | string;
  percentage?: boolean;
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
    <StyledSplitPanelPane
      ref={ref}
      primary={primary}
      vertical={vertical}
      padding={padding}
    >
      {children}
    </StyledSplitPanelPane>
  );
};

export const Pane = React.memo(PaneBase);
