import { light as theme } from '@devoinc/genesys-brand-devo';

import { disabledMixin } from './disabledMixin';

describe('disabledMixin', () => {
  test('render', () => {
    const mixin = disabledMixin(theme).join('');
    expect(mixin).toContain(`opacity:${theme.alias.shape.opacity.disabled};`);
    expect(mixin).toContain('cursor:not-allowed;');
    expect(mixin).toContain('user-select:none;');
  });
});
