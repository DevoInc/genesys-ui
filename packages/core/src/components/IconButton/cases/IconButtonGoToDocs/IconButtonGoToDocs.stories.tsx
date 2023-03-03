import { Meta, StoryObj } from '@storybook/react';

import { IconButtonGoToDocs } from '..';

const meta: Meta<typeof IconButtonGoToDocs> = {
  title: 'Components/Core/Button/IconButtonGoToDocs',
  component: IconButtonGoToDocs,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonGoToDocs>;

export const Base: Story = {};
