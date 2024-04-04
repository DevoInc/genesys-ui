export type TPresetRange = {
  from: string | number;
  to: string | number;
};

export type TPreset = {
  value: TPresetRange;
  label: string;
};

export type TPresetGroup = {
  label: string;
  options: TPreset[];
};
