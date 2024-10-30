export type TDateFilterValue = {
  value: number | Date;
  secondValue?: number | Date;
  operator:
    | 'equals'
    | 'notEquals'
    | 'greater'
    | 'greaterOrEqual'
    | 'less'
    | 'lessOrEqual'
    | 'between';
};
