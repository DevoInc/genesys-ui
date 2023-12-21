import { Meta, StoryObj } from '@storybook/react';

import { OptionsFilter } from './OptionsFilter';

const meta: Meta<typeof OptionsFilter> = {
  title: 'Components/Table/Filters/OptionsFilter',
  component: OptionsFilter,
};

export default meta;
type Story = StoryObj<typeof OptionsFilter>;

export const Base: Story = {
  args: {
    data: [{ col0: 'test b' }, { col0: 'test a' }, { col0: 'test c' }],
    colDef: {
      id: 'col0',
      cellFilterParams: {
        defaultValue: 'all',
        options: [
          { value: 'all', label: 'All' },
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' },
        ],
      },
    },
  },
};
