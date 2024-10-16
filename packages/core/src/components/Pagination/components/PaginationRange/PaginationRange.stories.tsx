import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PaginationRange } from './PaginationRange';

const meta: Meta<typeof PaginationRange> = {
  title: 'Components/Navigation/Pagination/Components/Range',
  component: PaginationRange,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof PaginationRange>;

export const Base: Story = {
  render: () =>
    (() => {
      const [pageSize, setPageSize] = React.useState(10);

      const onPageSizeChange = (newPageSize) => {
        setPageSize(newPageSize);
      };

      return (
        <PaginationRange
          page={1}
          pageSize={pageSize}
          pageSizeOptions={[5, 10, 15]}
          onPageSizeChange={onPageSizeChange}
        />
      );
    })(),
};
