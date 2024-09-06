import * as React from 'react';
import { useSize } from 'ahooks';

import type { IDataAttrs } from '../../../../declarations';
import type { TDirection, TOnChangeFn, TSizes } from '../../declarations';
import { StyledContainer } from './StyledContainer';
import {
  getCSSGridTemplate,
  getDefaultSize,
  getSizesWithSeparators,
  parseSizes,
} from '../../size';
import { useDndMonitor } from '@dnd-kit/core';

export interface SplitLayoutProps extends IDataAttrs {
  children: React.ReactNode;
  direction: TDirection;
  sizes: TSizes;
  /** Separator size in pixels */
  gutterSize: number;
  onChange: TOnChangeFn;
}

export const Container: React.FC<SplitLayoutProps> = ({
  children,
  direction = 'horizontal',
  sizes = getDefaultSize(Array.isArray(children) ? children.length : 1),
  gutterSize = 10,
  onChange = () => null,
}) => {
  const ref = React.useRef();
  const size = useSize(ref);
  const sizeWidth = size?.width ?? 0;
  const sizeHeight = size?.height ?? 0;

  const pxSizes = React.useMemo(() => {
    return parseSizes(
      sizes,
      direction === 'horizontal' ? sizeWidth : sizeHeight,
    );
  }, [sizes, sizeWidth, sizeHeight]);

  useDndMonitor({
    onDragMove: (event) => {
      const index = event.active.data.current.index;
      onChange(
        pxSizes,
        index,
        direction === 'horizontal' ? event.delta.x : event.delta.y,
        false,
      );
    },
    onDragEnd: (event) => {
      const index = event.active.data.current.index;
      onChange(
        pxSizes,
        index,
        direction === 'horizontal' ? event.delta.x : event.delta.y,
        true,
      );
    },
  });

  return (
    <StyledContainer
      $direction={direction}
      ref={ref}
      style={{
        ...(direction === 'horizontal'
          ? {
              gridTemplateColumns: getCSSGridTemplate(
                getSizesWithSeparators(pxSizes, gutterSize),
              ),
            }
          : {
              gridTemplateRows: getCSSGridTemplate(
                getSizesWithSeparators(pxSizes, gutterSize),
              ),
            }),
      }}
    >
      {sizeWidth > 0 && sizeHeight > 0 && children}
    </StyledContainer>
  );
};
