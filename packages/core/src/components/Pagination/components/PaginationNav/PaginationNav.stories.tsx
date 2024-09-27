import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PaginationNav } from './PaginationNav';
import { usePagination } from '../../hooks';
import { Pagination } from '../../Pagination';

const meta: Meta<typeof PaginationNav> = {
  title: 'Components/Navigation/Pagination/Components/Nav',
  component: PaginationNav,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof PaginationNav>;

export const Base: Story = {
  render: (args) =>
    (() => {
      const list = React.useMemo(() => [...Array(150).keys()], []);
      const paginationHook = usePagination({
        list,
        conf: {
          initialPageSize: 5,
        },
      });

      return <Pagination.Nav {...args} paginationHook={paginationHook} />;
    })(),
};
