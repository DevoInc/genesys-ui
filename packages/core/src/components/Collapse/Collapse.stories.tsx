import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import styled from 'styled-components';
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

import type { TElevation } from '../../declarations';
import { elevationBoxShadowMixin } from '../../styled/mixins';
import { lorem } from '../../../stories/utils/fillerTexts';

import {
  GIBinTrashRecycleDeleteGarbageEmpty,
  GIPlusSignAddNew,
} from '@devoinc/genesys-icons';
import { Collapse } from './Collapse';
import { Flex } from '../Flex';
import { Box } from '../Box';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { ButtonGroup } from '../ButtonGroup';
import { HFlex } from '../HFlex';
import { FloatingHelper } from '../FloatingHelper';
import { IconButton } from '../IconButton';
import { VFlex } from '../VFlex';
import { Button } from '../Button';

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

export const Playground: Story = {
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

export const Disabled: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState([false, false]);
      const [disabled, setDisabled] = React.useState(true);
      const contentId = 'accessibility';
      return (
        <VFlex spacing="0">
          <Collapse
            heading="Collapse heading one"
            aria-controls={`${contentId}-one`}
            expanded={expanded[0]}
            onClick={() => {
              setExpanded([!expanded[0], false]);
            }}
          />
          {expanded[0] && (
            <Box
              id={`${contentId}-one`}
              maxHeight={'190px'}
              overflow={'auto'}
              padding={'cmp-md cmp-lg'}
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
          )}
          <Collapse
            appendContent={
              <IconButton
                state={disabled ? 'disabled' : undefined}
                icon={<GIPlusSignAddNew />}
                onClick={(event) => {
                  event.stopPropagation();
                  alert('Clicked add button');
                }}
              />
            }
            disabled={disabled}
            heading="Collapse heading disabled"
            aria-controls={`${contentId}-two`}
            expanded={expanded[1]}
            onClick={() => {
              setExpanded([false, !expanded[1]]);
            }}
          />
          {expanded[1] && (
            <Box
              id={`${contentId}-two`}
              maxHeight={'190px'}
              overflow={'auto'}
              padding={'cmp-md cmp-lg'}
            >
              <Typography.Paragraph>{lorem}</Typography.Paragraph>
            </Box>
          )}
          <HFlex marginTop="cmp-md" justifyContent="flex-end">
            <Button
              size="sm"
              onClick={(event) => {
                event.stopPropagation();
                setDisabled(!disabled);
              }}
            >
              {disabled ? 'Enable collapse' : 'Disable collapse'}
            </Button>
          </HFlex>
        </VFlex>
      );
    })(),
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
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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

export const Quiet: Story = {
  args: {
    quiet: true,
  },
  tags: ['isHidden'],
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

export const Actions: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      const contentId = 'accessibility';
      return (
        <Flex flexDirection={'column'}>
          <Collapse
            heading={
              <HFlex inline spacing="cmp-xs">
                Genesys
                <Typography.Caption colorScheme="weaker">
                  (V15.3.1)
                </Typography.Caption>
                <FloatingHelper message={lorem} />
              </HFlex>
            }
            aria-controls={contentId}
            expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
            appendContent={
              <ButtonGroup size={'xs'}>
                <ButtonGroup.IconButton
                  circular
                  colorScheme="quiet"
                  icon={<GIPlusSignAddNew />}
                  onClick={(event) => {
                    event.stopPropagation();
                    alert('Add button click');
                  }}
                />
                <ButtonGroup.IconButton
                  circular
                  colorScheme="quiet"
                  icon={<GIBinTrashRecycleDeleteGarbageEmpty />}
                  onClick={(event) => {
                    event.stopPropagation();
                    alert('Remove button click');
                  }}
                />
              </ButtonGroup>
            }
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
    })(),
};

export const Separator: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [expanded, setExpanded] = React.useState(true);
      const contentId = 'accessibility';
      return (
        <Flex flexDirection={'column'}>
          <Collapse
            {...props}
            heading="Collapse one"
            aria-controls={props['aria-controls'] || contentId}
            expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
          />
          {expanded && (
            <>
              <Box
                id={contentId}
                maxHeight={'190px'}
                overflow={'auto'}
                padding={'cmp-md cmp-lg'}
              >
                <Typography.Paragraph>{lorem}</Typography.Paragraph>
              </Box>
              <Collapse.Separator />
            </>
          )}
          <Collapse
            {...props}
            heading="Collapse two"
            aria-controls={props['aria-controls'] || contentId}
          />
        </Flex>
      );
    })(args),
};
