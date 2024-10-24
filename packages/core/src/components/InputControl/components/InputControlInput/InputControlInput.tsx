import * as React from 'react';

import type {
  IContainerEventAttrs,
  IFieldControl,
  IInputAttrs,
  IInputEventAttrs,
  IStyledOverloadCss,
  ITextBoxAriaAttrs,
} from '../../../../declarations';
import { StyledInputControl } from './StyledInputControl';
import type { IInputControlInput } from './declarations';

export interface InputControlInputProps
  extends IInputControlInput,
    IFieldControl,
    IStyledOverloadCss,
    Pick<ITextBoxAriaAttrs, 'aria-invalid'>,
    Omit<IInputAttrs, 'size' | 'multiple'>,
    IInputEventAttrs,
    Pick<
      IContainerEventAttrs,
      'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onWheel'
    > {}

export const InputControlInput: React.FC<InputControlInputProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  accept,
  autoComplete,
  autoFocus,
  style,
  defaultValue,
  disabled,
  form,
  formAction,
  hasAddonToLeft,
  hasAddonToRight,
  hasIcon,
  hasTypeIcon,
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
  tooltip,
  type = 'text',
  value,
}) => (
  <StyledInputControl
    $hasAddonToLeft={hasAddonToLeft}
    $hasAddonToRight={hasAddonToRight}
    aria-describedby={ariaDescribedBy}
    aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
    aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    accept={accept}
    autoComplete={autoComplete}
    autoFocus={autoFocus}
    css={style}
    defaultValue={defaultValue}
    disabled={disabled}
    form={form}
    formAction={formAction}
    $hasIcon={hasIcon}
    $hasTypeIcon={hasTypeIcon}
    id={id}
    $inputWidth={inputWidth}
    max={max}
    maxLength={maxLength}
    min={min}
    minLength={minLength}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onClick={onClick}
    onFocus={onFocus}
    onInput={onInput}
    onInvalid={onInvalid}
    onKeyDown={onKeyDown}
    onKeyUp={onKeyUp}
    onLoad={onLoad}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseMove={onMouseMove}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    onMouseUp={onMouseUp}
    onPaste={onPaste}
    onWheel={onWheel}
    pattern={pattern}
    placeholder={placeholder}
    $readOnly={readOnly}
    required={required}
    $size={size}
    $status={status}
    step={step}
    title={tooltip}
    type={type}
    value={value}
  />
);
