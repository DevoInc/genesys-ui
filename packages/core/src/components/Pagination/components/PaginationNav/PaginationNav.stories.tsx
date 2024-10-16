import { Meta, StoryObj } from '@storybook/react';

import { PaginationNav } from './PaginationNav';

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
  args: {
    size: 'md',
    page: 1,
    lastPage: 5,
    goToPage: (page) => page,
  },
};

export const Custom: Story = {
  args: {
    size: 'lg',
    page: 1,
    lastPage: 5,
    goToPage: (page) => page,
  },
};

export const HidePrevNextButtons: Story = {
  args: {
    size: 'md',
    page: 1,
    lastPage: 5,
    hidePrevNextButtons: true,
    goToPage: (page) => page,
  },
};

export const HidePageSelector: Story = {
  args: {
    size: 'md',
    page: 1,
    lastPage: 5,
    hidePageSelector: true,
    goToPage: (page) => page,
  },
};

export const HideFirstLastButtons: Story = {
  args: {
    size: 'md',
    page: 1,
    lastPage: 5,
    hideFirstLastButtons: true,
    goToPage: (page) => page,
  },
};
