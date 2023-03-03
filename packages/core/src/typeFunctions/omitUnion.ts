import { PickUnion } from './pickUnion';

/** ---------------------------------------------
 * Type function to omit sub-sets from union types
 * --------------------------------------------- */
// Similar to OmitU from styled-components declarations
export type OmitUnion<T, K extends T> = T extends any
  ? PickUnion<T, Exclude<T, K>>
  : never;
