import { Meta, StoryObj } from '@storybook/react';

import { BooleanEditor } from './BooleanEditor';

const meta: Meta<typeof BooleanEditor> = {
  title: 'Components/Layout/Table/Editors/BooleanEditor',
  component: BooleanEditor,
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<typeof BooleanEditor>;

export const Base: Story = {
  args: {
    value: false,
  },
};
