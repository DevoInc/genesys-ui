import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InputControl, Form, Button } from '..';

const meta: Meta<typeof Form.Item> = {
  title: 'Components/Core/Form/Form/Item',
  component: Form.Item,
};

export default meta;
type Story = StoryObj<typeof Form.Item>;

export const Base: Story = {
  args: {
    children: <InputControl aria-label="Input label" />,
  },
};

export const SeveralItems: Story = {
  render: () => (
    <Form>
      <Form.Group direction="row">
        <Form.Item flex="1 1 40%">
          <InputControl aria-label="Input label" />
        </Form.Item>
        <Form.Item flex="1 1 60%">
          <InputControl aria-label="Input label" />
        </Form.Item>
        <Form.Item>
          <Button>Submit</Button>
        </Form.Item>
      </Form.Group>
    </Form>
  ),
};
