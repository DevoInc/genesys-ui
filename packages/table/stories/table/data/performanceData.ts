import { Holo } from "@devoinc/holo";

export const performanceData = (colDefs) => Holo.of()
.schema(
  colDefs.reduce((prev, col) => ({ ...prev, [col.id]: 'name' }), {}),
)
.repeat(100)
.generate();