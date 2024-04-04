export type TTextFilterValue = {
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
