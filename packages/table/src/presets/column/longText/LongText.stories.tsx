import { Meta, StoryObj } from '@storybook/react';

import { BasicTable } from '../../../recipes';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Presets/Column/LongText',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Base: Story = {
  args: {
    colDefs: [
      {
        id: 'id',
        headerName: 'id',
        preset: 'text',
      },
      {
        id: 'text',
        headerName: 'Long text',
        preset: 'longText',
        rowHeight: 260,
        truncateLine: 0,
      },
    ],
    data: [
      { id: '1', text: 'short text' },
      {
        id: '2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque laoreet lectus et vestibulum. Curabitur varius accumsan metus sed interdum. Mauris nec est at eros pharetra congue. Donec malesuada erat eget libero efficitur, nec convallis enim egestas. Mauris vitae ante quis purus ornare iaculis et vitae nibh. Cras pharetra suscipit quam, vel semper eros bibendum eget. Sed felis ipsum, maximus eu elit non, vehicula maximus tortor. Praesent congue ultricies libero ut ultricies. Donec eu elementum lacus. Quisque ac suscipit sem, vitae luctus tellus.',
      },
    ],
  },
};
