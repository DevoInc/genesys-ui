export const defaultParseParams = {
  validFormats: ['yyyy-MM-dd HH:mm:ss'],
};

export const defaultParseDateParams = {
  ...defaultParseParams,
  i18n: {
    invalidDate: 'Invalid date',
  },
};

export const defaultParseRangeParams = {
  ...defaultParseParams,
  i18n: {
    invertedOperators:
      'Range is inverted. The left operator should be smaller than the right operator.',
  },
};
