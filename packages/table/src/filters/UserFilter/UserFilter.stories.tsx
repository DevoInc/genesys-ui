import { Meta, StoryObj } from '@storybook/react';

import { UserFilter } from './UserFilter';

const meta: Meta<typeof UserFilter> = {
  title: 'Components/Layout/Table/Filters/UserFilter',
  component: UserFilter,
};

export default meta;
type Story = StoryObj<typeof UserFilter>;

export const Base: Story = {
  args: {
    // data: [{ col0: 'test b' }, { col0: 'test a' }, { col0: 'test c' }],
    // eslint-disable-next-line no-console
    onChange: console.log,
    colDef: {
      id: 'col0',
      context: {
        userMapping: {
          'test a': {
            name: 'Peter',
            email: 'peter@email.com',
            colorScheme: 'error',
          },
          'separator': {
            isSeparator: true
          },
          'test b': {
            name: 'John',
            email: 'john@email.com',
            colorScheme: 'success',
            label: 'Success',
          },
          'test c': {
            name: 'Maria',
            email: 'maria@email.com',
            colorScheme: 'warning',
          },
        },
      },
    },
  },
};
