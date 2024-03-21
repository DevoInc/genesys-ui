import * as React from 'react';
import { GISearchFindZoom } from '@devoinc/genesys-icons';

import { INPUT_CONTROL_ICON_STATUS_MAP } from './constants';
import type {
  IFieldControl,
  IWithRequiredAriaLabelOrAriaLabelledByAttr,
} from '../../declarations';
import type {
  InputControlIconProps,
  InputControlInputProps,
} from './components';
import { FieldContext } from '../Field/context';
import { hasStatus } from '../../utils/validations';

import { Field, getFieldContextProps } from '../Field';
import {
  InputControlContainer,
  InputControlIcon,
  InputControlInnerContainer,
  type InputControlInnerContainerProps,
  InputControlInput,
  InputControlShowPassword,
} from './components';

export interface BaseInputControlProps
  extends IFieldControl,
    Pick<
      InputControlInputProps,
      | 'accept'
      | 'autoComplete'
      | 'autoFocus'
      | 'defaultValue'
      | 'formAction'
      | 'max'
      | 'maxLength'
      | 'min'
      | 'minLength'
      | 'onInput'
      | 'onInvalid'
      | 'onKeyDown'
      | 'onKeyUp'
      | 'onLoad'
      | 'onPaste'
      | 'onWheel'
      | 'pattern'
      | 'placeholder'
      | 'readOnly'
      | 'size'
      | 'status'
      | 'step'
      | 'type'
      | 'value'
    >,
    Pick<InputControlIconProps, 'icon'>,
    Pick<InputControlInnerContainerProps, 'inputWidth'> {
  /** Fixed block of content at the beginning of the input */
  addonToLeft?: React.ReactNode;
  /** Fixed block of content at the end of the input */
  addonToRight?: React.ReactNode;
  /** If the status icon which is shown automatically based on the status is hidden.
   *  Usually when the InputControl is related with a validation helper to avoid redundancy. */
  hideStatusIcon?: boolean;
  /** If the type icon which is shown automatically based on the type is hidden.
   *  E.g. when the InputControl is type search, but it's combined with an IconButton which has already the search icon. */
  hideTypeIcon?: boolean;
}

export type InputControlProps =
  IWithRequiredAriaLabelOrAriaLabelledByAttr<BaseInputControlProps>;

const InternalInputControl: React.FC<InputControlProps> = ({
  addonToLeft,
  addonToRight,
  'aria-errormessage': ariaErrorMessage,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  accept,
  autoComplete,
  autoFocus,
  defaultValue,
  disabled,
  form,
  formAction,
  hideStatusIcon,
  hideTypeIcon,
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
  size,
  status,
  step,
  styles,
  tooltip,
  type = 'text',
  value,
}) => {
  const fieldContext = React.useContext(FieldContext);
  const contextBasedProps = getFieldContextProps({
    ariaDescribedBy,
    ariaErrorMessage,
    ariaLabelledBy,
    disabled,
    context: fieldContext,
    id,
    required,
    size,
    status,
  });
  const evalStatus = contextBasedProps.status;
  const evalSize = contextBasedProps.size;
  const evalDisabled = contextBasedProps.disabled;
  const [showPassword, setShowPassword] = React.useState(false);
  const typeIcon =
    type === 'search' && !hideTypeIcon ? <GISearchFindZoom /> : null;
  const iconEval =
    hasStatus(evalStatus) && !hideStatusIcon
      ? INPUT_CONTROL_ICON_STATUS_MAP[evalStatus]
      : icon;

  return (
    <InputControl._Container
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      styles={styles}
      tooltip={tooltip}
    >
      {addonToLeft && (
        <Field._Addon disabled={evalDisabled} size={evalSize}>
          {addonToLeft}
        </Field._Addon>
      )}
      <InputControl._InnerContainer inputWidth={inputWidth}>
        {typeIcon && (
          <InputControl._Icon
            icon={typeIcon}
            size={evalSize}
            status={evalStatus}
            isTypeIcon
          />
        )}
        {iconEval && (
          <InputControl._Icon
            icon={iconEval}
            size={evalSize}
            status={evalStatus}
            type={type}
          />
        )}
        {type === 'password' && (
          <InputControl._ShowPassword
            onClick={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
            size={evalSize}
          />
        )}
        <InputControl._Input
          aria-describedby={contextBasedProps.ariaDescribedBy}
          aria-errormessage={
            evalStatus === 'error'
              ? contextBasedProps.ariaErrorMessage
              : undefined
          }
          aria-invalid={
            ariaInvalid ?? (evalStatus === 'error' ? true : undefined)
          }
          aria-label={ariaLabel}
          aria-labelledby={contextBasedProps.ariaLabelledBy}
          accept={accept}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          disabled={evalDisabled}
          form={form}
          formAction={formAction}
          hasAddonToLeft={Boolean(addonToLeft)}
          hasAddonToRight={Boolean(addonToRight)}
          id={contextBasedProps.id}
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
          required={contextBasedProps.required}
          hasIcon={Boolean(iconEval)}
          hasTypeIcon={Boolean(typeIcon)}
          size={evalSize}
          status={evalStatus}
          step={step}
          type={showPassword ? 'text' : type}
          value={value}
        />
      </InputControl._InnerContainer>
      {addonToRight && (
        <Field._Addon disabled={evalDisabled} position="right" size={evalSize}>
          {addonToRight}
        </Field._Addon>
      )}
    </InputControl._Container>
  );
};

export const InputControl =
  InternalInputControl as typeof InternalInputControl & {
    _Addon: typeof Field._Addon;
    _Container: typeof InputControlContainer;
    _Icon: typeof InputControlIcon;
    _Input: typeof InputControlInput;
    _InnerContainer: typeof InputControlInnerContainer;
    _ShowPassword: typeof InputControlShowPassword;
  };

InputControl._Addon = Field._Addon;
InputControl._Container = InputControlContainer;
InputControl._Icon = InputControlIcon;
InputControl._Input = InputControlInput;
InputControl._InnerContainer = InputControlInnerContainer;
InputControl._ShowPassword = InputControlShowPassword;

InternalInputControl.displayName = 'InputControl';
