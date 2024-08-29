import { TRowDef } from "../../../../declarations";

export const getRowDef = (rowDefs: TRowDef[], id: string) => rowDefs.find((r) => r.id === id);