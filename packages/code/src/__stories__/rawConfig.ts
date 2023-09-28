import { monaco } from '../';
import { type Language } from './declarations';
import { getRange } from './utils';

export const keywords = [
  '"extra"',
  '"type"',
  '"subtype"',
  '"settings"',
  '"children"',
  '"name"',
  '"description"',
  '"datasource"',
  '"date"',
  '"version"',
  '"favourites"',
  '"config"',
  '"autoRefreshPeriod"',
  '"layout"',
  '"header"',
  '"autoRefreshPeriod"',
  '"widgets"',
  '"inputs"',
  '"containers"',
  '"definitions"',
  '"lastMetadata"',
  '"from"',
  '"to"',
  '"realTime"',
  //layout
  '"i"',
  '"w"',
  '"h"',
  '"x"',
  '"y"',
  '"moved"',
  '"static"',
  '"theme"',
  //wy
  '"fields"',
  '"xAxis"',
  '"yAxis"',
  '"series"',
  // donut pie
  '"aggr"',
  // heatmap
  '"lat"',
  '"lng"',
  '"val"',
  // simple value
  '"field"',
  // table
  '"columnDefs"',
  // voronoi
  '"keys"',
  '"weight"',
];

export const rawLanguage: Language = {
  id: 'rawConfig',
  lang: {
    keywords,
    tokenizer: {
      root: [
        [
          /"[A-Za-z0-9_]*"/,
          {
            cases: {
              '@keywords': 'keyword',
              '@default': 'default',
            },
          },
        ],
        [/:\s"(.|\n|\r)*"/, 'value'],
        [/:\s[0-9]*/, 'digit'],
        [/true|false|null/, 'boolean'],
        [/[{}()\[\]]/, '@brackets'],
        [/[;,.]/, 'delimiter'],
      ],
    },
  },
  value: `{
    "extra": {
      "favourites": {
        "widgets": "SimpleValue",
        "inputs": "Input",
        "containers": "Grid"
      },
      "config": {
        "theme": {}
      },
      "autoRefreshPeriod": null
    },
    "containers": {
      "Grid": {
        "name": "Grid",
        "description": "Grid",
        "icon": "grid",
        "props": {
          "columns": 12,
          "rows": 12,
          "gutter": 0,
          "widgets": []
        }
      }
    }
  }`,
  completionProvider: {
    provideCompletionItems: (model, position) => {
      const word = model.getWordUntilPosition(position);
      const suggestions = keywords
        .filter((x) => x.includes(word.word))
        .map((key) => ({
          label: key,
          kind: monaco.languages.CompletionItemKind.Field,
          insertText: key,
          range: getRange(
            position.lineNumber,
            word.startColumn,
            word.endColumn,
          ),
        }));

      return { suggestions: suggestions };
    },
  },
};
