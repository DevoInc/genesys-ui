export const DENSITY = {
  DEFAULT: 'default',
  COMPACT: 'compact',
  COMFORTABLE: 'comfortable',
};

//NOTE: We define the default value as "10px", as this is the value obtained from devo.com website while executing the query
export const baseFs =
  typeof window !== 'undefined'
    ? parseInt(window.getComputedStyle(document.documentElement).fontSize, 10)
    : 10;
