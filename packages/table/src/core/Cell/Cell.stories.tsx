import { Meta, StoryObj } from '@storybook/react';
import { Cell } from './Cell';

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  args: {
    columnDef: {
      id: 'column',
      cellRenderer: ({ value }) => value,
    },
    width: 300,
    height: 60,
    data: 'test',
  },
};
