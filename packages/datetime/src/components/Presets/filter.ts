import { TPreset } from './declarations';

const isGroup = (preset: TPreset) => !preset.value;

const prepareTerm = (term: string) => term.toLowerCase().trim();

export const filterPreset = (term: string) => (preset: TPreset) =>
  isGroup(preset) || prepareTerm(preset.label).includes(prepareTerm(term));

export const removeEmptyGroups = (presets: TPreset[]) =>
  presets.filter(
    (preset, index, originalPresets) =>
      !isGroup(preset) || originalPresets[index + 1]?.value !== undefined,
  );
