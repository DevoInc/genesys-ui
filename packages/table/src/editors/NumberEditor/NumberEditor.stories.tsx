import { Meta, StoryObj } from '@storybook/react';

import { NumberEditor } from './NumberEditor';

const meta: Meta<typeof NumberEditor> = {
  title: 'Components/Table/Editors/NumberEditor',
  component: NumberEditor,
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<typeof NumberEditor>;

export const Base: Story = {
  args: {
    value: 42,
  },
};
