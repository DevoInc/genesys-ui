import { Meta, StoryObj } from '@storybook/react';

import { OptionsEditor } from './OptionsEditor';

const meta: Meta<typeof OptionsEditor> = {
  title: 'Components/Layout/Table/Editors/OptionsEditor',
  component: OptionsEditor,
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<typeof OptionsEditor>;

export const Base: Story = {
  args: {
    value: ['a'],
    colDef: {
      id: 'col1',
      context: {
        options: [
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ],
      },
    },
  },
};
