export type PresetRange = {
  from: string | number;
  to: string | number;
};

export type Preset = {
  value: PresetRange;
  label: string;
};

export type PresetGroup = {
  label: string;
  options: Preset[];
};
