import * as React from 'react';

// constants
import { INPUT_CONTROL_ICON_STATUS_MAP } from './constants';

// utils
import { hasStatus } from '../../utils/validations';

// declarations
import type {
  InputControlIconProps,
  InputControlInputProps,
} from './components';

// components
import { Field } from '../Field';
import {
  InputControlContainer,
  InputControlIcon,
  InputControlInnerContainer,
  InputControlInput,
} from './components';

export interface InputControlProps
  extends Omit<InputControlInputProps, 'hasIcon' | 'hasTypeIcon'>,
    Pick<InputControlIconProps, 'icon'> {
  /** Fixed block of content at the beginning of the input */
  addonToLeft?: React.ReactNode;
  /** Fixed block of content at the end of the input */
  addonToRight?: React.ReactNode;
}

const InternalInputControl: React.FC<InputControlProps> = ({
  addonToLeft,
  addonToRight,
  'aria-errormessage': ariaErrorMessage,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  accept,
  autoComplete,
  autoFocus,
  defaultValue,
  disabled,
  form,
  formAction,
  icon,
  id,
  inputWidth,
  max,
  maxLength,
  min,
  minLength,
  name,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onInput,
  onInvalid,
  onKeyDown,
  onKeyUp,
  onLoad,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onPaste,
  onWheel,
  pattern,
  placeholder,
  readOnly,
  required,
  size = 'md',
  status = 'base',
  step,
  title,
  type = 'text',
  value,
}) => {
  const typeIcon = type === 'search' ? 'search_find_zoom' : null;
  const iconEval =
    icon || (hasStatus(status) ? INPUT_CONTROL_ICON_STATUS_MAP[status] : icon);
  return (
    <InputControlContainer
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      title={title}
    >
      {addonToLeft && (
        <Field.Addon disabled={disabled} size={size}>
          {addonToLeft}
        </Field.Addon>
      )}
      <InputControlInnerContainer inputWidth={inputWidth}>
        {typeIcon && (
          <InputControlIcon
            icon={typeIcon}
            size={size}
            status={status}
            isTypeIcon
          />
        )}
        {iconEval && (
          <InputControlIcon icon={iconEval} size={size} status={status} />
        )}
        <InputControlInput
          aria-describedby={ariaDescribedBy}
          aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
          aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
          aria-label={ariaLabel}
          accept={accept}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          disabled={disabled}
          form={form}
          formAction={formAction}
          hasAddonToLeft={Boolean(addonToLeft)}
          hasAddonToRight={Boolean(addonToRight)}
          id={id}
          max={max}
          maxLength={maxLength}
          min={min}
          minLength={minLength}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          onInput={onInput}
          onInvalid={onInvalid}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onLoad={onLoad}
          onPaste={onPaste}
          onWheel={onWheel}
          pattern={pattern}
          placeholder={placeholder}
          readOnly={readOnly}
          required={required}
          hasIcon={Boolean(iconEval)}
          hasTypeIcon={Boolean(typeIcon)}
          size={size}
          status={status}
          step={step}
          type={type}
          value={value}
        />
      </InputControlInnerContainer>
      {addonToRight && (
        <Field.Addon disabled={disabled} position="right" size={size}>
          {addonToRight}
        </Field.Addon>
      )}
    </InputControlContainer>
  );
};

export const InputControl =
  InternalInputControl as typeof InternalInputControl & {
    Addon: typeof Field.Addon;
    Container: typeof InputControlContainer;
    Icon: typeof InputControlIcon;
    Input: typeof InputControlInput;
    InnerContainer: typeof InputControlInnerContainer;
  };

InputControl.Addon = Field.Addon;
InputControl.Container = InputControlContainer;
InputControl.Icon = InputControlIcon;
InputControl.Input = InputControlInput;
InputControl.InnerContainer = InputControlInnerContainer;
