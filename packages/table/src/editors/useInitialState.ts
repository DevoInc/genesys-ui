import React from 'react';

/**
 * Custom hook to save and return an initial state when the component is destroyed.
 * @param state to save
 * @param onClose callback to be executed at the time the component is destroyed
 */
export const useInitialState = (
  state: unknown,
  onClose?: (initialState: unknown, state: unknown) => void,
) => {
  const [initialValue] = React.useState(state);

  React.useEffect(() => {
    return () => {
      onClose?.(initialValue, state);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
