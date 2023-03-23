import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MultiValueProps as RSMultiValueProps } from 'react-select';

import { StyledSelectChip, StyledDraggableContainer } from '../styled';
import { getChipSize } from '../utils';
import { SelectOption } from '../declarations';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MultiValueContainerProps
  extends RSMultiValueProps<SelectOption> {}

export const MultiValueContainer: React.FC<MultiValueContainerProps> = ({
  data,
  selectProps,
  children,
}) => {
  const id = data.value;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
    setActivatorNodeRef,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    position: 'relative',
  };

  return (
    <div style={style} {...attributes} ref={setNodeRef} tabIndex={-1}>
      <StyledSelectChip
        sortable={selectProps.sortable}
        size={getChipSize({
          size: selectProps.size || 'xs',
          chipSize: selectProps.chipSize,
        })}
      >
        <StyledDraggableContainer
          id={id.toString()}
          isDragging={isDragging}
          ref={setActivatorNodeRef}
          {...listeners}
        />
        {children}
      </StyledSelectChip>
    </div>
  );
};
