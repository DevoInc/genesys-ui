/**
 * Always return the new date as a single point
 */
export const singleBehavior = (_: (number | Date)[], dt: number | Date) => [dt];
