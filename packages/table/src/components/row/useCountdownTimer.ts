import { useIsMounted } from '@devoinc/genesys-ui';
import * as React from 'react';

/**
 * Hook that activates a countdown and alerts when the time has passed.
 * @param {number} timeActivated countdown time in ms
 * @returns {{startCountdown: function, isFinished: boolean}}
 */

export const useCountdownTimer = (
  { timeActivated } = { timeActivated: 3000 }
) => {
  const [isFinished, setFinished] = React.useState(true);
  const isMounted = useIsMounted();

  const startCountdown = React.useCallback(() => {
    setFinished(false);
  }, [setFinished]);

  React.useEffect(() => {
    let timeOutRef;

    if (isMounted.current && !isFinished) {
      timeOutRef = setTimeout(() => {
        if (isMounted.current) {
          setFinished(true);
        }
      }, timeActivated);
    }

    return () => {
      if (timeOutRef) {
        clearTimeout(timeOutRef);
      }
    };
  }, [isFinished, isMounted, timeActivated]);

  return { isFinished, startCountdown };
};
