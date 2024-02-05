import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MultiValueProps as RSMultiValueProps } from 'react-select';

import { SelectOption } from '../declarations';

import { getChipSize } from '../utils';
import { SelectControlContext } from '../context';

import { StyledSelectChip, StyledDraggableContainer } from '../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MultiValueContainerProps<Option>
  extends RSMultiValueProps<Option> {}

export const MultiValueContainer = <Option extends SelectOption>({
  data,
  selectProps,
  children,
}: MultiValueContainerProps<Option>): React.ReactElement<
  MultiValueContainerProps<Option>
> => {
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
  const { values } = React.useContext(SelectControlContext);
  const lastValue = values.slice(-1)[0];
  return selectProps.multipleSubtle ? (
    <>
      {children}
      {lastValue.value !== data.value ? ', ' : ''}
    </>
  ) : (
    <div style={style} {...attributes} ref={setNodeRef} tabIndex={-1}>
      <StyledSelectChip
        sortable={selectProps.sortable}
        size={getChipSize({
          size: selectProps.size,
          chipSize: selectProps.chipSize,
        })}
      >
        {selectProps.sortable && (
          <StyledDraggableContainer
            id={id.toString()}
            isDragging={isDragging}
            ref={setActivatorNodeRef}
            {...listeners}
          />
        )}
        {children}
      </StyledSelectChip>
    </div>
  );
};
