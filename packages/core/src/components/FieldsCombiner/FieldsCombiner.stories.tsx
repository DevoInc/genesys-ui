import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  ElemButton,
  ElemCheckbox,
  ElemIconButton,
  ElemInputControl,
  ElemInputControlCustomWidth,
  ElemPopover,
  ElemSelect,
  ElemSelectCustomWidth,
} from './__stories__/commonElements';
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

export const Playground: Story = {
  args: {
    id: 'fields-1',
    label: 'Select and Button to right with status',
    children: [ElemSelect, ElemButton],
  },
};

export const InputAndButton: Story = {
  tags: ['isHidden'],
  args: {
    id: 'fields-1',
    label: 'Input and Button to right',
    children: [ElemInputControl, ElemButton],
  },
};

export const InputAndIconButton: Story = {
  tags: ['isHidden'],
  args: {
    id: 'fields-1',
    label: 'Input and IconButton to right',
    children: [ElemInputControl, ElemIconButton],
  },
};

export const ButtonAndIconButton: Story = {
  tags: ['isHidden'],
  args: {
    id: 'fields-1',
    label: 'Button and IconButton to right',
    children: [ElemButton, ElemIconButton],
  },
};

export const ButtonAndPopover: Story = {
  tags: ['isHidden'],
  args: {
    id: 'fields-1',
    label: 'Button and Popover to right',
    children: [ElemButton, ElemPopover],
  },
};

export const InputAndCheckbox: Story = {
  tags: ['isHidden'],
  args: {
    id: 'fields-1',
    label: 'Input and Checkbox to right',
    children: [ElemInputControl, ElemCheckbox],
  },
};

export const SelectAndInput: Story = {
  tags: ['isHidden'],
  args: {
    id: 'fields-1',
    label: 'Select and Input to right',
    children: [ElemSelect, ElemInputControl],
  },
};

export const CustomWidths: Story = {
  tags: ['isHidden'],
  args: {
    id: 'fields-1',
    label: 'Custom widths for fields',
    children: [ElemSelectCustomWidth, ElemInputControlCustomWidth],
  },
};

export const WithValidation: Story = {
  tags: ['isHidden'],
  render: () => {
    return (
      <FieldsCombiner
        id="fields-1"
        label="Input and Button to right with error status"
        size="md"
        status="error"
        helper="There is a problem with the text format."
      >
        <FieldsCombiner.Input aria-label="error input" id="test-2" />
        <FieldsCombiner.Button>Send</FieldsCombiner.Button>
      </FieldsCombiner>
    );
  },
};
