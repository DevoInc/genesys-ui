import { Meta, StoryObj } from '@storybook/react';

import { FieldsCombiner } from '..';
import { ElemButton, ElemSelect } from './__stories__/commonElements';

const meta: Meta<typeof FieldsCombiner> = {
  title: 'Components/Form/FieldsCombiner',
  component: FieldsCombiner,
  args: {
    hasWideControl: true,
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
    leftElem: ElemSelect,
    rightElem: ElemButton,
  },
};
