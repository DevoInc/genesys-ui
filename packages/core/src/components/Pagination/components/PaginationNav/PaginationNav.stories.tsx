import { Meta, StoryObj } from '@storybook/react-vite';

import { PaginationNav } from './PaginationNav';

const meta: Meta<typeof PaginationNav> = {
  title: 'Components/Navigation/Pagination/Components/PaginationNav',
  component: PaginationNav,
  args: {
    size: 'md',
    page: 1,
    lastPage: 5,
    goToPage: (page) => page,
  },
};

export default meta;
type Story = StoryObj<typeof PaginationNav>;

export const Playground: Story = {};

export const HidePrevNextButtons: Story = {
  tags: ['isHidden'],
  args: {
    hidePrevNextButtons: true,
  },
};

export const HidePageSelector: Story = {
  tags: ['isHidden'],
  args: {
    hidePageSelector: true,
  },
};

export const HideFirstLastButtons: Story = {
  tags: ['isHidden'],
  args: {
    hideFirstLastButtons: true,
  },
};
