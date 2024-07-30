import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { usePagination } from '../../hooks';
import { Pagination } from '../../Pagination';
import { PaginationRange } from './PaginationRange';

const meta: Meta<typeof PaginationRange> = {
  title: 'Components/Navigation/Pagination/Components',
  component: PaginationRange,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof PaginationRange>;

export const Range: Story = {
  render: (args) =>
    (() => {
      const list = React.useMemo(() => [...Array(150).keys()], []);
      const paginationHook = usePagination({
        list,
        conf: {
          initialPageSize: 5,
        },
      });

      return <Pagination.Range {...args} paginationHook={paginationHook} />;
    })(),
};
