import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../../Form';
import { InputControl } from '../../../InputControl';
import { Button } from '../../../Button';
import { Input } from '../../../Input';

const meta: Meta<typeof Form.Item> = {
  title: 'Components/Form/Form/Components/FormItem',
  component: Form.Item,
};

export default meta;
type Story = StoryObj<typeof Form.Item>;

export const Playground: Story = {
  args: {
    children: <InputControl aria-label="Input label" />,
  },
};

export const Distribution: Story = {
  render: (args) =>
    ((props) => (
      <Form.Group direction="row">
        <Form.Item {...props} flex="1 1 40%">
          <Input id="item-sb-1" label="Input label" />
        </Form.Item>
        <Form.Item {...props} flex="1 1 60%">
          <Input id="item-sb-2" label="Input label" />
        </Form.Item>
        <Form.Item {...props} alignSelf="flex-end">
          <Button>Add</Button>
        </Form.Item>
      </Form.Group>
    ))(args),
};
