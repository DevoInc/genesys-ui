import * as React from 'react';

import {
  type SelectControlProps,
  type IStyledOverloadCss,
  Menu,
  InputControl,
  VFlex,
  Box,
} from '@devoinc/genesys-ui';

import type { TPreset } from './declarations';
import { filterPreset, removeEmptyGroups } from './filter';
import { areDateRangeEqual } from '../../helpers';
import type { TDateRange } from '../../declarations';

export interface PresetsProps
  extends Partial<Pick<SelectControlProps, 'maxMenuHeight' | 'size'>>,
    IStyledOverloadCss {
  /** A unique identifier for the element */
  id: string;
  /** Component tooltip */
  tooltip?: string;
  /** Input placeholder */
  placeholder?: string;
  /** Function called when selected a preset. */
  onChange: (value: TDateRange) => void;
  /** Custom list of presets values. */
  presets: TPreset[];
  /** Default preset range value. */
  value?: TDateRange;
  /** Allow to match the options using the value */
  hasMatch?: boolean;
}

export const Presets: React.FC<PresetsProps> = ({
  id,
  maxMenuHeight,
  placeholder = 'Filter options...',
  presets,
  value,
  onChange = () => null,
  size = 'sm',
  hasMatch = false,
  ...dataProps
}) => {
  const [term, setTerm] = React.useState('');

  return (
    <VFlex id={id} {...dataProps}>
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
            (preset) => {
              const isEqualDateRange = areDateRangeEqual(value, preset.value);
              const key = `${preset.value ? preset.value.map((x) => x.toString()).join('-') : 'group'}-${preset.label}`;
              return preset.value ? (
                <Menu.Item
                  key={key}
                  label={preset.label}
                  name={`presets-${id}`}
                  state={hasMatch && isEqualDateRange ? 'selected' : 'enabled'}
                  aria-current={hasMatch && isEqualDateRange}
                  onClick={() => {
                    onChange(preset.value);
                  }}
                />
              ) : (
                <Menu.Heading key={preset.label}>{preset.label}</Menu.Heading>
              );
            },
          )}
        </Menu>
      </Box>
    </VFlex>
  );
};
