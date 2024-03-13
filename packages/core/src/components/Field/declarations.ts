import * as React from 'react';
import { WithRequired } from '../../typeFunctions';
import type {
  BaseSize,
  TFieldStatus,
  ControlWidth,
} from '../../declarations/commonProps';
import type {
  GlobalAttrProps,
  IFieldAttrs,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';
import type {
  FieldLabelDistributorProps,
  FieldRequiredMarkProps,
} from './components';

export type TFieldSize = BaseSize;
export type TLabelPosition = 'top' | 'left' | 'between' | 'right';
export type TFieldDirection = 'between' | 'row' | 'column' | 'reverse';
export type TFieldAddonPosition = 'left' | 'right';

export type TFieldChildren = React.ReactElement<{
  'aria-describedby': React.HTMLAttributes<unknown>['aria-describedby'];
  'aria-errormessage': React.HTMLAttributes<unknown>['aria-errormessage'];
  'aria-label': React.HTMLAttributes<unknown>['aria-label'];
  'aria-labelledby': React.HTMLAttributes<unknown>['aria-labelledby'];
  id: GlobalAttrProps['id'];
  required: IFieldAttrs['required'];
  size: TFieldSize;
  status: TFieldStatus;
  [key: string]: unknown;
}>;

export interface IField
  extends MouseEventAttrProps,
    StyledOverloadCssProps,
    StyledPolymorphicProps,
    Pick<GlobalAttrProps, 'tooltip' | 'role'>,
    WithRequired<GlobalAttrProps, 'id'>,
    Pick<IFieldAttrs, 'disabled' | 'required'>,
    Pick<FieldLabelDistributorProps, 'direction'> {
  /** Children of the Field, usually a form control as InputControl, SelectControl... etc. */
  children: TFieldChildren;
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
  /** Label for the field (aria-label is the same as Label) */
  label: React.ReactNode;
  /** Position of the label text relative to the field control. The position 'right' for the label is only recommended for checkbox and radio controls. */
  labelPosition?: TLabelPosition;
  /** The title to be shown on hover of the required marker of the Field._ */
  requiredMarkTooltip?: FieldRequiredMarkProps['tooltip'];
  /** Size of the field and its internal components: height, padding, font-size... etc. */
  size?: TFieldSize;
  /** This property defines the status color scheme for the Field. */
  status?: TFieldStatus;
}
