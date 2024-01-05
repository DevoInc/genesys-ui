import * as React from 'react';

type UseBulkDataProps = {
  dataLength: number;
  initialSelection?: number[];
  bulkDisabled?: number[];
};

export const useBulkSelection = ({
  dataLength,
  initialSelection = [],
  bulkDisabled = [],
}: UseBulkDataProps) => {
  const [bulkSelection, setBulkSelection] = React.useState(initialSelection);
  const [headerBulkChecked, setHeaderBulkChecked] = React.useState<
    boolean | 'indeterminate'
  >(initialSelection.length === dataLength);

  React.useEffect(() => {
    if (bulkSelection.length === dataLength) {
      setHeaderBulkChecked(true);
    } else if (bulkSelection.length === 0) {
      setHeaderBulkChecked(false);
    } else {
      setHeaderBulkChecked('indeterminate');
    }
  }, [bulkSelection, dataLength]);

  const toggleAll = React.useCallback(() => {
    setBulkSelection((prev) => {
      if (prev.length === dataLength) {
        return [];
      } else if (prev.length === 0) {
        return new Array(dataLength)
          .fill(null)
          .reduce(
            (arr, _, index: number) =>
              bulkDisabled.includes(index) ? arr : [...arr, index],
            [],
          );
      }
      return [];
    });
  }, [dataLength, bulkDisabled]);

  const clear = React.useCallback(() => {
    setBulkSelection([]);
  }, []);

  const toggle = React.useCallback((index: number) => {
    setBulkSelection((prev) => {
      if (prev.includes(index)) {
        return prev.filter((x) => x !== index);
      }
      return [...prev, index];
    });
  }, []);

  return { bulkSelection, toggleAll, toggle, clear, headerBulkChecked };
};