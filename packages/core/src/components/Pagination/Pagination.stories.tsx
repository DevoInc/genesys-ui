import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../Pagination';
import { dataRangePagination } from './helpers';

const itemStyle: React.CSSProperties = {
  margin: '1rem 0',
  padding: '1rem',
  color: '#484848',
  fontSize: '1.4rem',
  textAlign: 'center',
  backgroundColor: 'rgba(210,210,210,0.45)',
  borderRadius: '0.4rem',
};

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const UsePagination: Story = {
  render: () =>
    (() => {
      const list = React.useMemo(() => [...Array(20).keys()], []);
      const [page, setPage] = React.useState(0);
      const [pageSize, setPageSize] = React.useState(10);

      return (
        <>
          <Pagination
            totalItems={list.length}
            page={page}
            pageSize={pageSize}
            onChange={(newPage: number) => {
              setPage(newPage);
            }}
            onPageSizeChange={(newPageSize: number) => {
              setPage(Math.floor((page * pageSize) / newPageSize))
              setPageSize(newPageSize);
            }}
          />
          {dataRangePagination(list, page, pageSize).map((data, idx) => (
            <p key={idx} style={itemStyle}>
              Item {Number(data) + 1}
            </p>
          ))}
        </>
      );
    })(),
  parameters: { controls: false },
};
