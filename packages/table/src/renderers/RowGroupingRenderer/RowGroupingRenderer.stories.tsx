import { Meta, StoryObj } from '@storybook/react-vite';

import { RowGroupingRenderer } from './RowGroupingRenderer';

const meta: Meta<typeof RowGroupingRenderer> = {
  title: 'Components/Layout/Table/Renderers/rowGroupingRenderer',
  component: RowGroupingRenderer,
};

export default meta;
type Story = StoryObj<typeof RowGroupingRenderer>;

export const Base: Story = {
  args: {
    value: false,
  },
};