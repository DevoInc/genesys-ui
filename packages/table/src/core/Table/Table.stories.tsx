import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table/Core/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const getData = (cols: number, rows: number) => {
  const schemaObject2 = {};
  Array.from({ length: cols }).forEach((_el, index: number) => {
    schemaObject2[`company_${index}`] = 'company';
  });

  return Holo.of().schema(schemaObject2).repeat(rows).generate();
};

const getColDefs = (cols: number) =>
  Array.from({ length: cols }, (_, index: number) => ({
    id: `company_${index}`,
    headerName: `Company ${index + 1}`,
    cellRenderer: ({ value }) => String(value),
    cellStyle: {
      width: 12,
    },
  }));

const chunkSize = 10;
const interval = 1000;
const cols = 200;

const PerformanceTable = () => {
  const [data, setData] = React.useState(getData(cols, chunkSize));
  const counter = React.useRef(0);

  React.useEffect(() => {
    const fn = () => {
      setData((old: any) => {
        return [...old, ...getData(cols, chunkSize)];
      });
      counter.current++;
      if (counter.current > 100) {
        clearInterval(id);
      }
    };
    const id = setInterval(fn, interval);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Table
      defaultColDef={{ editable: false }}
      minWidth={2000}
      colDefs={getColDefs(100)}
      data={data}
    />
  );
};

export const ChunksInTime: Story = {
  render: () => <PerformanceTable />,
};
