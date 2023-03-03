/** ---------------------------------------------
 * Type function to pick sub-sets from union types
 * --------------------------------------------- */
// Similar to PickU from styled-components declarations
export type PickUnion<T, U extends T> = U;
