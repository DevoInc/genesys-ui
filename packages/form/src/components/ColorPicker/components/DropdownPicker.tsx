import * as React from 'react';
import { toColorString } from 'polished';

import { FieldProps } from '@devoinc/genesys-ui';
import { Color } from '../declarations';
import { StyledSketchPicker } from '../styled';
import { RgbaColor } from 'polished/lib/types/color';

export interface DropdownPickerProps extends Pick<FieldProps, 'id'> {
  expanded?: boolean;
  color?: RgbaColor;
  onChange?: (color: string) => void;
  presetColors?: Color[];
  disableAlpha?: boolean;
  liveUpdate?: boolean;
}

export const DropdownPicker: React.FC<DropdownPickerProps> = ({
  expanded,
  color,
  id,
  onChange,
  presetColors,
  disableAlpha,
  liveUpdate,
}) => (
  <div id={id} aria-expanded={expanded}>
    <StyledSketchPicker
      disableAlpha={disableAlpha}
      presetColors={presetColors}
      onChangeComplete={liveUpdate ? onChange : null}
      onChange={!liveUpdate ? onChange : null}
      className="color-picker"
      color={toColorString(color)}
    />
  </div>
);
