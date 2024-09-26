import { TRowPreset } from '../../declarations';

export const expanded: TRowPreset = {
  style: ({theme, evenOddType}) =>
    `background-color: ${theme.cmp.table.row.color.background[evenOddType].expanded}`,
  id: 'expanded',
};
