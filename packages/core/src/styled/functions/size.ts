// to get an even line height in px by font size (in rem or px format) and
// absolute line height (1.2 for example)
export const getEvenLineHeight = (fs: string, lh: number) => {
  if (fs && lh) {
    const fsBaseNumber = 10;
    const fsNumber = parseFloat(fs);
    if (fs.indexOf('rem') > -1) {
      const lhPxNumber = Math.round(fsNumber * fsBaseNumber * lh);
      if (lhPxNumber % 2 !== 0) {
        return lhPxNumber - 1 + 'px';
      } else {
        return lhPxNumber + 'px';
      }
    } else {
      const lhPxNumber = Math.round(fsNumber * lh);
      if (lhPxNumber % 2 !== 0) {
        return lhPxNumber + 1 + 'px';
      } else {
        return lhPxNumber + 'px';
      }
    }
  } else return null;
};
