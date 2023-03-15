import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MultiValueProps as DefaultMultiValuesProps } from 'react-select';

import { StyledSelectChip, StyledDraggableContainer } from '../styled';
import { CommonSelectCmpsProps } from '../declarations';
import { getChipContainerSize } from '../utils';

export interface MultiValueContainerProps extends DefaultMultiValuesProps {
  selectProps: DefaultMultiValuesProps['selectProps'] & CommonSelectCmpsProps;
  data: any;
}

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
        size={getChipContainerSize({
          size: selectProps.size,
          chipSize: selectProps.chipSize,
        })}
      >
        <StyledDraggableContainer
          id={id}
          isDragging={isDragging}
          ref={setActivatorNodeRef}
          {...listeners}
        />
        {children}
      </StyledSelectChip>
    </div>
  );
};
