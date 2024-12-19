import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { StoryCol as Col, StoryRow as Row } from '../__stories__';

const meta: Meta<typeof Row> = {
  title: 'Components/Layout/Fluid/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
        <Col>Col</Col>
      </>
    ),
  },
};
