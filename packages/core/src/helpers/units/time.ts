/**
 * Returns the amount of milliseconds of a valid css time vlaue.size number in px without units
 *
 * @param cssTime A css time value: 2s, .5s, 400ms... etc.
 * @return the amount of milliseconds: 2000, 500, 400... etc.
 */
export const cssTimeToMs = (cssTime: string) => {
  return cssTime ? parseFloat(cssTime) * (/\ds$/.test(cssTime) ? 1000 : 1) : 0;
};
