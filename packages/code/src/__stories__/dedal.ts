import { type Language } from './declarations';

export const dedalLanguage: Language = {
  id: 'dedal',
  lang: {
    keywords: [
      // dedal
      'query',
      'sparkline',
      // linq
      'by',
      'every',
      'from',
      'group',
      'select',
      'where',
      // operations
      'asc',
      'ASC',
      'desc',
      'DESC',
      'order',
      'sort',
      'limit',
      // keywords
      'and',
      'as',
      'in',
      'is',
      'like',
      'not',
      'or',
      'then',
    ],
    tokenizer: {
      root: [
        [
          /[a-zA-Z_][\w]*/,
          {
            cases: {
              '@keywords': 'keyword',
              '@default': 'default',
            },
          },
        ],
        [/\$\*?[a-zA-Z_0-9.]*/, 'interpolation'],
        [/[0-9]*[smhd]/, 'time'],
        [/\d/, 'digit'],
        [/\/\/.+$/, 'comment'],
        [/[{}()\[\]]/, '@brackets'],
      ],
    },
  },
  value: `from my.app select count() as count

  `,
};
