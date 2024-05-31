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
import { filterPresets } from './filter';

export interface PresetsProps
  extends WithRequired<IGlobalAttrs, 'id'>,
    Pick<IGlobalAttrs, 'tooltip'>,
    Partial<Pick<HTMLInputElement, 'placeholder'>>,
    Partial<Pick<SelectControlProps, 'maxMenuHeight' | 'size'>>,
    IStyledOverloadCss {
  /** Function called when selected a preset. */
  onChange: (value: string) => void;
  /** Custom list of presets values. */
  presets: TPreset[];
  /** Default preset range value. */
  value?: string;
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
          {filterPresets(presets, term).map((preset) =>
            preset.value ? (
              <Menu.Item
                key={preset.value}
                label={preset.label}
                selectionScheme="single"
                name={`presets-${id}`}
                state={value === preset.value ? 'selected' : 'enabled'}
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
