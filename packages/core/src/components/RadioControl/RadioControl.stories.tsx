import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { RadioControl } from './RadioControl';
import { HFlex } from '../HFlex';

const meta: Meta<typeof RadioControl> = {
  title: 'Components/Form/RadioControl',
  component: RadioControl,
  args: {
    'aria-label': 'Radio label',
    status: 'base',
    size: 'md',
  },
  argTypes: {
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioControl>;

export const Playground: Story = {};

export const Uncontrolled: Story = {
  tags: ['isHidden'],
  render: () => (
    <HFlex spacing="cmp-xs">
      <RadioControl name="radio" aria-label="radio one" defaultChecked />
      <RadioControl name="radio" aria-label="radio two" />
    </HFlex>
  ),
};

export const Controlled: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [selectedRadio, setSelectedRadio] = React.useState(2);
      return (
        <HFlex spacing="cmp-xs">
          <RadioControl
            aria-label="radio one"
            checked={selectedRadio === 1}
            onChange={() => {
              setSelectedRadio(1);
            }}
          />
          <RadioControl
            aria-label="radio two"
            checked={selectedRadio === 2}
            onChange={() => {
              setSelectedRadio(2);
            }}
          />
        </HFlex>
      );
    })(),
};
