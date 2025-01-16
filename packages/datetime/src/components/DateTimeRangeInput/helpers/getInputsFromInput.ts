export const getInputsFromInput = (
  input: HTMLInputElement,
): NodeListOf<HTMLInputElement> =>
  (
    input.parentElement.parentElement.parentElement
      .parentElement as HTMLDivElement
  ).querySelectorAll('input');
