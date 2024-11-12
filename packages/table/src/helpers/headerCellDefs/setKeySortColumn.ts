export const setKeySortColumn = ({
  event,
  key,
  colDef,
  onSort
}) => {
  if (event.key === key) {
    onSort(colDef.id);
  }
}