import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination, Tooltip } from '../';
import { usePagination } from '../../hooks';
import { Item } from './declarations';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Core/Navigation/Pagination',
  component: Pagination,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Base: Story = {
  render: (args) =>
    (() => {
      const list = [...Array(22).keys()];
      const paginationHook = usePagination({
        list,
        conf: {
          initialPageSize: 5,
        },
      });

      return (
        <>
          <Tooltip place={'bottom'} delayShow={150} />
          <Pagination {...args} paginationHook={paginationHook} />
          {paginationHook.pageData.map((data: Item, idx: number) => (
            <p
              key={idx}
              style={{
                margin: '1rem 0',
                padding: '1rem',
                color: '#484848',
                fontSize: '1.4rem',
                textAlign: 'center',
                backgroundColor: 'rgba(210,210,210,0.45)',
                borderRadius: '0.4rem',
              }}
            >
              Item {(data as number) + 1}
            </p>
          ))}
        </>
      );
    })(),
};
