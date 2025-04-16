import { describe, test, expect } from 'vitest';
import * as React from 'react';

import { Panel } from '@devoinc/genesys-ui';

import { render } from '@test';

describe('Panel', () => {
  test('Simple render', () => {
    const { container } = render(
      <Panel ref={null}>
        <Panel.Body>This is a panel</Panel.Body>
      </Panel>,
    );
    expect(container.getElementsByTagName('div')[0]).toBeInTheDocument();
  });

  test('Header, Body and Footer render inside PanelContainer', () => {
    const { container } = render(
      <Panel ref={null}>
        <Panel.Header />
        <Panel.Body>This is a panel</Panel.Body>
        <Panel.Footer />
      </Panel>,
    );
    const panelContainer = container.getElementsByTagName('div')[0];
    expect(panelContainer.getElementsByTagName('header')).toHaveLength(1);
    expect(panelContainer.getElementsByTagName('div')).toHaveLength(2);
    expect(panelContainer.getElementsByTagName('footer')).toHaveLength(1);
  });
});
