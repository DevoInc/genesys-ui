import { describe, test, expect } from 'vitest';

import { light as theme } from '@devoinc/genesys-brand-devo';

import { elevationZIndexMixin } from './elevationZIndexMixin';
import { TElevation } from '../../../declarations';

describe('elevationZIndexMixin', () => {
  test('raised', () => {
    expect(elevationZIndexMixin(theme)('raised').join('')).toContain(
      `z-index:${theme.alias.elevation.zIndex.depth.raised};`,
    );
  });

  test('not valid elevation', () => {
    expect(elevationZIndexMixin(theme)('bad' as TElevation).join('')).toContain(
      'z-index:;',
    );
  });
});
