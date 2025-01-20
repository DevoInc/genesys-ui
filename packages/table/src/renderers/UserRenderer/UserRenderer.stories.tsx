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
      id: 'p',
      context: {
        options: {},
      },
    },
  },
};

export const Detailed: Story = {
  args: {
    value: 'Jhon Due',
    colDef: {
      id: 'p',
      context: {
        options: {
          subtitle: 'The subtitle here',
          email: 'jhon.due@email.com',
          job: 'Sotfware Engineer',
          role: 'Team lead',
        },
      },
    },
  },
};
