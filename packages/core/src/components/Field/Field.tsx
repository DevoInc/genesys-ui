import * as React from 'react';

// types and constants
import { FIELD_LABEL_POS_DIRECTION_MAP } from './constants';

import {
  FieldAttrProps,
  ControlWidth,
  FieldSize,
  FieldStatus,
  GlobalAttrProps,
} from '../../declarations';
import { LabelPosition } from './declarations';
import { UIColorScheme } from '../../declarations';

// utils
import { WithRequired } from '../../typeFunctions';
import { hasStatus } from '../../utils/validations';

// components
import {
  FieldAddon,
  FieldContainer,
  FieldContainerProps,
  FieldControlDistributor,
  FieldFloatingHelper,
  FieldLabel,
  FieldLabelDistributor,
  FieldRequiredMark,
  FieldRequiredMarkProps,
} from './components';
import { FieldHelper } from './components/FieldHelper';

export type FieldChildrenProps = React.ReactElement<{
  'aria-describedby': React.HTMLAttributes<unknown>['aria-describedby'];
  'aria-errormessage': React.HTMLAttributes<unknown>['aria-errormessage'];
  'aria-label': React.HTMLAttributes<unknown>['aria-label'];
  'aria-labelledby': React.HTMLAttributes<unknown>['aria-labelledby'];
  id: string;
  required: boolean;
  size: FieldSize;
  status: FieldStatus;
  [key: string]: unknown;
}>;

export interface FieldProps
  extends WithRequired<GlobalAttrProps, 'id'>,
    Pick<FieldAttrProps, 'disabled' | 'required'>,
    Omit<FieldContainerProps, 'children'> {
  /** Children to be passed */
  children: FieldChildrenProps;
  /** Field control predefined width for Input, Select… etc. */
  controlWidth?: ControlWidth;
  /** If the Helper is rendered as a floating element displayed by clicking a trigger. */
  hasFloatingHelper?: boolean;
  /** If the field control is rendered filling all the available space (e.g. Input component) or only its own width (e.g. Switch component). */
  hasWideControl?: boolean;
  /** The message for the Helper: it's displayed as extra info to fill the form or the field or as status message if there are error, warning or success contexts. */
  helper?: React.ReactNode;
  /** Make the label not visible, but still accessible. Anyway aria-label always exits in input control. */
  hideLabel?: boolean;
  /** The title to be shown on hover of the required marker of the Field._ */
  requiredMarkTooltip?: FieldRequiredMarkProps['tooltip'];
  /** Label for the input (aria-label is the same as Label) */
  label: React.ReactNode;
  /** Position of the label text relative to the input control. The position 'right' for the label is only recommended for checkbox and radio controls. */
  labelPosition?: LabelPosition;
  /** Size of the input: height, padding, font-size... etc. */
  size?: FieldSize;
  /** This property defines the status color schema for the Field._ */
  status?: FieldStatus;
}

export const PartField: React.FC<FieldProps> = ({
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
  styles,
  tooltip,
  ...mouseEventAttrProps
}) => {
  const helperId = helper ? `${id}-field-helper` : undefined;
  const labelId = label ? `${id}-field-label` : undefined;
  const showFloatingHelper = helper && hasFloatingHelper;
  const labelPositionUpper = labelPosition.toUpperCase();
  const direction = FIELD_LABEL_POS_DIRECTION_MAP[labelPositionUpper];
  const RequiredMarkerBlock = (
    <Field._RequiredMark
      colorScheme={status as UIColorScheme}
      tooltip={requiredMarkTooltip}
    />
  );
  const FloatingHelperBlock = (
    <Field._FloatingHelper
      message={helper}
      id={helperId}
      status={hasStatus(status) ? status : 'help'}
    />
  );
  return (
    <Field._Container
      {...mouseEventAttrProps}
      as={as}
      direction={direction}
      role={role}
      size={size}
      status={status}
      styles={styles}
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
          {React.cloneElement(children, {
            'aria-describedby':
              children.props['aria-describedby'] || helperId || undefined,
            'aria-errormessage':
              status === 'error'
                ? children.props['aria-errormessage'] || helperId
                : undefined,
            'aria-labelledby':
              children.props['aria-labelledby'] || labelId || undefined,
          })}
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

export const Field = PartField as typeof PartField & {
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
