import * as React from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  Placement,
  Strategy,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';

export const useFloatingInlineMessage = ({
  isOpened,
  placement,
  strategy,
}: {
  isOpened: boolean;
  placement: Placement;
  strategy: Strategy;
}) => {
  const [isOpen, setIsOpen] = React.useState(isOpened);

  const arrowRef = React.useRef(null);

  const { refs, floatingStyles, context, middlewareData } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    strategy,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(7),
      flip(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  return {
    getReferenceProps,
    getFloatingProps,
    refs,
    floatingStyles,
    middlewareData,
    context,
    isOpen,
    arrowRef,
    setIsOpen,
  };
};
