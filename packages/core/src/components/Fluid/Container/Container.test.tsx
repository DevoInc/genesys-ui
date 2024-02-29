import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { render, screen } from '@test';
import { Container } from './Container';
import { Row } from '../Row';
import { Col } from '../Col';

describe('Fluid', () => {
  describe('Container', () => {
    test('render', () => {
      render(
        <Container>
          <Row>
            <Col>test</Col>
          </Row>
        </Container>,
      );
      expect(screen.getByText('test').parentNode).toBeInTheDocument();
    });
  });
});
