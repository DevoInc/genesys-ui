import { ClientSize } from '../declarations/dom';

export const updateHasScroll = (
  measures: ClientSize,
  hasScroll: boolean,
  hasScrollSetter: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (measures) {
    const newHasScroll =
      measures.scrollHeight !== undefined &&
      measures.clientHeight !== undefined &&
      measures.scrollHeight > measures.clientHeight;

    if (newHasScroll !== hasScroll) {
      hasScrollSetter(newHasScroll);
    }
  }
};
