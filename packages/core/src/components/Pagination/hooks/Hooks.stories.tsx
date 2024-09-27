import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../Pagination';
import { usePagination } from '../hooks';

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
  title: 'Components/Navigation/Pagination/Hooks',
  component: Pagination,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const UsePagination: Story = {
  render: () =>
    (() => {
      const list = React.useMemo(() => [...Array(22).keys()], []);
      const paginationHook = usePagination({
        list,
        conf: {
          initialPageSize: 5,
        },
      });

      return (
        <>
          <Pagination paginationHook={paginationHook}>
            <Pagination.Label />
            <Pagination.Range />
            <Pagination.Nav />
          </Pagination>
          {paginationHook.pageData.map((data, idx) => (
            <p key={idx} style={itemStyle}>
              Item {Number(data) + 1}
            </p>
          ))}
        </>
      );
    })(),
  parameters: { controls: false },
};
