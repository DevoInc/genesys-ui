import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Container } from '../../';
import { StoryCol as Col, StoryRow as Row } from '../__stories__';

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Fluid/Container',
  component: Container,
  args: {
    gutter: 'layout-sm',
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Base: Story = {
  args: {
    children: (
      <Row>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
      </Row>
    ),
  },
};
