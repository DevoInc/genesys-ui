import { getPxFromRem } from '@devoinc/genesys-ui';
import { Brand } from '@devoinc/genesys-tokens-types';

export const COLUMN_TYPE = {
  BOOLEAN: 'boolean',
  CUSTOM: 'custom',
  DATE: 'date',
  LINK: 'link',
  LONG_TEXT: 'longText',
  NUMBER: 'number',
  STATUS: 'status',
  TAGS: 'tags',
  TEXT: 'text',
  // TODO
  //DATE_RANGE: 'dateRange',
  //STATUS_MESSAGE: 'statusMessage',
} as const;

export const getFixedSizesObj = (tokens: Brand['cmp']['table']) => {
  const filterTokens = tokens.filter;
  const filterColumnsCellTokens = tokens.filterColumnsCell;
  const cellActionsTokens = tokens.cellActions;
  const cellQuickActionsTokens = tokens.cellQuickActions;
  return {
    filter: {
      verPad: getPxFromRem(filterTokens.space.padding.ver),
      horPad: getPxFromRem(filterTokens.space.padding.hor),
    },
    filterColumnsCell: {
      horPad: getPxFromRem(filterColumnsCellTokens.space.padding.hor),
    },
    cellActions: {
      spacing: getPxFromRem(cellActionsTokens.space.marginHor),
      actionSize: getPxFromRem(cellActionsTokens.size.width),
    },
    actions: {
      spacing: getPxFromRem(cellQuickActionsTokens.space.gap),
      actionWidth: getPxFromRem(cellQuickActionsTokens.size.width),
    },
  };
};
