import { type Language } from '../declarations';

export const esql: Language = {
  id: 'esql',
  lang: {
    keywords: [
      'by',
      'every',
      'from',
      'group',
      'select',
      'where',
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
        [/[{}()[\]]/, '@brackets'],
      ],
    },
  },
  value: `from my.app select count() as count

  `,
};
