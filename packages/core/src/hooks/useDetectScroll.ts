import * as React from 'react';
import { updateHasScroll } from '../utils/scroll';
import { useContainerDimensions } from './useContainerDimensions';

export const useDetectScroll = () => {
  const { setRef: targetElRef, size: measures } = useContainerDimensions();

  const [hasScroll, setHasScroll] = React.useState(false);

  React.useLayoutEffect(
    () => updateHasScroll(measures, hasScroll, setHasScroll),
    [measures, hasScroll, setHasScroll],
  );

  return { targetElRef, hasScroll };
};
