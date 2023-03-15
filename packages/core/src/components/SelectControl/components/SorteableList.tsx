import * as React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';

export interface SortableListProps {
  items: any;
  onSortEnd?: any;
  onSortStart?: any;
}

export const SortableList: React.FC<SortableListProps> = ({
  items,
  onSortEnd,
  onSortStart,
}) => {
  const containerStyles: React.CSSProperties = {
    display: 'inherit',
    flexWrap: 'wrap',
    padding: '0.4rem',
  };

  return (
    <DndContext onDragStart={onSortStart} onDragEnd={onSortEnd}>
      <SortableContext
        items={items.map((item) => item.props.data.value)}
        strategy={horizontalListSortingStrategy}
      >
        <div style={containerStyles}>{items}</div>
      </SortableContext>
    </DndContext>
  );
};
