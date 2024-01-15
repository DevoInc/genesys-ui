import * as React from 'react';

/**
 * This hook allows you to detect clicks outside of a specified elements:
 * container and trigger
 *
 * This hook checks both the reference.current and the reference itself, because
 * this way it can be used by passing those references with useRef and useState
 * respectively.
 * @param param.event
 */

export const useOnEventOutside = ({
  disabled = false,
  events = ['mousedown', 'touchstart'],
  handler,
  references,
}) => {
  React.useEffect(() => {
    if (!disabled) {
      const listener = (event) => {
        const isInside = references.some(
          (ref) =>
            ref?.current?.contains?.(event.target) ||
            ref?.contains?.(event.target),
        );
        if (!isInside) {
          handler(event);
        }
      };
      events.forEach((event) => {
        document.addEventListener(event, listener);
      });
      return () => {
        events.forEach((event) => {
          document.removeEventListener(event, listener);
        });
      };
    }
  }, [disabled, events, handler, references]);
};
