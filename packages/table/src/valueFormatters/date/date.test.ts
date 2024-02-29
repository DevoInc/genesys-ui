import { describe, test, expect } from 'vitest';
import { enUS } from 'date-fns/locale';

import { DateContext, dateFormatter } from './date';

const cases: [
  string,
  string | number | Date,
  DateContext,
  string | number | Date,
][] = [
  [
    'Value is undefined',
    undefined,
    { tz: 'Madrid/Europe', formatDate: 'PPpp', locale: enUS },
    'undefined',
  ],
  [
    'Value is null',
    null,
    { tz: 'Madrid/Europe', formatDate: 'PPpp', locale: enUS },
    'null',
  ],
  [
    'Value is not a valid number',
    -1,
    { tz: 'Madrid/Europe', formatDate: 'PPpp', locale: enUS },
    '-1',
  ],
];

describe('Table', () => {
  describe('Cell', () => {
    describe('Formatters', () => {
      describe('dateformatter', () => {
        test.each(cases)('%s', (_title, value, context, expected) => {
          expect(dateFormatter(value, context)).toBe(expected);
        });
      });
    });
  });
});
