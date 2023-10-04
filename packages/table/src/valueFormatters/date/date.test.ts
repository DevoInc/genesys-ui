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
    { tz: 'Madrid/Europe', formatDate: 'PPpp', locale: 'en-US' },
    undefined,
  ],
  [
    'Value is null',
    null,
    { tz: 'Madrid/Europe', formatDate: 'PPpp', locale: 'en-US' },
    null,
  ],
  [
    'Value is not a valid number',
    -1,
    { tz: 'Madrid/Europe', formatDate: 'PPpp', locale: 'en-US' },
    -1,
  ],
];

describe('Table', () => {
  describe('Cell', () => {
    describe('Formatters', () => {
      describe('dateformatter', () => {
        it.each(cases)('%s', (_title, value, context, expected) => {
          expect(dateFormatter(value, context)).toBe(expected);
        });
      });
    });
  });
});
