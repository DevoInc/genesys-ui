import * as React from 'react';
import { render } from 'test-utils';
import { Panel } from './Panel';
import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;

describe('Panel', () => {
  test('Simple render', () => {
    const { container } = render(<Panel ref={null}>{'This is a panel'}</Panel>);
    expect(container.getElementsByTagName('div')[0]).toBeInTheDocument();
  });

  test('Header, Body and Footer render inside PanelContainer', () => {
    const { container } = render(<Panel ref={null}>{'This is a panel'}</Panel>);
    const panelContainer = container.getElementsByTagName('div')[0];
    expect(panelContainer.getElementsByTagName('header')).toHaveLength(1);
    expect(panelContainer.getElementsByTagName('div')).toHaveLength(1);
    expect(panelContainer.getElementsByTagName('footer')).toHaveLength(1);
  });
});
