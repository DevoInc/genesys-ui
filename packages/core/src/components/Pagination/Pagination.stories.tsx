import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Pagination } from '../Pagination';
import { dataRangePagination } from './helpers';
import { VFlex } from '../VFlex';

const itemStyle: React.CSSProperties = {
  margin: '0 0 1rem',
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

export const Playground: Story = {
  render: () =>
    (() => {
      const list = React.useMemo(() => [...Array(20).keys()], []);
      const [page, setPage] = React.useState(0);
      const [pageSize, setPageSize] = React.useState(10);

      return (
        <VFlex>
          <Pagination
            totalItems={list.length}
            page={page}
            pageSize={pageSize}
            onChange={(newPage: number) => {
              setPage(newPage);
            }}
            onPageSizeChange={(newPageSize: number) => {
              setPage(Math.floor((page * pageSize) / newPageSize));
              setPageSize(newPageSize);
            }}
          />
          <ul>
            {dataRangePagination(list, page, pageSize).map((data, idx) => (
              <li key={idx} style={itemStyle}>
                Item {Number(data) + 1}
              </li>
            ))}
          </ul>
        </VFlex>
      );
    })(),
  parameters: { controls: false },
};

export const Custom: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const list = React.useMemo(() => [...Array(20).keys()], []);
      const totalItems = list.length;
      const [page, setPage] = React.useState(0);
      const [pageSize, setPageSize] = React.useState(10);

      return (
        <VFlex>
          <Pagination._Container>
            <Pagination._Label
              totalItems={totalItems}
              pageSize={pageSize}
              page={page}
            />
            <Pagination._Range
              pageSize={pageSize}
              pageSizeOptions={[5, 10, 15, 20, 60]}
              onPageSizeChange={(newPageSize: number) => {
                setPage(Math.floor((page * pageSize) / newPageSize));
                setPageSize(newPageSize);
              }}
            />
            <Pagination._Nav
              page={page}
              totalItems={totalItems}
              pageSize={pageSize}
              onChange={(newPage: number) => {
                setPage(newPage);
              }}
              hideFirstLastButtons
            />
          </Pagination._Container>
          <ul>
            {dataRangePagination(list, page, pageSize).map((data, idx) => (
              <li key={idx} style={itemStyle}>
                Item {Number(data) + 1}
              </li>
            ))}
          </ul>
        </VFlex>
      );
    })(),
  parameters: { controls: false },
};
