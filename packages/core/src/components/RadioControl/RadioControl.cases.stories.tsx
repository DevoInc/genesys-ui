import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RadioControl, HFlex } from '..';

const meta: Meta<typeof RadioControl> = {
  title: 'Components/Core/Form/RadioControl/Cases',
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

export const Uncontrolled: Story = {
  render: () => (
    <HFlex spacing="cmp-xs">
      <RadioControl name="radio" aria-label="radio one" defaultChecked />
      <RadioControl name="radio" aria-label="radio two" />
    </HFlex>
  ),
};

export const Controlled: Story = {
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
