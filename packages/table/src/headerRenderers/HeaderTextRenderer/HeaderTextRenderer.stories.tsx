import { Meta, StoryObj } from '@storybook/react';

import { HeaderTextRenderer } from './HeaderTextRenderer';

const meta: Meta<typeof HeaderTextRenderer> = {
  title: 'Components/Layout/Table/HeaderRenderers/HeaderTextRenderer',
  component: HeaderTextRenderer,
};

export default meta;
type Story = StoryObj<typeof HeaderTextRenderer>;

export const Base: Story = {
  args: {
    colDef: {
      id: 'bulk',
      headerName: 'test',
    },
  },
};
