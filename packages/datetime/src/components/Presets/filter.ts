import { TPreset } from './declarations';

const isGroup = (preset: TPreset) => !preset.value;

const prepareTerm = (term: string) => term.toLowerCase().trim();

const filterPreset = (term: string) => (preset: TPreset) =>
  isGroup(preset) || prepareTerm(preset.label).includes(prepareTerm(term));

const filterGroup = (preset: TPreset, index: number, presets: TPreset[]) =>
  !(isGroup(preset) && presets[index + 1] && isGroup(presets[index + 1]));

export const filterPresets = (presets: TPreset[], term: string) =>
  presets.filter(filterPreset(term)).filter(filterGroup);
