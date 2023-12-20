import { Meta, StoryObj } from '@storybook/react';

import { OptionsEditor } from './OptionsEditor';

const meta: Meta<typeof OptionsEditor> = {
  title: 'Components/Table/Editors/OptionsEditor',
  component: OptionsEditor,
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<typeof OptionsEditor>;

export const Base: Story = {
  args: {
    value: ['a'],
    data: [{ col1: 'a' }, { col1: 'b' }, { col1: 'c' }],
    colDef: {
      id: 'col1',
    },
  },
};

export const OptionsParams: Story = {
  args: {
    value: ['a'],
    colDef: {
      id: 'col1',
      cellEditorParams: {
        options: [
          { label: 'A', value: 'a' },
          { label: 'B', value: 'b' },
        ],
      },
    },
  },
};
