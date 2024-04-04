import * as React from 'react';

import type { TButtonSize } from '../Button';

export const usePaginationStyles = ({ pageSizeOptions, size, lastPage }) => {
  // Width calc - Range Selector - Pagination
  const rangeSelectorWidth = React.useMemo(() => {
    const maxRange = Math.max.apply(null, pageSizeOptions);
    const lengthMaxRange = maxRange.toString().length;
    return `${
      size !== 'lg'
        ? (4.4 + lengthMaxRange * 0.6).toFixed(1)
        : (4.6 + lengthMaxRange * 0.8).toFixed(1)
    }rem;`;
  }, [size, pageSizeOptions]);

  // Width calc - Nav Selector - Pagination
  const { navFieldWidth, actionsSize } = React.useMemo(() => {
    const lengthLastPage = (lastPage + 1).toString().length;
    return {
      navFieldWidth: `${
        size !== 'lg'
          ? (4.4 + lengthLastPage * 0.6).toFixed(1)
          : (4.6 + lengthLastPage * 0.8).toFixed(1)
      }rem;`,
      actionsSize: size as TButtonSize,
    };
  }, [size, lastPage]);

  return {
    rangeSelectorWidth,
    navFieldWidth,
    actionsSize,
  };
};
