import * as React from 'react';

/**
 * Hook to pass props to children.
 *
 * Pass the children of a element along with a object or function that
 * shall return an object with the props to be added.
 *
 * props as fn: (child, childIndex) => newChildProps to add
 */
export const useAddPropsToChildren = (
  children: React.ReactNode,
  props: unknown,
) => {
  return React.useMemo(() => {
    return React.Children.toArray(children).map((child, childIndex) => {
      if (React.isValidElement(child)) {
        const childProps =
          typeof props === 'function' ? props(child, childIndex) : props;
        return React.cloneElement(child, childProps);
      }
      return child;
    });
  }, [children, props]);
};
