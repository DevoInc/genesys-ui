import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { StyledFluidBox } from '../__stories__/StyledFluidBox';
import { Col } from '..';

const meta: Meta<typeof Col> = {
  title: 'Components/Core/Layout/Fluid/Col',
  component: Col,
};

export default meta;
type Story = StoryObj<typeof Col>;

export const Base: Story = {
  args: {
    sm: 12,
    children: <StyledFluidBox>Col</StyledFluidBox>,
  },
};
