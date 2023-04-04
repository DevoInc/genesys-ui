import * as React from 'react';
import { useTheme } from 'styled-components';

// types
import {
  FieldAttrProps,
  FieldSize,
  FieldStatus,
  GlobalAttrProps,
  MouseEventAttrProps,
} from '../../declarations';
import {
  FIELD_FLEX_CONFIG,
  FIELD_HELPER_SIZE_MAP,
  FIELD_LABEL_POS_DIRECTION_MAP,
  LabelPosition,
} from './declarations';

// utils
import { hasStatus } from '../../utils/validations';

// components
import { Flex, FloatingHelper, Helper } from '../../';
import {
  FieldAddon,
  FieldLabel,
  FieldRequiredMark,
  FieldRequiredMarkProps,
} from './components';
import { UIColorScheme } from '../../declarations';
import { WithRequired } from '../../typeFunctions';

export type FieldChildrenProps = React.ReactElement<{
  'aria-describedby': React.HTMLAttributes<unknown>['aria-describedby'];
  'aria-errormessage': React.HTMLAttributes<unknown>['aria-errormessage'];
  'aria-label': React.HTMLAttributes<unknown>['aria-label'];
  id: string;
  required: boolean;
  size: FieldSize;
  status: FieldStatus;
  [key: string]: unknown;
}>;

export interface FieldProps
  extends WithRequired<GlobalAttrProps, 'id'>,
    Pick<FieldAttrProps, 'disabled' | 'required'>,
    MouseEventAttrProps {
  /** Children to be passed */
  children: FieldChildrenProps;
  /** If the Helper is rendered as a floating element displayed by clicking a trigger. */
  hasFloatingHelper?: boolean;
  /** If the field control is rendered filling all the available space (e.g. Input component) or only its own width (e.g. Switch component). */
  hasWideControl?: boolean;
  /** The message for the Helper: it's displayed as extra info to fill the form or the field or as status message if there are error, warning or success contexts. */
  helper?: React.ReactNode;
  /** Make the label not visible, but still accessible. Anyway aria-label always exits in input control. */
  hideLabel?: boolean;
  /** The title to be shown on hover of the required marker of the field. */
  requiredMarkTitle?: FieldRequiredMarkProps['title'];
  /** Label for the input (aria-label is the same as Label) */
  label: string;
  /** Position of the label text relative to the input control. The position 'right' for the label is only recommended for checkbox and radio controls. */
  labelPosition?: LabelPosition;
  /** Size of the input: height, padding, font-size... etc. */
  size?: FieldSize;
  /** This property defines the status color schema for the field. */
  status?: FieldStatus;
}

export const PartField: React.FC<FieldProps> = ({
  children,
  disabled = false,
  hasFloatingHelper,
  hasWideControl = true,
  helper,
  hideLabel,
  id,
  label,
  labelPosition = 'top',
  required,
  requiredMarkTitle,
  role,
  size = 'md',
  status = 'base',
  title,
  ...mouseEventAttrProps
}) => {
  const helperId = helper ? `${id}-field-helper` : undefined;
  const showFloatingHelper = helper && hasFloatingHelper;
  const labelPositionUpper = labelPosition.toUpperCase();
  const direction =
    hasFloatingHelper && hideLabel
      ? 'row'
      : FIELD_LABEL_POS_DIRECTION_MAP[labelPositionUpper];
  const directionUpper = direction.toUpperCase();
  // to get vertically aligned the label with the control block anyway
  const labelLineHeight = useTheme().alias.typo.lineHeight.body[size];
  const RequiredMarkerBlock = (
    <Field.RequiredMark
      colorScheme={status as UIColorScheme}
      title={requiredMarkTitle}
    />
  );
  const FloatingHelperBlock = (
    <FloatingHelper
      message={helper}
      id={helperId}
      status={hasStatus(status) ? status : 'help'}
    />
  );

  return (
    <Flex
      {...mouseEventAttrProps}
      alignItems={'stretch'}
      flexDirection={'column'}
      gap={'cmp-xxs'}
      role={role}
      title={title}
    >
      <Flex
        alignItems={FIELD_FLEX_CONFIG[directionUpper].AI}
        flexDirection={FIELD_FLEX_CONFIG[directionUpper].FD}
        gap={FIELD_FLEX_CONFIG[directionUpper].GAP}
        justifyContent={FIELD_FLEX_CONFIG[directionUpper].JC}
      >
        {label && (
          <Field.Label
            cursor={disabled ? 'not-allowed' : undefined}
            labelPosition={labelPosition}
            srOnly={hideLabel}
            helper={showFloatingHelper ? FloatingHelperBlock : null}
            htmlFor={disabled ? null : id}
            requiredMark={required ? RequiredMarkerBlock : null}
            size={size}
          >
            {label}
          </Field.Label>
        )}
        <Flex
          flexDirection={hasWideControl ? 'column' : 'row'}
          alignItems={hasWideControl ? 'stretch' : 'center'}
          flex={
            !hasWideControl ||
            labelPosition === 'between' ||
            labelPosition === 'right'
              ? '0 0 auto'
              : '1 1 auto'
          }
          minHeight={labelLineHeight}
        >
          {React.cloneElement(children, {
            'aria-describedby':
              children.props['aria-describedby'] || helperId || undefined,
            'aria-errormessage':
              status === 'error'
                ? children.props['aria-errormessage'] || helperId
                : undefined,
          })}
        </Flex>
        {hideLabel && showFloatingHelper && (
          <FloatingHelper
            message={helper}
            id={helperId}
            status={hasStatus(status) ? status : 'help'}
          />
        )}
      </Flex>
      {helper && helperId && !hasFloatingHelper && (
        <Helper
          id={helperId}
          message={helper}
          size={FIELD_HELPER_SIZE_MAP[size]}
          status={status}
        />
      )}
    </Flex>
  );
};

export const Field = PartField as typeof PartField & {
  Label: typeof FieldLabel;
  Addon: typeof FieldAddon;
  RequiredMark: typeof FieldRequiredMark;
};

Field.Label = FieldLabel;
Field.Addon = FieldAddon;
Field.RequiredMark = FieldRequiredMark;
