import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Container, Typography } from '../..';

import { StoryCol as Col, StoryRow as Row } from './__stories__';

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Fluid',
  component: Container,
};

const lorem =
  'Are creatures of the cosmos tingling of the spine Flatland something incredible is waiting to be known.';

export default meta;
type Story = StoryObj<typeof Container>;

export const EqualWidth: Story = {
  name: 'Equal width',
  render: (args) => (
    <Container {...args} fluid>
      <Row>
        <Col>Col 1</Col>
        <Col>Col 2</Col>
        <Col>Col 3</Col>
      </Row>
    </Container>
  ),
};

export const Stacked: Story = {
  name: 'Stacked to horizontal',
  render: (args) => (
    <Container {...args} fluid>
      <Row>
        <Col md={3}>md = 3</Col>
        <Col md={4}>md = 4</Col>
        <Col md={5}>md = 5</Col>
      </Row>
      <Row marginTop="layout-xs">
        <Col md={2} sm={6}>
          md = 2 / sm = 6
        </Col>
        <Col md={2} sm={6}>
          md = 2 / sm = 6
        </Col>
        <Col md={2} sm={6}>
          md = 2 / sm = 6
        </Col>
        <Col md={2} sm={6}>
          md = 2 / sm = 6
        </Col>
        <Col md={2} sm={6}>
          md = 2 / sm = 6
        </Col>
        <Col md={2} sm={6}>
          md = 2 / sm = 6
        </Col>
      </Row>
    </Container>
  ),
};

export const ColumnWrapping: Story = {
  name: 'Column wrapping',
  render: (args) => (
    <Container {...args} fluid>
      <Row>
        <Col xs={9}>xs = 9</Col>
        <Col xs={4}>
          xs = 4 Since 9 + 4 = 13 (greater than 12), this 4-column-wide Col gets
          wrapped onto a new line as one contiguous unit.
        </Col>
        <Col xs={3}>xs = 6</Col>
      </Row>
    </Container>
  ),
};

export const VerticalAlignment: Story = {
  name: 'Vertical alignment',
  render: (args) => (
    <Container {...args} fluid>
      <Row
        align="start"
        style={{ height: '10rem', backgroundColor: '#f5f9dd' }}
      >
        <Col>Col 1</Col>
        <Col>Col 2</Col>
        <Col>Col 3</Col>
      </Row>
      <Row
        align="center"
        marginTop="layout-xs"
        style={{ height: '10rem', backgroundColor: '#f5f9dd' }}
      >
        <Col>Col 1</Col>
        <Col>Col 2</Col>
        <Col>Col 3</Col>
      </Row>
      <Row
        align="stretch"
        marginTop="layout-xs"
        style={{ height: '10rem', backgroundColor: '#f5f9dd' }}
      >
        <Col>Col 1</Col>
        <Col>Col 2</Col>
        <Col>Col 3</Col>
      </Row>
      <Row
        align="end"
        marginTop="layout-xs"
        style={{ height: '10rem', backgroundColor: '#f5f9dd' }}
      >
        <Col>Col 1</Col>
        <Col>Col 2</Col>
        <Col>Col 3</Col>
      </Row>
    </Container>
  ),
};

export const HorizontalAlignment: Story = {
  name: 'Horizontal alignment',
  render: (args) => (
    <Container {...args} fluid>
      <Row justify="start" style={{ backgroundColor: '#f5f9dd' }}>
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
      <Row marginTop="layout-xs" justify="center">
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
      <Row marginTop="layout-xs" justify="end">
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
      <Row marginTop="layout-xs" justify="between">
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
      <Row marginTop="layout-xs" justify="around">
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
    </Container>
  ),
};

export const Order: Story = {
  name: 'TDirection prop for order and orientation',
  render: (args) => (
    <Container {...args} fluid>
      <Row align="center" justify="center" direction="row">
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
      <Row
        marginTop="layout-xs"
        align="center"
        justify="center"
        direction="row-reverse"
      >
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
      <Row
        marginTop="layout-xs"
        align="center"
        justify="center"
        direction="column"
      >
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
      <Row
        marginTop="layout-xs"
        align="center"
        justify="center"
        direction="column-reverse"
      >
        <Col xs={3}>1 of 3</Col>
        <Col xs={3}>2 of 3</Col>
        <Col xs={3}>3 of 3</Col>
      </Row>
    </Container>
  ),
};

export const Offsetting: Story = {
  name: 'Offsetting columns',
  render: (args) => (
    <Container {...args} fluid>
      <Row>
        <Col md={4}>md=4</Col>
        <Col md={4} offset={{ md: 4 }}>
          md=4 offset-md=4
        </Col>
      </Row>
      <Row marginTop="layout-xs">
        <Col md={3} offset={{ md: 3 }}>
          md=3 offset-md=3
        </Col>
        <Col md={3} offset={{ md: 3 }}>
          md=3 offset-md=3
        </Col>
      </Row>
      <Row marginTop="layout-xs">
        <Col md={6} offset={{ md: 3 }}>
          md=6 offset-md=3
        </Col>
      </Row>
    </Container>
  ),
};

export const NestingColumns: Story = {
  name: 'Nesting columns',
  render: (args) => (
    <Container {...args} fluid>
      <Row>
        <Col sm={9}>
          Level 1: sm=9
          <Row>
            <Col xs={8} sm={6}>
              Level 2: xs=8 sm=6
            </Col>
            <Col xs={4} sm={6}>
              Level 2: xs=4 sm=6
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  ),
};

export const AdaptedContent: Story = {
  name: 'Column width adapted to content',
  render: (args) => (
    <Container {...args} fluid>
      <Row>
        <Col>
          <Typography.Paragraph>{lorem}</Typography.Paragraph>
        </Col>
        <Col xs="content">Width adapted to this content</Col>
      </Row>
    </Container>
  ),
};

export const GutterDefinition: Story = {
  name: 'Gutter definition by Container',
  render: (args) => (
    <>
      <Container {...args} fluid gutter="layout-xxs">
        <Row>
          <Col>
            Col 1 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 2 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 3 - gutter xxs
            <br />
            {lorem}
          </Col>
        </Row>
      </Container>
      <Container {...args} fluid marginTop="layout-sm" gutter="layout-xs">
        <Row>
          <Col>
            Col 1 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 2 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 3 - gutter xxs
            <br />
            {lorem}
          </Col>
        </Row>
      </Container>
      <Container {...args} fluid marginTop="layout-sm" gutter="layout-sm">
        <Row>
          <Col>
            Col 1 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 2 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 3 - gutter xxs
            <br />
            {lorem}
          </Col>
        </Row>
      </Container>
      <Container {...args} fluid marginTop="layout-sm" gutter="layout-md">
        <Row>
          <Col>
            Col 1 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 2 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 3 - gutter xxs
            <br />
            {lorem}
          </Col>
        </Row>
      </Container>
      <Container {...args} fluid marginTop="layout-sm" gutter="layout-lg">
        <Row>
          <Col>
            Col 1 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 2 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 3 - gutter xxs
            <br />
            {lorem}
          </Col>
        </Row>
      </Container>
      <Container {...args} fluid marginTop="layout-sm" gutter="layout-xl">
        <Row>
          <Col>
            Col 1 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 2 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 3 - gutter xxs
            <br />
            {lorem}
          </Col>
        </Row>
      </Container>
      <Container {...args} fluid marginTop="layout-sm" gutter="layout-xxl">
        <Row>
          <Col>
            Col 1 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 2 - gutter xxs
            <br />
            {lorem}
          </Col>
          <Col>
            Col 3 - gutter xxs
            <br />
            {lorem}
          </Col>
        </Row>
      </Container>
    </>
  ),
};

export const GutterDefinitionByRow: Story = {
  name: 'Gutter definition by Row',
  render: (args) => (
    <Container {...args} fluid>
      <Row gutter="layout-xxs">
        <Col>
          Col 1 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 2 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 3 - gutter xxs
          <br />
          {lorem}
        </Col>
      </Row>
      <Row gutter="layout-xs">
        <Col>
          Col 1 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 2 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 3 - gutter xxs
          <br />
          {lorem}
        </Col>
      </Row>
      <Row gutter="layout-sm">
        <Col>
          Col 1 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 2 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 3 - gutter xxs
          <br />
          {lorem}
        </Col>
      </Row>
      <Row gutter="layout-md">
        <Col>
          Col 1 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 2 - gutter xxs
          <br />
          {lorem}
        </Col>
        <Col>
          Col 3 - gutter xxs
          <br />
          {lorem}
        </Col>
      </Row>
    </Container>
  ),
};
