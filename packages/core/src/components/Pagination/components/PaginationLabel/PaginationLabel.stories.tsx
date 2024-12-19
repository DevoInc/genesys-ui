import { Meta, StoryObj } from '@storybook/react';

import { PaginationLabel } from './PaginationLabel';
import { DEFAULT_PAGE_SIZE } from '../../constants';

const meta: Meta<typeof PaginationLabel> = {
  title: 'Components/Navigation/Pagination/Components/PaginationLabel',
  component: PaginationLabel,
  args: {
    size: 'md',
    pageSize: DEFAULT_PAGE_SIZE,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationLabel>;

const customTexts = {
  infoTextFn: ({
    totalItems,
    pageSize,
    pageFirstItem,
    pageLastItem,
  }: {
    totalItems: number;
    pageSize: number;
    pageFirstItem: number;
    pageLastItem: number;
  }) => {
    return pageSize > totalItems
      ? `${totalItems} elementos`
      : `${pageFirstItem} - ${pageLastItem} de ${totalItems} elementos`;
  },
};

export const Playground: Story = {
  args: {
    totalItems: 100,
    page: 0,
    lastPage: 4,
  },
};

export const UsingCustomContent: Story = {
  tags: ['isHidden'],
  args: {
    content: '1 - 5 of 150 items',
    pageSize: undefined,
  },
};

export const UsingCustomTexts: Story = {
  tags: ['isHidden'],
  args: {
    totalItems: 200,
    pageFirstItem: 0,
    pageLastItem: 20,
    texts: customTexts,
    page: 0,
    lastPage: 4,
    colorScheme: 'success',
    tooltip: 'label',
  },
};
