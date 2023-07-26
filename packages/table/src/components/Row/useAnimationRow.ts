import * as React from 'react';
import { useCountdownTimer } from './useCountdownTimer';

export const useAnimationRow = () => {
  const { isFinished, startCountdown } = useCountdownTimer();
  const [isModifiedRow, setModifiedRow] = React.useState(false);
  const [isActiveRow, setActiveRow] = React.useState(false);

  const startRowAnimation = React.useCallback(() => {
    setModifiedRow(true);
    startCountdown();
  }, [setModifiedRow, startCountdown]);

  React.useEffect(() => {
    if (isFinished) {
      setActiveRow((prevActiveRow) =>
        !prevActiveRow || isModifiedRow ? isModifiedRow : prevActiveRow
      );
      setModifiedRow(false);
    }
  }, [isFinished, isModifiedRow]);

  return {
    isModifiedRow,
    isActiveRow,
    startRowAnimation,
    setActiveRow,
  };
};
