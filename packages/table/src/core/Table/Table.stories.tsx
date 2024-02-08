import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { StatusMessage } from '@devoinc/genesys-ui';

import { Table } from './Table';
import { Data } from '../../declarations';

const meta: Meta<typeof Table> = {
  title: 'Components/Layout/Table/Core/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Empty: Story = {
  args: {},
  render: () => (
    <>
      <Table
        colDefs={Array(8)
          .fill(null)
          .map((_, idx) => ({
            id: `col${idx + 1}`,
            headerName: `Col ${idx + 1}`,
          }))}
        data={[]}
      />
      <StatusMessage
        title="No data to show"
        description="There is no data to show, change your query or whatelse you are defining to see something here"
        buttons={[]}
      />
    </>
  ),
};

// Get rows
const getData = (cols: number, rows: number, iter: number = 0): Data =>
  Array(rows)
    .fill(null)
    .map(() =>
      Array(cols)
        .fill(null)
        .map((__, colIndex) => ({
          [`col${colIndex}`]: `block${iter}`,
        }))
        .reduce((prev, cur) => ({ ...prev, ...cur }), {}),
    );

// Get col defs
const getColDefs = (cols: number) =>
  Array.from({ length: cols }, (_, index: number) => ({
    id: `col${index}`,
    headerName: `Col ${index + 1}`,
    cellRenderer: ({ value }) => String(value),
  }));

const timeout = 1000; // ms for each iteration
const cols = 10; // number of columns
const chunkRows = 5; // number of rows on each iteration
const iterations = 5;

const PerformanceTable = () => {
  const [data, setData] = React.useState<Data>(getData(cols, chunkRows));

  React.useEffect(() => {
    let id: NodeJS.Timeout = null;
    let counter = 0;
    const fn = () => {
      setData((old: Data) => {
        return [...old, ...getData(cols, chunkRows, counter + 1)];
      });
      counter++;
      if (counter >= iterations) {
        clearInterval(id);
      }
    };
    id = setInterval(fn, timeout);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Table
      defaultColDef={{ editable: false }}
      colDefs={getColDefs(cols)}
      data={data}
    />
  );
};

export const ChunksInTime: Story = {
  render: () => <PerformanceTable />,
};
