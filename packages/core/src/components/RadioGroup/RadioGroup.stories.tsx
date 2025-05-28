import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { RadioGroup } from './RadioGroup';
import { Radio } from '../Radio';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
  args: {
    direction: 'column',
    hasLegendLabelFormat: true,
    legend: 'Radio group legend',
    legendPosition: 'top',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Playground: Story = {
  args: {
    children: [
      <Radio
        key="key-1"
        id="radio-one-id"
        name="Playground radio"
        label="Radio one"
        defaultChecked
      />,
      <Radio
        key="key-2"
        id="radio-two-id"
        name="Playground radio"
        label="Radio two"
      />,
      <Radio
        key="key-3"
        id="radio-three-id"
        name="Playground radio"
        label="Radio three"
      />,
    ],
  },
};

export const Required: Story = {
  tags: ['isHidden'],
  args: {
    children: [
      <Radio
        key="key-1"
        id="radio-one-id"
        name="Required radio"
        label="Radio one"
        defaultChecked
      />,
      <Radio
        key="key-2"
        id="radio-two-id"
        name="Required radio"
        label="Radio two"
      />,
      <Radio
        key="key-3"
        id="radio-three-id"
        name="Required radio"
        label="Radio three"
      />,
    ],
    required: true,
  },
};

export const Disabled: Story = {
  tags: ['isHidden'],
  args: {
    children: [
      <Radio
        key="key-1"
        id="radio-one-id"
        name="Disabled radio"
        label="Radio one"
        defaultChecked
      />,
      <Radio
        key="key-2"
        id="radio-two-id"
        name="Disabled radio"
        label="Radio two"
      />,
      <Radio
        key="key-3"
        id="radio-three-id"
        name="Disabled radio"
        label="Radio three"
      />,
    ],
    disabled: true,
  },
};

export const Validation: Story = {
  tags: ['isHidden'],
  args: {
    children: [
      <Radio
        key="key-1"
        id="radio-one"
        name="Validation radio"
        label="radio one"
        defaultChecked
        status="error"
      />,
      <Radio
        key="key-2"
        id="radio-two"
        name="Validation radio"
        label="radio two"
      />,
      <Radio
        key="key-3"
        id="radio-three"
        name="Validation radio"
        label="radio three"
      />,
    ],
    required: true,
    status: 'error',
    helper:
      'The selected option is not compatible with the previous field value.',
  },
};

export const Uncontrolled: Story = {
  tags: ['isHidden'],
  args: {
    children: [
      <Radio
        key="key-1"
        id="radio-one"
        name="Uncontrolled radio"
        label="radio one"
        defaultChecked
      />,
      <Radio
        key="key-2"
        id="radio-two"
        name="Uncontrolled radio"
        label="radio two"
      />,
    ],
  },
};

export const Controlled: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [selectedRadio, setSelectedRadio] = React.useState(2);
      return (
        <RadioGroup legend="Radio group legend">
          <Radio
            id="radio-one"
            label="radio one"
            checked={selectedRadio === 1}
            onChange={() => {
              setSelectedRadio(1);
            }}
          />
          <Radio
            id="radio-two"
            label="radio two"
            checked={selectedRadio === 2}
            onChange={() => {
              setSelectedRadio(2);
            }}
          />
        </RadioGroup>
      );
    })(),
};
