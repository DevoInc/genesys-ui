import * as React from 'react';

import {
  type IGlobalAttrs,
  type SelectControlProps,
  type IStyledOverloadCss,
  Menu,
  InputControl,
  VFlex,
  Box,
} from '@devoinc/genesys-ui';

import type { TPreset } from './declarations';
import { WithRequired } from '../../typeFunctions';
import { filterPreset, removeEmptyGroups } from './filter';
import { arePresetValuesEqual } from './eq';
import type { TDateRange } from '../../declarations';

export interface PresetsProps
  extends WithRequired<IGlobalAttrs, 'id'>,
    Pick<IGlobalAttrs, 'tooltip'>,
    Partial<Pick<HTMLInputElement, 'placeholder'>>,
    Partial<Pick<SelectControlProps, 'maxMenuHeight' | 'size'>>,
    IStyledOverloadCss {
  /** Function called when selected a preset. */
  onChange: (value: TDateRange) => void;
  /** Custom list of presets values. */
  presets: TPreset[];
  /** Default preset range value. */
  value?: TDateRange;
}

export const Presets: React.FC<PresetsProps> = ({
  id,
  maxMenuHeight,
  placeholder = 'Filter options...',
  presets,
  value,
  onChange = () => null,
  size = 'sm',
}) => {
  const [term, setTerm] = React.useState('');

  return (
    <VFlex id={id}>
      <InputControl
        placeholder={placeholder}
        size={size}
        aria-labelledby={'Filter presets'}
        value={term}
        onChange={(ev) => {
          setTerm((ev.currentTarget as HTMLInputElement).value);
        }}
      />
      <Box height={`${maxMenuHeight}px`} overflowY={'auto'}>
        <Menu>
          {removeEmptyGroups(presets.filter(filterPreset(term))).map(
            (preset) =>
              preset.value ? (
                <Menu.Item
                  key={preset.label}
                  label={preset.label}
                  selectionScheme="single"
                  name={`presets-${id}`}
                  state={
                    arePresetValuesEqual(value, preset.value)
                      ? 'selected'
                      : 'enabled'
                  }
                  onClick={() => {
                    onChange(preset.value);
                  }}
                />
              ) : (
                <Menu.Heading key={preset.label}>{preset.label}</Menu.Heading>
              ),
          )}
        </Menu>
      </Box>
    </VFlex>
  );
};
