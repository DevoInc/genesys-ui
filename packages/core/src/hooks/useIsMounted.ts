import { useRef, useEffect } from 'react';

/**
 * Hook to check if a component is mounted.
 *
 * Example: You have a function that fetchs information on componentDidMount,
 * but the user triggers a navigation before the call is finished. Then the
 * setState of the component is triggered but the component is not mounted.
 * Use this hook to check if the component is mounted before updating the state.
 */

export const useIsMounted = () => {
  const componentIsMounted = useRef(false);
  useEffect(() => {
    componentIsMounted.current = true;
    return () => {
      componentIsMounted.current = false;
    };
  }, []);
  return componentIsMounted;
};
