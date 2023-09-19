import { light as theme } from '@devoinc/genesys-brand-devo';

import { elevationBoxShadowMixin } from './elevationBoxShadowMixin';
import { Elevation } from '../../../declarations';

describe('elevationBoxShadowMixin', () => {
  const boxShadowTokens = theme?.alias?.elevation.boxShadow;
  const cases: [string, Elevation, string][] = [
    [
      'styckyBottom',
      'stickyBottom',
      `box-shadow: ${boxShadowTokens.depth.sticky.bottom};`,
    ],
    [
      'styckyLeft',
      'stickyLeft',
      `box-shadow: ${boxShadowTokens.depth.sticky.left};`,
    ],
    [
      'styckyRight',
      'stickyRight',
      `box-shadow: ${boxShadowTokens.depth.sticky.right};`,
    ],
    [
      'styckyTop',
      'stickyTop',
      `box-shadow: ${boxShadowTokens.depth.sticky.top};`,
    ],
    ['raised', 'raised', `box-shadow: ${boxShadowTokens.depth.raised};`],
  ];

  it.each(cases)('%s', (_title, elevation, expected) => {
    expect(elevationBoxShadowMixin(theme)(elevation).join('')).toContain(
      expected,
    );
  });

  test('not valid sticky elevation', () => {
    expect(
      elevationBoxShadowMixin(theme)('stickyBad' as Elevation).join(''),
    ).toContain('box-shadow: ;');
  });

  test('not valid elevation', () => {
    expect(
      elevationBoxShadowMixin(theme)('bad' as Elevation).join(''),
    ).toContain('box-shadow: ;');
  });

  test('undefined', () => {
    expect(elevationBoxShadowMixin(theme)(undefined as Elevation)).toBeNull();
  });
});
