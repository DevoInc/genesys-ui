import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { StoryCol as Col } from '../__stories__';

const meta: Meta<typeof Col> = {
  title: 'Components/Layout/Fluid/Col',
  component: Col,
};

export default meta;
type Story = StoryObj<typeof Col>;

export const Base: Story = {
  args: {
    sm: 12,
    children: 'Col',
  },
  render: (args) =>
    ((props) => {
      return <Col {...props} />;
    })(args),
};
