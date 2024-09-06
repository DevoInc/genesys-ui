import * as React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { useTheme } from 'styled-components';

import { GIRowDragDrop } from '@devoinc/genesys-icons';

import { StyledGutter } from './StyledGutter';
import type { TDirection } from '../../declarations';

export interface GutterProps {
  direction: TDirection;
  size: number;
  id: string;
  disabled?: boolean;
  index: number;
  showDragGhost?: boolean;
  hide?: boolean;
}

export const Gutter: React.FC<GutterProps> = ({
  direction,
  size,
  id,
  disabled = false,
  index,
  showDragGhost = true,
  hide = false,
}) => {
  const theme = useTheme();
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: {
        index,
      },
      disabled,
    });

  return (
    <StyledGutter
      role="separator"
      $isDragging={isDragging}
      $direction={direction}
      $size={size}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        display: hide ? 'none' : 'flex',
        ...(showDragGhost && transform
          ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            }
          : {}),
      }}
    >
      <GIRowDragDrop
        color={theme.alias.color.text.body.weak}
        size={20}
        style={{
          transform: `rotate(${direction === 'vertical' ? '90deg' : '0'})`,
          position: 'absolute',
        }}
      />
    </StyledGutter>
  );
};
