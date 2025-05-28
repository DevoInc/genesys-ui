import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { DecoratorBar } from './DecoratorBar';

const meta: Meta<typeof DecoratorBar> = {
  title: 'Components/Feedback/DecoratorBar',
  component: DecoratorBar,
  args: { direction: 'vertical', size: '100%' },
};

export default meta;
type Story = StoryObj<typeof DecoratorBar>;

export const Playground: Story = {
  render: (args) => (
    <div style={{ height: '40px', width: '40px' }}>
      <DecoratorBar {...args} />
    </div>
  ),
};
