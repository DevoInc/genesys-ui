import { Meta, StoryObj } from '@storybook/react-vite';

import { FloatingHelper } from './FloatingHelper';

const meta: Meta<typeof FloatingHelper> = {
  title: 'Components/Feedback/FloatingHelper',
  component: FloatingHelper,
  args: { size: 'md', status: 'base' },
};

export default meta;
type Story = StoryObj<typeof FloatingHelper>;

export const Playground: Story = {
  args: {
    message:
      "Zip Code must be in the format of '#####' or '#####-####', example: '32334' or '32334-0092'",
  },
};
