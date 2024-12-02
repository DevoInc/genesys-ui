import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BasicTable } from '../../src';
import { useSetHighlight } from '../../src/hooks/useSetHighlight';
import { Flex } from '@devoinc/genesys-ui';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Highlight',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

const data = [
  {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
  },
  {
    1: 7,
    2: 8,
    3: 9,
    4: 10,
    5: 11,
    6: 12,
  },
  {
    1: 13,
    2: 14,
    3: 15,
    4: 16,
    5: 17,
    6: 18,
  },
  {
    1: 19,
    2: 20,
    3: 21,
    4: 22,
    5: 23,
    6: 24,
  },
  {
    1: 25,
    2: 26,
    3: 27,
    4: 28,
    5: 29,
    6: 30,
  },
];

const colDefs = [
  {
    id: '1',
    preset: 'number',
    headerName: '1',
  },
  {
    id: '2',
    preset: 'number',
    headerName: '2',
  },
  {
    id: '3',
    preset: 'number',
    headerName: '3',
  },
  {
    id: '4',
    preset: 'number',
    headerName: '4',
  },
  {
    id: '5',
    preset: 'number',
    headerName: '5',
  },
  {
    id: '6',
    preset: 'number',
    headerName: '6',
  },
];

export default meta;
type Story = StoryObj<typeof BasicTable>;

const BasicCmp = ({ highlightRowOnHover, highlightColumnOnHover }) => {
  const { newColDefs, onCellMouseEnter, onCellMouseLeave } =
    useSetHighlight(colDefs);

  return (
    <Flex flexDirection="column" gap="cmp-md" height={'auto'}>
      <Flex.Item>
        <BasicTable
          id={'tableHighlightStorie'}
          data={data}
          colDefs={highlightColumnOnHover ? newColDefs : colDefs}
          onCellMouseEnter={highlightColumnOnHover && onCellMouseEnter}
          onCellMouseLeave={highlightColumnOnHover && onCellMouseLeave}
          maxHeight={'80vh'}
          highlightRowOnHover={highlightRowOnHover}
        />
      </Flex.Item>
    </Flex>
  );
};

export const Columns: Story = {
  render: () => (
    <BasicCmp highlightRowOnHover={false} highlightColumnOnHover={true} />
  ),
};

export const Row: Story = {
  render: () => (
    <BasicCmp highlightRowOnHover={true} highlightColumnOnHover={false} />
  ),
};

export const RowColumn: Story = {
  render: () => (
    <BasicCmp highlightRowOnHover={true} highlightColumnOnHover={true} />
  ),
};
