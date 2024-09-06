import * as React from 'react';

export const useMergeI18n = (
  userTexts: { [key: string]: string },
  defaultTexts: { [key: string]: string },
) =>
  React.useMemo(
    () => ({
      ...defaultTexts,
      ...userTexts,
    }),
    [userTexts],
  );
