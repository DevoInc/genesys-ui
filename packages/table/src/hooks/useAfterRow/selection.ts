export const updateSelection =
  (selection: (string | number)[]) => (id: string | number) =>
    (selection.includes(id)
      ? selection.reduce(
          (prev, curr) =>
            (curr === id ? prev : prev.concat([curr])) as (string | number)[],
          [],
        )
      : selection.concat([id])) as (string | number)[];
