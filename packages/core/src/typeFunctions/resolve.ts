// eslint-disable-next-line @typescript-eslint/ban-types
export type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] };
