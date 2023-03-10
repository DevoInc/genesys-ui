import * as React from 'react';
import { toColorString } from 'polished';

import {
  strColorToRGBAColor,
  colorFromColorPickerValue,
  checkEqualColors,
} from './utils';

import { DropdownPicker, DropdownPickerProps } from './components';
import { Field, FieldProps, Popper } from '@devoinc/genesys-ui';

import { StyledColorPicker, StyledColorPickerProps } from './styled';

export interface ColorPickerProps
  extends Omit<FieldProps, 'children' | 'hasWideControl' | 'role'>,
    Omit<DropdownPickerProps, 'expanded' | 'id'>,
    Omit<StyledColorPickerProps, 'disabled' | 'size' | 'status'> {
  value?: string;
  defaultValue: string;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  disabled,
  hasFloatingHelper,
  helper,
  hideLabel,
  id,
  label,
  labelPosition = 'top',
  colorIndicatorType = 'circle',
  defaultValue = '#000',
  disableAlpha,
  liveUpdate = false,
  onChange,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  presetColors,
  readOnly,
  required,
  requiredMarkTitle,
  size = 'md',
  status = 'base',
  title,
  value,
}) => {
  const [color, setColor] = React.useState(
    strColorToRGBAColor(value, defaultValue)
  );
  const [visible, setVisible] = React.useState(false);

  const _onChange = () => {
    /* Default color for compare with selected color */
    const currentColor = strColorToRGBAColor(value, defaultValue);
    if (onChange && !checkEqualColors(color, currentColor)) {
      onChange(toColorString(color));
    }
  };

  /**
   * onChange event
   * @param {Object} c - Object returns color (c.rgba, c.hex, c.hsv, c.hsl, c.oldHue and c.source)
   */
  const internalOnChange = (c) => {
    /* changed format color {r: ..., g:..., b:...., a:....} to
     {red: ..., green:..., blue:...., alpha:....} */
    setColor(colorFromColorPickerValue(c.rgb));
    if (liveUpdate) {
      _onChange();
    }
  };

  return (
    <Field
      disabled={disabled}
      hasFloatingHelper={hasFloatingHelper}
      hasWideControl={false}
      helper={helper}
      hideLabel={hideLabel}
      id={id}
      label={label}
      labelPosition={labelPosition}
      required={required}
      requiredMarkTitle={requiredMarkTitle}
      size={size}
      status={status}
      title={title}
    >
      <Popper
        visible={visible}
        setIsVisible={setVisible}
        trigger={
          <StyledColorPicker
            aria-label={label}
            aria-controls={`${id}-picker`}
            aria-haspopup
            aria-expanded={visible}
            colorIndicatorType={colorIndicatorType}
            disabled={disabled}
            id={`${id}-color-trigger`}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseMove={onMouseMove}
            onMouseOut={onMouseOut}
            onMouseOver={onMouseOver}
            onMouseUp={onMouseUp}
            readOnly={readOnly}
            size={size}
            status={status}
          >
            <div
              className="color-indicator__sample"
              style={{ backgroundColor: toColorString(color) }}
            />
          </StyledColorPicker>
        }
      >
        <DropdownPicker
          expanded={visible}
          id={`${id}-color-picker`}
          color={color}
          disableAlpha={disableAlpha}
          liveUpdate={liveUpdate}
          onChange={internalOnChange}
          presetColors={presetColors}
        />
      </Popper>
    </Field>
  );
};
