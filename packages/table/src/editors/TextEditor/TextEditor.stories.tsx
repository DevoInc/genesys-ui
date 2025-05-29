import { Meta, StoryObj } from '@storybook/react-vite';

import { TextEditor } from './TextEditor';

const meta: Meta<typeof TextEditor> = {
  title: 'Components/Layout/Table/Editors/TextEditor',
  component: TextEditor,
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<typeof TextEditor>;

export const Base: Story = {
  args: {
    value: 'This is a text',
  },
};
