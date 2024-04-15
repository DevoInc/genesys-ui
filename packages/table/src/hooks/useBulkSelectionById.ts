import * as React from 'react';
import { TRow } from '../declarations';

type TUseBulkData = {
  data: TRow[];
  initialSelection?: number[];
  bulkDisabled?: number[];
};

const checkSelection = (data: TRow[]) => {
  return data.find((d) => d.bulk);
};

export const useBulkSelectionById = ({ data }: TUseBulkData) => {
  const [bulkSelection, setBulkSelection] = React.useState([]);
  const [headerBulkChecked, setHeaderBulkChecked] = React.useState<
    boolean | 'indeterminate'
  >(!!checkSelection(data));

  React.useEffect(() => {
    if (data.length > 0 && checkSelection(data)) {
      setHeaderBulkChecked(true);
    } else if (!checkSelection(data)) {
      setHeaderBulkChecked(false);
    } else {
      setHeaderBulkChecked('indeterminate');
    }
  }, [bulkSelection, data]);

  const toggleAll = React.useCallback(() => {
    setBulkSelection(() => {
      if (checkSelection(data)) {
        return data.map((d) => {
          d.bulk = false;
          return d;
        });
      } else {
        return data.map((d) => {
          d.bulk = !d.bulk;
          return d;
        });
      }
    });
  }, [data]);

  const clear = React.useCallback(() => {
    setBulkSelection([]);
  }, []);

  const toggle = React.useCallback(
    (index: number) => {
      setBulkSelection(() =>
        data.map((d, i) => {
          if (index === i) {
            d.bulk = !d.bulk;
          }
          return d;
        }),
      );
    },
    [data],
  );

  return { bulkSelection, toggleAll, toggle, clear, headerBulkChecked };
};
