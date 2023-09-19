import { light as theme } from '@devoinc/genesys-brand-devo';

import { getSpacingPropCss } from './spacing';

describe('spacing', () => {
  describe('getSpacingPropCss', () => {
    const cases = [
      ['single measure', 'cmp-md', `${theme.alias.space.cmp.md}`],
      [
        'double measure',
        'cmp-md cmp-md',
        `${theme.alias.space.cmp.md} ${theme.alias.space.cmp.md}`,
      ],
    ];

    it.each(cases)('%s', (_title, spacing, expected) => {
      expect(getSpacingPropCss(theme)(spacing)).toEqual(expected);
    });
  });
});
