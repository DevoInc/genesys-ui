export const updateSelection = (selection: string[]) => (id: string) =>
  selection.includes(id)
    ? selection.reduce(
        (prev, curr) => (curr === id ? prev : prev.concat([curr])),
        [],
      )
    : selection.concat([id]);
