import { Meta, StoryObj } from '@storybook/react';

import { ElemButton, ElemSelect } from './__stories__/commonElements';
import { FieldsCombiner } from './FieldsCombiner';

const meta: Meta<typeof FieldsCombiner> = {
  title: 'Components/Form/FieldsCombiner',
  component: FieldsCombiner,
  args: {
    size: 'md',
    status: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof FieldsCombiner>;

export const Base: Story = {
  args: {
    id: 'fields-1',
    label: 'Select and Button to right with status',
    children: [ElemSelect, ElemButton],
  },
};
