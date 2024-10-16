import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Collapse } from './Collapse';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { elevationBoxShadowMixin } from '../../styled/mixins';
import { lorem } from '../../../stories/utils/fillerTexts';
import {
  GIBinTrashRecycleDeleteGarbageEmpty,
  GIPlusSignAddNew,
} from '@devoinc/genesys-icons';
import { ButtonGroup } from '../ButtonGroup';
import styled from 'styled-components';
import { TElevation } from 'src/declarations';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Navigation/Collapse',
  component: Collapse,
  args: {
    heading: 'Collapse heading',
    truncateLine: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [expanded, setExpanded] = React.useState(props.expanded);
      const contentId = 'accessibility';
      return (
        <Flex flexDirection={'column'}>
          <Collapse
            {...props}
            aria-controls={props['aria-controls'] || contentId}
            expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
          {expanded && (
            <Box
              id={contentId}
              maxHeight={'190px'}
              overflow={'auto'}
              padding={'cmp-md cmp-lg'}
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
          )}
        </Flex>
      );
    })(args),
};

export const Custom: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <Flex flexDirection={'column'}>
          <Collapse._Container
            expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          >
            <Box
              position="relative"
              onClick={() => {
                // eslint-disable-next-line no-alert
                alert('Clock on Collapse marker');
              }}
            >
              <Collapse._Marker />
            </Box>
            <Collapse._Heading style={{ fontStyle: 'italic' }}>
              Custom collapse
            </Collapse._Heading>
          </Collapse._Container>
          {expanded && (
            <Box
              maxHeight={'190px'}
              overflow={'auto'}
              padding={'cmp-md cmp-lg'}
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
          )}
        </Flex>
      );
    })(),
};

const GhostStyled = styled.div<{ $elevation: TElevation }>`
  ${({ theme, $elevation }) => elevationBoxShadowMixin(theme)($elevation)}
`;

const Item: React.FC<{
  id: string;
  isExpanded: boolean;
  onExpand?: (id: string) => void;
  isGhost?: boolean;
}> = ({ id, isExpanded, onExpand, isGhost = false }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <GhostStyled
      $elevation={isGhost ? 'draggable' : 'ground'}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Flex flexDirection={'column'}>
        <Collapse
          heading={`This is the ${id} collapsable`}
          aria-controls={`control-${id}`}
          expanded={isExpanded}
          onClick={() => {
            onExpand?.(isExpanded ? null : id);
          }}
          isDraggable
          {...listeners}
        />
        {isExpanded && (
          <Panel
            id={`control-${id}`}
            maxHeight={'190px'}
            overflow={'auto'}
            padding={'cmp-md cmp-lg'}
            elevation="ground"
          >
            <Panel.Body>
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Panel.Body>
          </Panel>
        )}
      </Flex>
    </GhostStyled>
  );
};

const TOTAL_DRAGGABLE = 10;
export const Draggable: StoryObj = {
  // tags: ['isHidden'],
  render: () =>
    (() => {
      const [activeId, setActiveId] = React.useState(null);
      const [items, setItems] = React.useState(
        Array.from({ length: TOTAL_DRAGGABLE }).map((_, idx) => String(idx)),
      );
      const [expandedId, setExpandedId] = React.useState<string>(null);
      const sensors = useSensors(
        useSensor(PointerSensor, {
          activationConstraint: {
            distance: 15,
          },
        }),
      );

      return (
        <DndContext
          sensors={sensors}
          onDragStart={({ active }) => {
            setActiveId(active);
          }}
          onDragEnd={({ active, over }) => {
            if (over && active.id !== over?.id) {
              const activeIndex = items.indexOf(String(active.id));
              const overIndex = items.indexOf(String(over.id));
              // const activeIndex = items.findIndex(({ id }) => id === active.id);
              // const overIndex = items.findIndex(({ id }) => id === over.id);

              setItems(arrayMove(items, activeIndex, overIndex));
            }
            setActiveId(null);
          }}
          onDragCancel={() => {
            setActiveId(null);
          }}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            <Flex flexDirection={'column'}>
              {items.map((id) => (
                <Item
                  key={id}
                  id={id}
                  isExpanded={expandedId === id}
                  onExpand={setExpandedId}
                />
              ))}
            </Flex>
          </SortableContext>
          <DragOverlay>
            {activeId ? (
              <Item
                key={activeId.id}
                id={activeId.id}
                isExpanded={expandedId === activeId.id}
                isGhost
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      );
    })(),
};

export const AppendContent: Story = {
  // tags: ['isHidden'],
  args: {
    heading: 'Collapse heading with icons',
    appendContent: (
      <ButtonGroup size={'xs'}>
        <ButtonGroup.IconButton
          circular
          colorScheme="quiet"
          icon={<GIPlusSignAddNew />}
        />
        <ButtonGroup.IconButton
          circular
          colorScheme="quiet"
          icon={<GIBinTrashRecycleDeleteGarbageEmpty />}
        />
      </ButtonGroup>
    ),
  },
  render: (args) =>
    ((props) => {
      const [expanded, setExpanded] = React.useState(props.expanded);
      const contentId = 'appendConent';
      return (
        <Flex flexDirection={'column'}>
          <Collapse
            {...props}
            aria-controls={props['aria-controls'] || contentId}
            expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
          {expanded && (
            <Box
              id={contentId}
              maxHeight={'190px'}
              overflow={'auto'}
              padding={'cmp-md cmp-lg'}
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
          )}
        </Flex>
      );
    })(args),
};
