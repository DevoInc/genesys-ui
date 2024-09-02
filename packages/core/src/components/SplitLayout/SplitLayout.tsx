import * as React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  restrictToVerticalAxis,
  restrictToHorizontalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

import type { IDataAttrs } from '../../declarations';
import type { TDirection, TOnChangeFn, TSizes } from './declarations';
import { Container, Gutter } from './components';
import { getDefaultSize } from './size';
import { interpolateItems } from './array';

export interface SplitLayoutProps extends IDataAttrs {
  children: React.ReactNode;
  /** Direction of the layout, 'horizontal' would be an area at the right and
   * another at the left, 'vertical' means an area at the top and another at the
   * bottom */
  direction?: TDirection;
  /** Sizes could be in pixels, or percentage and special one 'auto'
   * for example: ['250px', '50%', 'auto']
   * pixels could be expressed as '250px' or 250 number
   * for example: [250, '50%', 'auto'] is the same as before */
  sizes?: TSizes;
  /** Gutter size in pixels */
  gutterSize?: number;
  onChange?: TOnChangeFn;
  disabled?: boolean;
  showDragGhost?: boolean;
  hideGutter?: boolean;
}

export const SplitLayout: React.FC<SplitLayoutProps> = ({
  children,
  direction = 'horizontal',
  sizes = getDefaultSize(Array.isArray(children) ? children.length : 1),
  gutterSize = 10,
  onChange = () => null,
  disabled = false,
  showDragGhost = true,
  hideGutter = false,
}) => (
  <DndContext
    modifiers={[
      direction === 'vertical'
        ? restrictToVerticalAxis
        : restrictToHorizontalAxis,
      restrictToParentElement,
    ]}
  >
    <Container
      direction={direction}
      sizes={sizes}
      gutterSize={hideGutter ? 0 : gutterSize}
      onChange={onChange}
    >
      {Array.isArray(children) && children.filter((x) => !!x).length > 1
        ? (interpolateItems(children, (idx) => (
            <Gutter
              key={`separator${idx}`}
              id={`separator${idx}`}
              index={idx}
              direction={direction}
              size={gutterSize}
              disabled={disabled}
              showDragGhost={showDragGhost}
              hide={hideGutter}
            />
          )) as React.ReactNode[])
        : children}
    </Container>
  </DndContext>
);
