import { Meta, StoryObj } from '@storybook/react';

import { FieldsCombiner } from '..';
import {
  ElemIconButton,
  ElemButton,
  ElemSelect,
  ElemCheckbox,
  ElemInputControl,
  ElemPopper,
} from './__stories__/commonElements';

const meta: Meta<typeof FieldsCombiner> = {
  title: 'Components/Form/FieldsCombiner/cases',
  component: FieldsCombiner,
  args: {
    hasWideControl: true,
    size: 'md',
    status: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof FieldsCombiner>;

export const InputAndButton: Story = {
  name: 'Input and Button',
  args: {
    id: 'fields-1',
    label: 'Input and Button to right',
    leftElem: ElemInputControl,
    rightElem: ElemButton,
  },
};

export const InputAndIconButton: Story = {
  name: 'Input and IconButton',
  args: {
    id: 'fields-1',
    label: 'Input and IconButton to right',
    leftElem: ElemInputControl,
    rightElem: ElemIconButton,
  },
};

export const ButtonAndIconButton: Story = {
  name: 'Button and IconButton',
  args: {
    id: 'fields-1',
    label: 'Button and IconButton to right',
    leftElem: ElemButton,
    rightElem: ElemIconButton,
  },
};

export const ButtonAndPopper: Story = {
  name: 'Button and Popper',
  args: {
    id: 'fields-1',
    label: 'Button and Popper to right',
    leftElem: ElemButton,
    rightElem: ElemPopper,
  },
};

export const InputAndCheckbox: Story = {
  name: 'Input and Checkbox',
  args: {
    id: 'fields-1',
    label: 'Input and Checkbox to right',
    leftElem: ElemInputControl,
    rightElem: ElemCheckbox,
  },
};

export const SelectAndInput: Story = {
  name: 'Select and Input',
  args: {
    id: 'fields-1',
    label: 'Select and Input to right',
    leftElem: ElemSelect,
    rightElem: ElemInputControl,
  },
};
