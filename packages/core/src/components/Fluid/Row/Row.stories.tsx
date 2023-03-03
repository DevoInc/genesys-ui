import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Col, Row } from '../..';
import { StyledFluidBox } from '../__stories__/StyledFluidBox';

const meta: Meta<typeof Row> = {
  title: 'Components/Core/Layout/Fluid/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Base: Story = {
  args: {
    children: (
      <>
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
      </>
    ),
  },
};
