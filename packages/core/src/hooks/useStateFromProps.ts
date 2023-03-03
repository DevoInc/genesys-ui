import { useState, useEffect } from 'react';

export const useStateFromProps = (propsState, setPropsState) => {
  const [state, setState] = useState(propsState);
  const onChangeState = (newStateValue) => {
    if (setPropsState) {
      setPropsState(newStateValue);
    } else {
      setState(newStateValue);
    }
  };
  useEffect(() => {
    setState(propsState);
  }, [propsState]);
  return [state, onChangeState];
};
