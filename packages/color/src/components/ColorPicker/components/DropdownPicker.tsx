import * as React from 'react';
import { toColorString } from 'polished';
import { RgbaColor } from 'polished/lib/types/color';

import { FieldProps, type IDataAttrs } from '@devoinc/genesys-ui';
import { TColor } from '../declarations';
import { StyledSketchPicker } from '../styled';

export interface DropdownPickerProps
  extends IDataAttrs,
    Pick<FieldProps, 'id'> {
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
  ...restDataProps
}) => (
  <StyledSketchPicker
    {...restDataProps}
    disableAlpha={disableAlpha}
    id={id}
    presetColors={presetColors}
    onChangeComplete={liveUpdate ? onChange : null}
    onChange={!liveUpdate ? onChange : null}
    color={toColorString(color)}
  />
);
