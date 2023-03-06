import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Pagination, usePagination } from '../..';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Core/Navigation/Pagination/Hooks',
  component: Pagination,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const UsePagination: Story = {
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
          <Pagination {...args} paginationHook={paginationHook} />
          {paginationHook.pageData.map((data, idx) => (
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
              Item {Number(data) + 1}
            </p>
          ))}
        </>
      );
    })(),
  parameters: { controls: false },
};
