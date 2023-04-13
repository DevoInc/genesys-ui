import * as React from 'react';
import { updateHasScroll } from '../scroll';
import { useContainerDimensions } from '../../../hooks';

export const useDetectBodyScroll = () => {
  const { setRef: targetElRef, size: measures } = useContainerDimensions();

  const [hasScroll, setHasScroll] = React.useState(false);

  React.useLayoutEffect(
    () => updateHasScroll(measures, hasScroll, setHasScroll),
    [measures, hasScroll, setHasScroll]
  );

  return { targetElRef, hasScroll };
};
