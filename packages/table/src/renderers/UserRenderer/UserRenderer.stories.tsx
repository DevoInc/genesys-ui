import { Meta, StoryObj } from '@storybook/react';

import { UserRenderer } from './UserRenderer';

const meta: Meta<typeof UserRenderer> = {
  title: 'Components/Layout/Table/Renderers/UserRenderer',
  component: UserRenderer,
};

export default meta;
type Story = StoryObj<typeof UserRenderer>;

export const Base: Story = {
  args: {
    value: 'jhon.due@email.com',
    colDef: {
      id: 'id-1',
      context: {},
    },
  },
};

export const Detailed: Story = {
  args: {
    value: 'Jhon Due',
    colDef: {
      id: 'id-2',
      context: {
        subtitle: 'The subtitle here',
        email: 'jhon.due@email.com',
        job: 'Sotfware Engineer',
        role: 'Team lead',
      },
    },
  },
};
