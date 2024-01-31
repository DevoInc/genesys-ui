export type TextFilterValue = {
  value: string;
  operator:
    | 'contains'
    | 'notContains'
    | 'equals'
    | 'notEquals'
    | 'beginsWith'
    | 'endsWith'
    | 'blank'
    | 'notBlank';
};
