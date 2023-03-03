/** ---------------------------------------------
 * Type function to extend from an interface while
 * making one or some of its attributes required
 * --------------------------------------------- */
// https://stackoverflow.com/questions/69327990/how-can-i-make-one-property-non-optional-in-a-typescript-type
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
