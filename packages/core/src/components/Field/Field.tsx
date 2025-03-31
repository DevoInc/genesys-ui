import * as React from 'react';

import { FIELD_LABEL_POS_DIRECTION_MAP } from './constants';

import type { IField } from './declarations';
import type { TUIColorScheme } from '../../declarations';

import { hasStatus } from '../../utils/validations';
import { FieldContext } from './context';

import {
  FieldAddon,
  FieldContainer,
  FieldControlDistributor,
  FieldFloatingHelper,
  FieldLabel,
  FieldLabelDistributor,
  FieldRequiredMark,
} from './components';
import { FieldHelper } from './components/FieldHelper';

export interface FieldProps extends IField {}

export const InternalField: React.FC<FieldProps> = ({
  as,
  children,
  disabled = false,
  controlWidth,
  hasFloatingHelper,
  hasWideControl = true,
  helper,
  hideLabel,
  id,
  label,
  labelPosition = 'top',
  required,
  requiredMarkTooltip,
  role,
  size = 'md',
  status = 'base',
  style,
  tooltip,
  floatingHelperTooltip,
  ...mouseEventAttrProps
}) => {
  const helperId = helper ? `${id}-helper` : undefined;
  const labelId = label ? `${id}-label` : undefined;
  const showFloatingHelper = helper && hasFloatingHelper;
  const labelPositionUpper = labelPosition.toUpperCase();
  const direction = FIELD_LABEL_POS_DIRECTION_MAP[labelPositionUpper];
  const RequiredMarkerBlock = (
    <Field._RequiredMark
      colorScheme={status as TUIColorScheme}
      tooltip={requiredMarkTooltip}
    />
  );
  const FloatingHelperBlock = (
    <Field._FloatingHelper
      message={helper}
      id={helperId}
      status={hasStatus(status) ? status : 'help'}
      tooltip={floatingHelperTooltip}
    />
  );
  return (
    <Field._Container
      {...mouseEventAttrProps}
      as={as}
      role={role}
      style={style}
      tooltip={tooltip}
    >
      <Field._LabelDistributor direction={direction}>
        {label && (
          <Field._Label
            cursor={disabled ? 'not-allowed' : undefined}
            labelPosition={labelPosition}
            srOnly={hideLabel}
            helper={showFloatingHelper ? FloatingHelperBlock : null}
            htmlFor={disabled ? null : id}
            id={labelId}
            requiredMark={required ? RequiredMarkerBlock : null}
            size={size}
          >
            {label}
          </Field._Label>
        )}
        <Field._ControlDistributor
          labelPosition={labelPosition}
          size={size}
          wide={hasWideControl}
          width={controlWidth}
        >
          <FieldContext.Provider
            value={{
              ariaErrorMessage: helperId,
              ariaDescribedBy: helperId,
              ariaLabelledBy: labelId,
              direction,
              disabled,
              hasWideControl,
              id,
              labelPosition,
              required,
              size,
              status,
            }}
          >
            {children}
          </FieldContext.Provider>
          {hideLabel && showFloatingHelper && FloatingHelperBlock}
        </Field._ControlDistributor>
      </Field._LabelDistributor>
      {helper && helperId && !hasFloatingHelper && (
        <Field._Helper
          id={helperId}
          message={helper}
          size={size}
          status={status}
        />
      )}
    </Field._Container>
  );
};

export const Field = InternalField as typeof InternalField & {
  _Addon: typeof FieldAddon;
  _Container: typeof FieldContainer;
  _ControlDistributor: typeof FieldControlDistributor;
  _FloatingHelper: typeof FieldFloatingHelper;
  _Helper: typeof FieldHelper;
  _Label: typeof FieldLabel;
  _LabelDistributor: typeof FieldLabelDistributor;
  _RequiredMark: typeof FieldRequiredMark;
};

Field._Addon = FieldAddon;
Field._Container = FieldContainer;
Field._ControlDistributor = FieldControlDistributor;
Field._Helper = FieldHelper;
Field._FloatingHelper = FieldFloatingHelper;
Field._Label = FieldLabel;
Field._LabelDistributor = FieldLabelDistributor;
Field._RequiredMark = FieldRequiredMark;

InternalField.displayName = 'Field';
Field._Addon.displayName = 'Field._Addon';
Field._Container.displayName = 'Field._Container';
Field._ControlDistributor.displayName = 'Field._ControlDistributor';
Field._Helper.displayName = 'Field._Helper';
Field._FloatingHelper.displayName = 'Field._FloatingHelper';
Field._Label.displayName = 'Field._Label';
Field._LabelDistributor.displayName = 'Field._LabelDistributor';
Field._RequiredMark.displayName = 'Field._RequiredMark';
