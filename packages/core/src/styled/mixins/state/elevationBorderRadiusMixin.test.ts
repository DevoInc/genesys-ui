import { light as theme } from '@devoinc/genesys-brand-devo';

import { elevationBorderRadiusMixin } from './elevationBorderRadiusMixin';
import { Elevation } from '../../../declarations';

describe('elevationBorderRadiusMixin', () => {
  const cases: [string, Elevation][] = [
    ['stycky elevation return null', 'stickyTop'],
    ['ground elevation return null', 'ground'],
  ];

  it.each(cases)('%s', (_title, elevation) => {
    expect(elevationBorderRadiusMixin(theme)(elevation)).toBeNull();
  });

  test('valid elevation', () => {
    expect(elevationBorderRadiusMixin(theme)('raised').join('')).toContain(
      `border-radius:${theme.alias.shape.borderRadius.elevated}`,
    );
  });
});
