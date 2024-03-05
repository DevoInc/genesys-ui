import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import type { TItem } from './declarations';
import { Pagination, usePagination } from '../';
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
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const list = React.useMemo(() => [...Array(150).keys()], []);
      const paginationHook = usePagination({
        list,
        conf: {
          initialPageSize: 5,
        },
      });

      return (
        <>
          <Pagination {...args} paginationHook={paginationHook}>
            <Pagination.Label />
            <Pagination.Range />
            <Pagination.Nav />
          </Pagination>
          <ul>
            {paginationHook.pageData.map((data: TItem, idx: number) => (
              <li key={idx} style={itemStyle}>
                Item {(data as number) + 1}
              </li>
            ))}
          </ul>
        </>
      );
    })(args),
};
