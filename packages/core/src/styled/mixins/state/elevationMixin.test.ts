import { describe, test, expect } from 'vitest';

import { light as theme } from '@devoinc/genesys-brand-devo';

import { elevationMixin } from './elevationMixin';
import type { TElevation } from '../../../declarations';

describe('elevationMixin', () => {
  test('raised', () => {
    const mixin = elevationMixin(theme)('raised').join('');
    expect(mixin).toContain(
      `box-shadow:${theme.alias.elevation.boxShadow.depth.raised};`,
    );
    expect(mixin).toContain(
      `border-radius:${theme.alias.shape.borderRadius.elevated};`,
    );
    expect(mixin).toContain(
      `border:0.1rem solid ${theme.alias.color.border.elevation.raised};`,
    );
    expect(mixin).toContain(
      `z-index:${theme.alias.elevation.zIndex.depth.raised};`,
    );
  });

  test('not valid elevation', () => {
    const mixin = elevationMixin(theme)('badElevation' as TElevation).join('');
    expect(mixin).toContain('box-shadow:;');
    expect(mixin).toContain('border-radius:0.6rem;');
    expect(mixin).toContain('z-index:;');
  });
});
