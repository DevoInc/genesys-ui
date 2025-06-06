import { Meta, StoryObj } from '@storybook/react-vite';

import { NumberEditor } from './NumberEditor';

const meta: Meta<typeof NumberEditor> = {
  title: 'Components/Layout/Table/Editors/NumberEditor',
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
