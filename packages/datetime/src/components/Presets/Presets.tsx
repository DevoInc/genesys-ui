import * as React from 'react';

import {
  type IGlobalAttrs,
  SelectControl,
  type SelectControlProps,
  type TSelectOption,
  type IStyledOverloadCss,
} from '@devoinc/genesys-ui';

import type { Preset, PresetRange, PresetGroup } from './declarations';
import { WithRequired } from '../../typeFunctions';

export interface PresetsProps
  extends WithRequired<IGlobalAttrs, 'id'>,
    Pick<IGlobalAttrs, 'tooltip'>,
    Partial<Pick<HTMLInputElement, 'placeholder'>>,
    Partial<Pick<SelectControlProps, 'maxMenuHeight' | 'size'>>,
    IStyledOverloadCss {
  /** Function called when selected a preset. */
  onChange: (preset: PresetRange) => void;
  /** Custom list of presets values. */
  presets: (Preset | PresetGroup)[];
  /** Default preset range value. */
  value?: PresetRange;
  id: string;
}

const InternalPresets: React.FC<PresetsProps> = ({
  id,
  maxMenuHeight,
  onChange,
  placeholder = 'Filter options...',
  presets,
  value = { from: '', to: '' },
  size = 'sm',
  ...restSelectAttrs
}) => {
  const handleChange = React.useCallback(
    (option: TSelectOption) => {
      if (onChange) {
        onChange(JSON.parse(option.value as string) as PresetRange);
      }
    },
    [onChange],
  );

  const serializedValue = React.useMemo(() => JSON.stringify(value), [value]);

  const securedPresets = React.useMemo(() => {
    const secured = presets.map((preset) => {
      if ('options' in preset) {
        return {
          ...preset,
          options: preset.options.map((option) => ({
            ...option,
            value: JSON.stringify(option.value),
          })),
        };
      } else {
        return {
          ...preset,
          value: JSON.stringify(preset.value),
        };
      }
    });

    return secured;
  }, [presets]);

  return (
    <SelectControl
      {...restSelectAttrs}
      controlShouldRenderValue={false}
      hideSelectedOptions={false}
      id={id}
      maxMenuHeight={maxMenuHeight}
      menuIsOpen
      menuRelative
      menuLevel={0}
      onChange={handleChange}
      options={securedPresets}
      placeholder={placeholder}
      size={size}
      value={serializedValue}
    />
  );
};

export const Presets = React.memo(InternalPresets);
Presets.displayName = 'Presets';
