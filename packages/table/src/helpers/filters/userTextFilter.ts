import { type TColDef } from '../../declarations';

const userHasText = (user: { [key: string]: any }, text: string) =>
  user.name?.toLowerCase().includes(text.toLowerCase()) ||
  user.email?.toLowerCase().includes(text.toLowerCase()) ||
  user.job?.toLowerCase().includes(text.toLowerCase()) ||
  user.role?.toLowerCase().includes(text.toLowerCase());

export const userTextFilter = (
  data: string,
  search: string,
  colDef: TColDef
) =>
  search === ''
    ? true
    : data.toLowerCase().includes(String(search).toLowerCase())
      ? true
      : data && colDef?.context?.userMapping[data]
        ? userHasText(colDef.context.userMapping[data], search)
        : false;
