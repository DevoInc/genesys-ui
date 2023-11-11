import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Row } from './Row';
import { ColDef } from '../../declarations';
import {
  NumberRenderer,
  TagRenderer,
  TagsRenderer,
  TextRenderer,
} from '../../renderers';
import { useVirtualizer } from '@tanstack/react-virtual';

const data = Holo.of()
  .schema({
    name: 'name',
    company: 'company',
    age: 'age',
    about: 'paragraph',
    picture: 'avatar',
    balance: 'euro',
    timestamp: 'timestamp',
    booleanValue: 'bool',
    status: () => Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
    tags: () =>
      Holo.chance.pickset(
        [
          { text: 'Coworker', colorScheme: 'success' },
          { text: 'Developer', colorScheme: 'warning' },
          { text: 'Engineer', colorScheme: 'error' },
          { text: 'Components', colorScheme: 'data-blue' },
        ],
        Holo.chance.integer({ min: 1, max: 4 }),
      ),
  })
  .repeat(1)
  .generate();

const colDefs: ColDef[] = [
  {
    id: 'name',
    headerName: 'Name',
    type: 'text',
    CellRenderer: TextRenderer,
  },
  {
    id: 'age',
    headerName: 'age',
    type: 'number',
    CellRenderer: NumberRenderer,
  },
  {
    id: 'balance',
    headerName: 'balance',
    type: 'number',
    CellRenderer: NumberRenderer,
  },
  {
    id: 'booleanValue',
    headerName: 'booleanValue',
    type: 'tag',
    tagConfig: {
      true: { color: '#1EC990', text: 'Active' },
      false: { color: '#ED5353', text: 'Inactive' },
    },
    CellRenderer: TagRenderer,
  },
  {
    id: 'status',
    headerName: 'status',
    type: 'tag',
    tagConfig: {
      TODO: { color: '#1EC990', text: 'TODO' },
      inProgress: { color: '#ED5353', text: 'inProgress' },
      test: { color: 'orange', text: 'test' },
      done: { color: 'green', text: 'done' },
    },
    CellRenderer: TagRenderer,
  },
  {
    id: 'tags',
    headerName: 'tags',
    type: 'tags',
    CellRenderer: TagsRenderer,
  },
];

const meta: Meta<typeof Row> = {
  title: 'Components/Table/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Base: Story = {
  render: () =>
    (() => {
      const rowRef = React.useRef();
      const columnVirtualizer = useVirtualizer({
        count: colDefs.length,
        getScrollElement: () => rowRef.current,
        estimateSize: () => 120,
        horizontal: true,
      });
      return (
        <Row
          columnDefs={colDefs}
          data={data[0]}
          columnVirtualizer={columnVirtualizer}
        />
      );
    })(),
};
