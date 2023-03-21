import * as React from 'react';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';

export interface SortableListProps {
  items: React.ReactElement[];
  onSortEnd?: (event: DragEndEvent) => void;
  onSortStart?: (event: DragStartEvent) => void;
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
  console.log(items);
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
