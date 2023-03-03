import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Col, Container, Row } from '../../';
import { StyledFluidBox } from '../__stories__/StyledFluidBox';

const meta: Meta<typeof Container> = {
  title: 'Components/Core/Layout/Fluid/Container',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Base: Story = {
  render: () => (
    <Row>
      <Col sm={4} md={2} lg={1}>
        <StyledFluidBox>Col</StyledFluidBox>
      </Col>
      <Col sm={4} md={2} lg={1}>
        <StyledFluidBox>Col</StyledFluidBox>
      </Col>
      <Col sm={4} md={2} lg={1}>
        <StyledFluidBox>Col</StyledFluidBox>
      </Col>
      <Col sm={4} md={2} lg={1}>
        <StyledFluidBox>Col</StyledFluidBox>
      </Col>
      <Col sm={4} md={2} lg={1}>
        <StyledFluidBox>Col</StyledFluidBox>
      </Col>
      <Col sm={4} md={2} lg={1}>
        <StyledFluidBox>Col</StyledFluidBox>
      </Col>
    </Row>
  ),
};
