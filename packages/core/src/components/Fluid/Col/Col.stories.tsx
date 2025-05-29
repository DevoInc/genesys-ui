import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../../Box';
import { Col } from './Col';
import { colStyles } from '../__stories__';

const meta: Meta<typeof Col> = {
  title: 'Components/Layout/Fluid/Col',
  component: Col,
};

export default meta;
type Story = StoryObj<typeof Col>;

export const Playground: Story = {
  args: {
    sm: 12,
    children: <Box style={{ ...colStyles }}>Col</Box>,
  },
  render: (args) =>
    ((props) => {
      return <Col {...props} />;
    })(args),
};
