export type NumberFilterValue = {
  value: string;
  secondValue?: string;
  operator:
    | 'equals'
    | 'notEquals'
    | 'greater'
    | 'greaterOrEqual'
    | 'less'
    | 'lessOrEqual'
    | 'between';
};
