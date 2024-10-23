import { Holo } from "@devoinc/holo";

export const performanceColumn = Holo.of()
.addType('index', (args = {}) => String(args.index + 1))
.schema({
  headerName: 'name',
  preset: () => 'text',
  id: 'index',
})
.repeat(10)
.generate();