import * as React from 'react';
import { css, useTheme } from 'styled-components';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { type MultiValueProps as RSMultiValueProps } from 'react-select';

import { GIRowDragDrop } from '@devoinc/genesys-icons';

import type { TSelectOption } from '../../declarations';
import { getChipSize } from '../../utils';
import { SelectControlContext } from '../../context';
import { StyledSelectChip } from './StyledSelectChip';
import { StyledDraggableContainer } from './StyledDraggableContainer';
import { Icon } from '../../../Icon';
import { Box } from '../../../Box';

export interface MultiValueContainerProps<Option>
  extends RSMultiValueProps<Option> {}

export const MultiValueContainer = <Option extends TSelectOption>({
  data,
  selectProps,
  children,
}: MultiValueContainerProps<Option>): React.ReactElement<
  MultiValueContainerProps<Option>
> => {
  const theme = useTheme();
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
        $sortable={selectProps.sortable}
        $size={getChipSize({
          size: selectProps.size,
          chipSize: selectProps.chipSize,
        })}
        css={css`
          &:hover > *,
          &:focus > * {
            opacity: 1;
          }
        `}
      >
        {selectProps.sortable && (
          <Box
            as="span"
            style={css`
              position: absolute;
              top: 50%;
              left: 0;
              opacity: 0.4;
              height: 0.8rem;
              overflow: hidden;
              transform: translate(0, -50%);
              transition: opacity ease
                ${theme.alias.mutation.transitionDuration.opacity.md};
            `}
          >
            <Icon size="2.2rem">
              <GIRowDragDrop />
            </Icon>
          </Box>
        )}
        {selectProps.sortable && (
          <StyledDraggableContainer
            id={id.toString()}
            $isDragging={isDragging}
            ref={setActivatorNodeRef}
            {...listeners}
          />
        )}
        {children}
      </StyledSelectChip>
    </div>
  );
};
