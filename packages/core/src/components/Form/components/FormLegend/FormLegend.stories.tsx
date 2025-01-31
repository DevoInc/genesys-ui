import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../../Form';
import { Button } from '../../../Button';
import { GIPlusSignAddNew } from '@devoinc/genesys-icons';

const meta: Meta<typeof Form.Legend> = {
  title: 'Components/Form/Form/Components/FormLegend',
  component: Form.Legend,
  args: {
    text: 'Legend',
  },
};

export default meta;
type Story = StoryObj<typeof Form.Legend>;

export const Playground: Story = {};

export const WithRequiredMark: Story = {
  tags: ['isHidden'],
  args: {
    requiredMark: <Form.RequiredMark />,
  },
};

export const WithFloatingHelper: Story = {
  tags: ['isHidden'],
  args: {
    helper: (
      <Form.FloatingHelper message="This is the FormLegend floating helper" />
    ),
  },
};

export const WithAppendContent: Story = {
  tags: ['isHidden'],
  args: {
    appendContent: (
      <Button size="sm" icon={<GIPlusSignAddNew />}>
        Add a new field
      </Button>
    ),
  },
};
