import { Meta, StoryObj } from '@storybook/react';

import { PaginationLabel } from './PaginationLabel';

const meta: Meta<typeof PaginationLabel> = {
  title: 'Components/Navigation/Pagination/Components/Label',
  component: PaginationLabel,
};

export default meta;
type Story = StoryObj<typeof PaginationLabel>;

const texts = {
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
}

export const BaseContent: Story = {
  args: {
    size: 'md',
    content: '1 - 5 of 150 items',
  },
};

export const BaseInfoText: Story = {
  args: {
    size: 'md',
    totalItems: 10,
    pageSize: 3,
    page: 0,
    lastPage: 4,
  },
};

export const BaseInfoTextCsutom: Story = {
  args: {
    size: 'lg',
    texts: texts,
    totalItems: 10,
    pageSize: 3,
    page: 0,
    lastPage: 4,
    colorScheme: 'success',
    tooltip: 'label',
  },
};
