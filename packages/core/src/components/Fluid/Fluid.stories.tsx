import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Col, Container, Row, Typography } from '../..';
import { StyledFluidBox } from './__stories__/StyledFluidBox';

const meta: Meta<typeof Container> = {
  title: 'Components/Core/Layout/Fluid',
  component: Container,
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Base: Story = {
  args: {
    children: (
      <>
        <Container>
          <Row marginBottom="layout-xxs">
            <Col>
              <Typography.Heading size="h5">
                Responsive example: Col sm=4 md=2 lg=1
              </Typography.Heading>
            </Col>
          </Row>
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
        </Container>
        <Container marginTop="layout-md">
          <Row marginBottom="layout-xxs">
            <Col>
              <Typography.Heading size="h5">Equal width</Typography.Heading>
            </Col>
          </Row>
          <Row>
            <Col>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
            <Col>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
            <Col>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
          </Row>
        </Container>
        <Container marginTop="layout-md">
          <Row marginBottom="layout-xxs">
            <Col>
              <Typography.Heading size="h5">
                Vertical alignment: Row alignItems=flex-end
              </Typography.Heading>
            </Col>
          </Row>
          <Row>
            <Col>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
            <Col>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
            <Col>
              <StyledFluidBox height={'100px'}>Col</StyledFluidBox>
            </Col>
            <Col>
              <StyledFluidBox height={'100px'}>
                Col alignSelf=center
              </StyledFluidBox>
            </Col>
            <Col>
              <StyledFluidBox height={'100px'}>
                Col alignSelf=flex-start
              </StyledFluidBox>
            </Col>
            <Col>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
          </Row>
        </Container>
        <Container marginTop="layout-md">
          <Row marginBottom="layout-xxs">
            <Col>
              <Typography.Heading size="h5">
                Horizontal alignment: Row justifyContent=flex-end
              </Typography.Heading>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
            <Col xs={2}>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
            <Col xs={2}>
              <StyledFluidBox>Col</StyledFluidBox>
            </Col>
          </Row>
        </Container>
        <Container marginTop="layout-md">
          <Row marginBottom="layout-xxs">
            <Col>
              <Typography.Heading size="h5">
                Offsetting columns
              </Typography.Heading>
            </Col>
          </Row>
          <Row>
            <Col xs={2}>
              <StyledFluidBox>Col xs=2</StyledFluidBox>
            </Col>
            <Col xs={2} offset={{ xs: 2 }}>
              <StyledFluidBox>Col xs=2 offset=2</StyledFluidBox>
            </Col>
            <Col xs={2} offset={{ xs: 2 }}>
              <StyledFluidBox>Col xs=2 offset=2</StyledFluidBox>
            </Col>
            <Col xs={2}>
              <StyledFluidBox>Col xs=2</StyledFluidBox>
            </Col>
          </Row>
        </Container>
        <Container marginTop="layout-md">
          <Row marginBottom="layout-xxs">
            <Col>
              <Typography.Heading size="h5">Column ordering</Typography.Heading>
            </Col>
          </Row>
          <Row>
            <Col sm={8} push={{ md: 4 }}>
              <StyledFluidBox>Col1 sm=8 push-md=4</StyledFluidBox>
            </Col>
            <Col sm={4} pull={{ md: 8 }}>
              <StyledFluidBox>Col2 sm=4 pull-md=8</StyledFluidBox>
            </Col>
          </Row>
        </Container>
      </>
    ),
  },
};
