import { Meta, StoryObj } from '@storybook/react';

import { DateEditor } from './DateEditor';

const meta: Meta<typeof DateEditor> = {
  title: 'Components/Layout/Table/Editors/DateEditor',
  component: DateEditor,
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<typeof DateEditor>;

export const Base: Story = {
  args: {
    value: Date.now(),
  },
};
