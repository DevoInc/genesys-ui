import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Form } from '../Form';
import { IconButtonGoToDocs } from '../IconButton';
import { InputControl } from '../InputControl';

const meta: Meta<typeof Form> = {
  title: 'Components/Form/Form',
  component: Form,
  args: {
    direction: 'column',
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Playground: Story = {
  args: {
    children: <InputControl aria-label="Input label" />,
  },
};

export const MultipleGroups: Story = {
  tags: ['isHidden'],
  args: {
    name: 'Multiple groups',
    children: [
      <Form.Group key={3}>
        <InputControl aria-label="Input label" />
        <InputControl aria-label="Input label" />
      </Form.Group>,
      <Form.Group key={1} legend="Group one">
        <InputControl aria-label="Input label" />
        <InputControl aria-label="Input label" />
      </Form.Group>,
      <Form.Group key={2} legend="Group two" boxed>
        <Form.Group direction="row">
          <Form.Item flex="1 1 40%">
            <InputControl aria-label="Input label" />
          </Form.Item>
          <Form.Item flex="1 1 60%">
            <InputControl aria-label="Input label" />
          </Form.Item>
          <Form.Item>
            <Button>Add</Button>
          </Form.Item>
        </Form.Group>
        <Form.Group direction="row">
          <Form.Item flex="1 1 40%">
            <InputControl aria-label="Input label" />
          </Form.Item>
          <Form.Item flex="1 1 60%">
            <InputControl aria-label="Input label" />
          </Form.Item>
          <Form.Item>
            <Button>Add</Button>
          </Form.Item>
        </Form.Group>
      </Form.Group>,
      <Form.Buttons
        key={3}
        helper={
          <IconButtonGoToDocs
            size="sm"
            href="https://www.devo.com"
            tooltip="Go to Devo"
          />
        }
      >
        <Button>Cancel</Button>
        <Button colorScheme="accent">Submit</Button>
      </Form.Buttons>,
    ],
  },
};
