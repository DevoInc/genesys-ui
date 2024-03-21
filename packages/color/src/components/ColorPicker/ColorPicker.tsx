import * as React from 'react';
import { toColorString } from 'polished';

import {
  strColorToRGBAColor,
  colorFromColorPickerValue,
  checkEqualColors,
} from './utils';

import { DropdownPicker, DropdownPickerProps } from './components';
import {
  Field,
  FieldProps,
  IGlobalAriaAttrs,
  Popover,
  PopoverProps,
} from '@devoinc/genesys-ui';

import { StyledColorPicker, StyledColorPickerProps } from './styled';

export interface ColorPickerProps
  extends Pick<IGlobalAriaAttrs, 'aria-label'>,
    Omit<FieldProps, 'children' | 'hasWideControl' | 'role' | 'onClick'>,
    Omit<DropdownPickerProps, 'expanded' | 'id'>,
    Omit<StyledColorPickerProps, 'disabled' | 'size' | 'status'> {
  value?: string;
  defaultValue: string;
  /** The placement of the floating color picker. */
  pickerPlacement?: PopoverProps['placement'];
  /** DOM element where the floating color picker is appended. It is appended to the body by default. */
  pickerAppendTo?: PopoverProps['appendTo'];
  /** If the floating color picker is opened by default. */
  pickerOpenedByDefault?: PopoverProps['isOpened'];
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  'aria-label': ariaLabel,
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
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  pickerPlacement = 'bottom-start',
  pickerAppendTo,
  pickerOpenedByDefault = false,
  presetColors,
  readOnly,
  required,
  requiredMarkTooltip,
  size = 'md',
  status = 'base',
  styles,
  tooltip,
  value,
}) => {
  const [color, setColor] = React.useState(
    strColorToRGBAColor(value, defaultValue),
  );

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
  const popoverId = `${id}__popover`;
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
      requiredMarkTooltip={requiredMarkTooltip}
      size={size}
      status={status}
      styles={styles}
      tooltip={tooltip}
    >
      <Popover
        appendTo={pickerAppendTo}
        id={popoverId}
        isOpened={pickerOpenedByDefault}
        placement={pickerPlacement}
      >
        {({ toggle, ref, isOpened }) => (
          <StyledColorPicker
            ref={ref}
            aria-label={ariaLabel}
            aria-controls={popoverId}
            aria-haspopup
            aria-expanded={isOpened}
            colorIndicatorType={colorIndicatorType}
            disabled={disabled}
            id={`${id}__trigger`}
            onClick={toggle}
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
        )}
        <DropdownPicker
          id={`${id}__picker`}
          color={color}
          disableAlpha={disableAlpha}
          liveUpdate={liveUpdate}
          onChange={internalOnChange}
          presetColors={presetColors}
        />
      </Popover>
    </Field>
  );
};
