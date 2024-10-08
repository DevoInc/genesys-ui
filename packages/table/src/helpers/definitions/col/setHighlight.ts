export const setHighlight = (coldefs, id, isHighlighted) => {
  return coldefs?.map((col) => {
    if (col.id === id) {
      return { ...col, isHighlighted: !!isHighlighted };
    }
    return { ...col, isHighlighted: false };
  }) || [];
};