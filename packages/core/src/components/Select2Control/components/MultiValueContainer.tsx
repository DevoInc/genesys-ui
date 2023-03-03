import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MultiValueProps as DefaultMultiValuesProps } from 'react-select';

import { StyledSelectChip, StyledDraggableContainer } from '../styled';
import { CustomSelectProps } from '../declarations';
import { getChipContainerSize } from '../utils';

export interface MultiValueContainerProps extends DefaultMultiValuesProps {
  selectProps: DefaultMultiValuesProps['selectProps'] & CustomSelectProps;
  data: any;
}

export const MultiValueContainer: React.FC<MultiValueContainerProps> = (
  props
) => {
  const id = props.data.value;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
    setActivatorNodeRef,
  } = useSortable({ id });

  const style: any = {
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    position: 'relative',
  };

  return (
    <div style={style} {...attributes} ref={setNodeRef} tabIndex={-1}>
      <StyledSelectChip
        sortable={props.selectProps.sortable}
        size={getChipContainerSize({
          size: props.selectProps.size,
          chipSize: props.selectProps.chipSize,
        })}
      >
        <StyledDraggableContainer
          id={id}
          isDragging={isDragging}
          ref={setActivatorNodeRef}
          {...listeners}
        />
        {props.children}
      </StyledSelectChip>
    </div>
  );
};
