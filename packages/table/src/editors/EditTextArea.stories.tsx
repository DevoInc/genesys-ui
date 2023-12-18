import { Meta, StoryObj } from '@storybook/react';
import { EditTextArea } from '.';

const meta: Meta<typeof EditTextArea> = {
  title: 'Components/Table/Editors/EditTextArea',
  component: EditTextArea,
};

export default meta;
type Story = StoryObj<typeof EditTextArea>;

export const Base: Story = {
  args: {
    value: 'test',
    onChange: console.log,
  },
};
