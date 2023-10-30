import * as React from 'react';
import { render } from 'test-utils';
import { Panel } from './Panel';
import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;

describe('Panel', () => {
  test('Simple render', () => {
    const { container } = render(<Panel>{'This is a panel'}</Panel>);
    expect(container.getElementsByTagName('div')[0]).toBeInTheDocument();
  });

  test('Header renders inside PanelContainer', () => {
    const { container } = render(<Panel>{'This is a panel'}</Panel>);
    const panelContainer = container.getElementsByTagName('div')[0];
    expect(panelContainer.getElementsByTagName('header')).toHaveLength(1);
  });

  test('Body renders inside PanelContainer', () => {
    const { container } = render(<Panel>{'This is a panel'}</Panel>);
    const panelContainer = container.getElementsByTagName('div')[0];
    expect(panelContainer.getElementsByTagName('div')).toHaveLength(1);
  });

  test('Footer renders inside PanelContainer', () => {
    const { container } = render(<Panel>{'This is a panel'}</Panel>);
    const panelContainer = container.getElementsByTagName('div')[0];
    expect(panelContainer.getElementsByTagName('footer')).toHaveLength(1);
  });
});
