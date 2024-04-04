import * as React from 'react';
import { toColorString } from 'polished';
import { RgbaColor } from 'polished/lib/types/color';

import { FieldProps } from '@devoinc/genesys-ui';
import { TColor } from '../declarations';
import { StyledSketchPicker } from '../styled';

export interface DropdownPickerProps extends Pick<FieldProps, 'id'> {
  color?: RgbaColor;
  onChange?: (color: string) => void;
  presetColors?: TColor[];
  disableAlpha?: boolean;
  liveUpdate?: boolean;
}

export const DropdownPicker: React.FC<DropdownPickerProps> = ({
  color,
  id,
  onChange,
  presetColors,
  disableAlpha,
  liveUpdate,
}) => (
  <StyledSketchPicker
    disableAlpha={disableAlpha}
    id={id}
    presetColors={presetColors}
    onChangeComplete={liveUpdate ? onChange : null}
    onChange={!liveUpdate ? onChange : null}
    className="color-picker"
    color={toColorString(color)}
  />
);
