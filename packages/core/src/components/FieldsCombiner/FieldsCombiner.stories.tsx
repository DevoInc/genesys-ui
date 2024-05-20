import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

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

export const Base: Story = {
  args: {
    id: 'fields-1',
    label: 'Select and Button to right with status',
    children: [ElemSelect, ElemButton],
  },
};

export const InputAndButton: Story = {
  name: 'Input and Button',
  args: {
    id: 'fields-1',
    label: 'Input and Button to right',
    children: [ElemInputControl, ElemButton],
  },
};

export const InputAndIconButton: Story = {
  name: 'Input and IconButton',
  args: {
    id: 'fields-1',
    label: 'Input and IconButton to right',
    children: [ElemInputControl, ElemIconButton],
  },
};

export const ButtonAndIconButton: Story = {
  name: 'Button and IconButton',
  args: {
    id: 'fields-1',
    label: 'Button and IconButton to right',
    children: [ElemButton, ElemIconButton],
  },
};

export const ButtonAndPopover: Story = {
  name: 'Button and Popover',
  args: {
    id: 'fields-1',
    label: 'Button and Popover to right',
    children: [ElemButton, ElemPopover],
  },
};

export const InputAndCheckbox: Story = {
  name: 'Input and Checkbox',
  args: {
    id: 'fields-1',
    label: 'Input and Checkbox to right',
    children: [ElemInputControl, ElemCheckbox],
  },
};

export const SelectAndInput: Story = {
  name: 'Select and Input',
  args: {
    id: 'fields-1',
    label: 'Select and Input to right',
    children: [ElemSelect, ElemInputControl],
  },
};

export const CustomWidths: Story = {
  name: 'Custom widths',
  args: {
    id: 'fields-1',
    label: 'Custom widths for fields',
    children: [ElemSelectCustomWidth, ElemInputControlCustomWidth],
  },
};

export const WithValidation: Story = {
  name: 'With validation',
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
