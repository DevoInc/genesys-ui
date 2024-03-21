import { describe, test, expect } from 'vitest';

import { light as theme } from '@devoinc/genesys-brand-devo';

import { elevationBorderMixin } from './elevationBorderMixin';
import { TElevation } from '../../../declarations';

describe('elevationBorderMixin', () => {
  const themeElevation = theme.alias.color.border.elevation;
  const width = theme.alias.shape.borderSize.panel.base;
  const cases: [string, TElevation, string][] = [
    [
      'stickyTop',
      'stickyTop',
      `border-top:${width} solid ${themeElevation.sticky.top};`,
    ],
    [
      'stickyRight',
      'stickyRight',
      `border-right:${width} solid ${themeElevation.sticky.right};`,
    ],
    [
      'stickyLeft',
      'stickyLeft',
      `border-left:${width} solid ${themeElevation.sticky.left};`,
    ],
    [
      'stickyBottom',
      'stickyBottom',
      `border-bottom:${width} solid ${themeElevation.sticky.bottom};`,
    ],
    [
      'not sticky but valid elevation',
      'raised',
      `border:${width} solid ${themeElevation.raised};`,
    ],
  ];

  test.each(cases)('%s', (_title, elevation, expected) => {
    expect(elevationBorderMixin(theme)(elevation).join('')).toContain(expected);
  });

  test('not valid sticky', () => {
    expect(elevationBorderMixin(theme)('stickyTest' as TElevation)).toBeNull();
  });

  test('ground', () => {
    expect(elevationBorderMixin(theme)('ground')).toBeNull();
  });
});
