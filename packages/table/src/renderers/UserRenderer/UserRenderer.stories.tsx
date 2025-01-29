import { Meta, StoryObj } from '@storybook/react';

import { UserRenderer } from './UserRenderer';

const meta: Meta<typeof UserRenderer> = {
  title: 'Components/Layout/Table/Renderers/UserRenderer',
  component: UserRenderer,
};

export default meta;
type Story = StoryObj<typeof UserRenderer>;

export const Playground: Story = {
  args: {
    value: 'jhon.due@email.com',
  },
};

export const Detailed: Story = {
  tags: ['isHidden'],
  args: {
    value: 'key1',
    colDef: {
      id: 'id-2',
      context: {
        userMapping: {
          key1: {
            name: 'Jhon Due',
            subtitle: 'The subtitle here',
            email: 'jhon.due@email.com',
            job: 'Sotfware Engineer',
            role: 'Team lead',
          },
        },
      },
    },
  },
};
