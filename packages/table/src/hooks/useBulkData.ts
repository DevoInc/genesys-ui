import * as React from 'react';
import { Data } from '../declarations';

type UseBulkDataProps = {
  data: Data;
  initialSelection: number[];
};

export const useBulkData = ({
  data,
  initialSelection = [],
}: UseBulkDataProps) => {
  const [selection, setSelection] = React.useState(initialSelection);
  const [globalCheckStatus, setGlobalCheckStatus] = React.useState<
    boolean | 'indeterminate'
  >(initialSelection.length === data.length);

  React.useEffect(() => {
    if (selection.length === data.length) {
      setGlobalCheckStatus(true);
    } else if (selection.length === 0) {
      setGlobalCheckStatus(false);
    } else {
      setGlobalCheckStatus('indeterminate');
    }
  }, [selection, data]);

  const toggleAll = React.useCallback(() => {
    setSelection((prev) => {
      if (prev.length === data.length) {
        return [];
      } else if (prev.length === 0) {
        return data.map((_, index: number) => index);
      }
      return [];
    });
  }, [data]);

  const clear = React.useCallback(() => {
    setSelection([]);
  }, []);

  const toggle = React.useCallback((index: number) => {
    setSelection((prev) => {
      if (prev.includes(index)) {
        return prev.filter((x) => x !== index);
      }
      return [...prev, index];
    });
  }, []);

  return { selection, toggleAll, toggle, clear, globalCheckStatus };
};
