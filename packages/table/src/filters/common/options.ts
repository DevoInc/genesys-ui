export const TEXT_DEFAULT_VALUE = 'contains';

export const TEXT_OPTIONS = [
  { value: 'contains', label: 'Contains' },
  { value: 'notContains', label: 'Does not contain' },
  { value: 'equals', label: 'Equals to' },
  { value: 'notEquals', label: 'Does not equal to' },
  { value: 'beginsWith', label: 'Begins with' },
  { value: 'endsWith', label: 'Ends with' },
  { value: 'blank', label: 'Blank' },
  { value: 'notBlank', label: 'Not blank' },
];

export const TEXT_ADDON_MAP = {
  contains: null,
  notContains: '!cont',
  equals: '=',
  notEquals: '!=',
  beginsWith: 'starts',
  endsWith: 'ends',
  blank: 'blank',
  notBlank: '!blank',
};

export const NUMBER_DEFAULT_VALUE = 'equals';

export const NUMBER_OPTIONS = [
  { value: 'equals', label: 'Equals to' },
  { value: 'notEquals', label: 'Does not equal to' },
  { value: 'greater', label: 'Greater than' },
  { value: 'greaterOrEqual', label: 'Greater than or equal to' },
  { value: 'less', label: 'Less than' },
  { value: 'lessOrEqual', label: 'Less than or equal to' },
  { value: 'between', label: 'Between' },
];

export const NUMBER_ADDON_MAP = {
  equals: null,
  notEquals: '!=',
  greater: '>',
  greaterOrEqual: '>=',
  less: '<',
  lessOrEqual: '<=',
  between: null,
};

export const DATE_OPTIONS = [
  { value: 'equals', label: 'Equals to' },
  { value: 'notEquals', label: 'Does not equal to' },
  { value: 'before', label: 'Before' },
  { value: 'after', label: 'After' },
  { value: 'between', label: 'Between' },
  { value: 'blank', label: 'Blank' },
  { value: 'notBlank', label: 'Not blank' },
];

export const BOOLEAN_OPTIONS = [
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
];
