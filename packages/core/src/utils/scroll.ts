import { IClientSize } from '../declarations/dom';

export const updateHasScroll = (
  measures: IClientSize,
  hasScroll: boolean,
  hasScrollSetter: React.Dispatch<React.SetStateAction<boolean>>,
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
