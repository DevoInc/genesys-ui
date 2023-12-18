import * as React from 'react';
import { ColDef, TableOptionsProps } from '../../declarations';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Holo } from '@devoinc/holo';

const meta: Meta<typeof Table> = {
  title: 'Components/Table/Performance',
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

const getOptions = (cols: number) => {
  const colDefs: ColDef[] = Array.from(
    { length: cols },
    (_, index: number) => ({
      id: `company_${index}`,
      headerName: `Company ${index + 1}`,
      cellRenderer: ({ value }) => String(value),
      cellStyle: {
        width: 12,
      },
    }),
  );
  return {
    defaultColumnDef: {
      editable: false,
    },
    visualOptions: {
      maxHeight: '500px',
      rowHeight: 'md',
      minWidth: 2000,
    },
    columnDefs: colDefs,
  } as TableOptionsProps;
};

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

  return <Table options={getOptions(100)} data={data} />;
};

export const ChunksInTime: Story = {
  render: () => <PerformanceTable />,
};
