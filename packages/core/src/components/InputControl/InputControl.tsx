import * as React from 'react';
import { useTheme } from 'styled-components';

// constants
import { INPUT_CONTROL_ICON_STATUS_MAP } from './constants';

// declarations
import {
  ContainerEventAttrProps,
  FieldControlCommonProps,
  FieldControlWidth,
  FieldSize,
  InputAttrProps,
  InputEventAttrs,
  TextBoxAriaProps,
} from '../../declarations';

// utils
import { hasStatus } from '../../utils/validations';

// components
import { Field, Flex } from '../';

// styled
import {
  StyledInputControl,
  StyledInputControlIcon,
  StyledInputControlProps,
} from './styled';

export interface InputControlProps
  extends FieldControlCommonProps,
    Pick<TextBoxAriaProps, 'aria-invalid' | 'aria-activedescendant'>,
    Omit<InputAttrProps, 'size' | 'multiple'>,
    InputEventAttrs,
    Pick<
      ContainerEventAttrProps,
      'onKeyDown' | 'onKeyUp' | 'onPaste' | 'onWheel'
    >,
    Omit<StyledInputControlProps, 'hasIcon' | 'hasTypeIcon' | '$size'> {
  /** Name of the Icon from icon library font */
  icon?: string;
  /** Predefined width of the input. It should reflect the length of the content you expect the user to enter */
  inputWidth?: FieldControlWidth;
  /** Size of the input: height, padding, font-size... etc. */
  size?: FieldSize;
}

export const InputControl: React.FC<InputControlProps> = ({
  addonToLeft,
  addonToRight,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  icon,
  inputWidth,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  size = 'md',
  status = 'base',
  title,
  type = 'text',
  ...restInputNativeProps
}) => {
  const theme = useTheme();
  const typeIcon = type === 'search' ? 'search_find_zoom' : null;
  const iconEval =
    icon || (hasStatus(status) ? INPUT_CONTROL_ICON_STATUS_MAP[status] : icon);
  return (
    <Flex
      alignItems="stretch"
      flex="1 1 auto"
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      position="relative"
      title={title}
    >
      {addonToLeft && <Field.Addon size={size}>{addonToLeft}</Field.Addon>}
      <Flex
        flex={
          inputWidth
            ? `0 1 ${theme.alias.fields.size.width[inputWidth]}`
            : '1 1 100%'
        }
        position="relative"
        width={inputWidth ? theme.alias.fields.size.width[inputWidth] : '100%'}
      >
        <StyledInputControl
          {...restInputNativeProps}
          addonToLeft={addonToLeft}
          addonToRight={addonToRight}
          aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
          aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
          hasIcon={Boolean(iconEval)}
          hasTypeIcon={Boolean(typeIcon)}
          $size={size}
          status={status}
          type={type}
        />
        {typeIcon && (
          <StyledInputControlIcon
            aria-hidden
            className={`gi-${typeIcon}`}
            size={size}
            status={status}
            typeIcon={typeIcon}
          />
        )}
        {iconEval && (
          <StyledInputControlIcon
            aria-hidden
            className={`gi-${iconEval}`}
            size={size}
            status={status}
          />
        )}
      </Flex>
      {addonToRight && (
        <Field.Addon position="right" size={size}>
          {addonToRight}
        </Field.Addon>
      )}
    </Flex>
  );
};
