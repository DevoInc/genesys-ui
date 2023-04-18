import * as React from 'react';

// constants
import { INPUT_CONTROL_ICON_STATUS_MAP } from './constants';

// utils
import { hasStatus } from '../../utils/validations';

// components
import {
  Field,
  InputControlContainer,
  InputControlInnerContainer,
  InputControlInput,
  InputControlInputProps,
} from '../';

// styled
import { InputControlIcon } from './components/InputControlIcon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputControlProps extends InputControlInputProps {}

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
      {addonToLeft && <Field.Addon size={size}>{addonToLeft}</Field.Addon>}
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
          addonToLeft={addonToLeft}
          addonToRight={addonToRight}
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
          $size={size}
          status={status}
          step={step}
          type={type}
          value={value}
        />
      </InputControlInnerContainer>
      {addonToRight && (
        <Field.Addon position="right" size={size}>
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
