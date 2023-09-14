import { light as theme } from '@devoinc/genesys-brand-devo';

import { elevationBorderMixin } from './elevationBorderMixin';
import { Elevation } from '../../../declarations';

describe('elevationBorderMixin', () => {
  const themeElevation = theme.alias.color.border.elevation;
  const cases: [string, Elevation, string][] = [
    [
      'stickyTop',
      'stickyTop',
      `border-top: 0.1rem solid ${themeElevation.sticky.top};`,
    ],
    [
      'stickyRight',
      'stickyRight',
      `border-right: 0.1rem solid ${themeElevation.sticky.right};`,
    ],
    [
      'stickyLeft',
      'stickyLeft',
      `border-left: 0.1rem solid ${themeElevation.sticky.left};`,
    ],
    [
      'stickyBottom',
      'stickyBottom',
      `border-bottom: 0.1rem solid ${themeElevation.sticky.bottom};`,
    ],
    [
      'not sticky but valid elevation',
      'raised',
      `border: 0.1rem solid ${themeElevation.raised};`,
    ],
  ];

  it.each(cases)('%s', (_title, elevation, expected) => {
    expect(elevationBorderMixin(theme)(elevation).join('')).toContain(expected);
  });

  test('not valid sticky', () => {
    expect(elevationBorderMixin(theme)('stickyTest' as Elevation)).toBeNull();
  });

  test('ground', () => {
    expect(elevationBorderMixin(theme)('ground')).toBeNull();
  });
});
