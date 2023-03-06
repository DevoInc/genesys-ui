// Based on the work of:
// https://github.com/zesik/react-splitter-layout

import * as React from 'react';
import type { GlobalAriaProps, GlobalAttrProps } from '../../declarations';
import { Pane, PaneProps } from './Pane';
import { StyledSplitPane, StyledSplitPaneSeparator } from './styled';

// TODO: maybe this need a refactor or improve
const clearSelection = () => {
  const body = document.body as any;
  if (body.createTextRange) {
    // https://github.com/zesik/react-splitter-layout/issues/16
    // https://stackoverflow.com/questions/22914075/#37580789
    const range = body.createTextRange();
    range.collapse();
    range.select();
  } else if (window.getSelection) {
    // Chrome
    if (window.getSelection()?.empty) {
      window.getSelection()?.empty();
    } else if (window.getSelection()?.removeAllRanges) {
      // Firefox
      window.getSelection()?.removeAllRanges();
    }
  }
};

const DEFAULT_SPLITTER_SIZE = 2;

interface ClientPositionProps {
  top: number;
  left: number;
}

export interface SplitterLayoutProps
  extends Pick<PaneProps, 'vertical' | 'padding' | 'percentage'>,
    // native
    GlobalAttrProps,
    GlobalAriaProps {
  primaryIndex?: number;
  primaryMinSize?: number;
  secondaryInitialSize?: number;
  secondaryMinSize?: number;
  secondaryMaxSize?: number;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  onSecondaryPaneSizeChange?: () => void;
  children?: React.ReactNode;
}

export const SplitterLayout: React.FC<SplitterLayoutProps> = ({
  children = [],
  percentage = false,
  primaryIndex = 0,
  primaryMinSize = 0,
  secondaryInitialSize = undefined,
  secondaryMaxSize = 100,
  secondaryMinSize = 0,
  vertical = false,
  onDragEnd = null,
  onDragStart = null,
  onSecondaryPaneSizeChange = null,
  padding,
  ...nativeProps
}) => {
  const [secondaryPaneSize, setSecondaryPaneSize] = React.useState(0);
  const [resizing, setResizing] = React.useState(false);

  const splitterRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const getSecondaryPaneSize = React.useCallback(
    (
      containerRect: DOMRect,
      splitterRect: DOMRect,
      clientPosition: ClientPositionProps, // TODO: this value can be extracted from splitterRect
      offsetMouse: any
    ) => {
      let totalSize;
      let splitterSize;
      let offset;
      if (vertical) {
        totalSize = containerRect.height;
        splitterSize = splitterRect.height;
        offset = clientPosition.top - containerRect.top;
      } else {
        totalSize = containerRect.width;
        splitterSize = splitterRect.width;
        offset = clientPosition.left - containerRect.left;
      }
      if (offsetMouse) {
        offset -= splitterSize / 2;
      }
      if (offset < 0) {
        offset = 0;
      } else if (offset > totalSize - splitterSize) {
        offset = totalSize - splitterSize;
      }

      let secondaryPaneSize;
      if (primaryIndex === 1) {
        secondaryPaneSize = offset;
      } else {
        secondaryPaneSize = totalSize - splitterSize - offset;
      }
      let primaryPaneSize = totalSize - splitterSize - secondaryPaneSize;
      if (percentage) {
        secondaryPaneSize = (secondaryPaneSize * 100) / totalSize;
        primaryPaneSize = (primaryPaneSize * 100) / totalSize;
        splitterSize = (splitterSize * 100) / totalSize;
        totalSize = 100;
      }

      if (primaryPaneSize < primaryMinSize) {
        secondaryPaneSize = Math.max(
          secondaryPaneSize - (primaryMinSize - primaryPaneSize),
          0
        );
      } else if (secondaryPaneSize < secondaryMinSize) {
        secondaryPaneSize = Math.min(
          totalSize - splitterSize - primaryMinSize,
          secondaryMinSize
        );
      } else if (secondaryPaneSize > secondaryMaxSize) {
        secondaryPaneSize = secondaryMaxSize;
      }

      return secondaryPaneSize;
    },
    [
      percentage,
      primaryIndex,
      primaryMinSize,
      secondaryMaxSize,
      secondaryMinSize,
      vertical,
    ]
  );

  const handleResize = React.useCallback(() => {
    if (splitterRef.current && containerRef.current && !percentage) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const splitterRect = splitterRef.current.getBoundingClientRect();
      const secondaryPaneSize = getSecondaryPaneSize(
        containerRect,
        splitterRect,
        {
          left: splitterRect.left,
          top: splitterRect.top,
        },
        false
      );
      setSecondaryPaneSize(secondaryPaneSize);
    }
  }, [getSecondaryPaneSize, percentage]);

  const handleMouseMove = (e) => {
    if (containerRef.current && splitterRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const splitterRect = splitterRef.current.getBoundingClientRect();
      const secondaryPaneSize = getSecondaryPaneSize(
        containerRect,
        splitterRect,
        {
          left: e.clientX,
          top: e.clientY,
        },
        true
      );
      clearSelection();
      setSecondaryPaneSize(secondaryPaneSize);
    }
  };

  const handleMouseUp = () => {
    setResizing(false);
    document.removeEventListener('mouseup', handleMouseUp);
    document.removeEventListener('mouseleave', handleMouseUp);
    document.removeEventListener('mousemove', handleMouseMove);
  };

  const handleSplitterMouseDown = () => {
    clearSelection();
    setResizing(true);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    let secPaneSize;
    if (typeof secondaryInitialSize !== 'undefined') {
      secPaneSize = secondaryInitialSize;
    } else {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();

        const splitterRect = splitterRef.current
          ? splitterRef.current.getBoundingClientRect()
          : ({
              width: DEFAULT_SPLITTER_SIZE,
              height: DEFAULT_SPLITTER_SIZE,
            } as DOMRect);

        secPaneSize = getSecondaryPaneSize(
          containerRect,
          splitterRect,
          {
            left:
              containerRect.left +
              (containerRect.width - splitterRect.width) / 2,
            top:
              containerRect.top +
              (containerRect.height - splitterRect.height) / 2,
          },
          false
        );
      }
    }
    setSecondaryPaneSize(secPaneSize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSecondaryPaneSize, handleResize, secondaryInitialSize]);

  React.useEffect(() => {
    onSecondaryPaneSizeChange?.();
  }, [secondaryPaneSize, onSecondaryPaneSizeChange]);

  // TODO: This can be moved to handleMouseUp and handleSplitterMouseDown
  React.useEffect(() => {
    if (resizing) {
      onDragStart?.();
    } else {
      onDragEnd?.();
    }
  }, [resizing, onDragStart, onDragEnd]);

  const child = React.Children.toArray(children).slice(0, 2);
  if (child.length === 0) {
    child.push(<div />);
  }
  let wrappedChildren: React.ReactElement[] = [];
  const primaryIdx =
    primaryIndex !== 0 && primaryIndex !== 1 ? 0 : primaryIndex;
  for (let i = 0; i < child.length; ++i) {
    let primary = true;
    let newSize: number | undefined;
    if (child.length > 1 && i !== primaryIdx) {
      primary = false;
      newSize = secondaryPaneSize;
    }
    wrappedChildren.push(
      <Pane
        vertical={vertical}
        padding={padding}
        percentage={percentage}
        primary={primary}
        size={newSize}
      >
        {child[i]}
      </Pane>
    );
  }

  if (child.length === 1) {
    // Create the second element (phantom)
    // to avoid refresh on component
    const el = (
      <Pane
        vertical={vertical}
        padding={padding}
        percentage={percentage}
        primary={primaryIdx === 0 ? true : false}
        size={undefined}
      ></Pane>
    );
    if (primaryIdx !== 0) {
      wrappedChildren = [el].concat(wrappedChildren);
    }
  }

  return (
    <StyledSplitPane {...nativeProps} vertical={vertical} ref={containerRef}>
      {wrappedChildren[0]}
      {wrappedChildren.length > 1 && (
        <StyledSplitPaneSeparator
          style={{ display: child.length === 1 ? 'none' : 'flex' }}
          role="separator"
          layoutChanging={resizing}
          vertical={vertical}
          ref={splitterRef}
          onMouseDown={handleSplitterMouseDown}
        >
          <i className={'gi-row_drag_drop'} />
        </StyledSplitPaneSeparator>
      )}
      {wrappedChildren.length > 1 && wrappedChildren[1]}
    </StyledSplitPane>
  );
};
