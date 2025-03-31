import * as React from 'react';
import { WithRequired } from '../../typeFunctions';
import type {
  TBaseSize,
  TFieldStatus,
  TControlWidth,
} from '../../declarations/commonProps';
import type {
  IGlobalAttrs,
  IFieldAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  IDataAttrs,
} from '../../declarations';

export type TFieldSize = TBaseSize;
export type TTagGroupLabelPosition = 'top' | 'left' | 'between' | 'right';
export type TFieldDirection = 'between' | 'row' | 'column' | 'reverse';
export type TFieldAddonPosition = 'left' | 'right';

export type TFieldChildren = React.ReactElement<{
  'aria-describedby': React.HTMLAttributes<unknown>['aria-describedby'];
  'aria-errormessage': React.HTMLAttributes<unknown>['aria-errormessage'];
  'aria-label': React.HTMLAttributes<unknown>['aria-label'];
  'aria-labelledby': React.HTMLAttributes<unknown>['aria-labelledby'];
  id: IGlobalAttrs['id'];
  required: IFieldAttrs['required'];
  size: TFieldSize;
  status: TFieldStatus;
  [key: string]: unknown;
}>;

export interface IField
  extends IMouseEventAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic,
    IDataAttrs,
    Pick<IGlobalAttrs, 'tooltip' | 'role'>,
    WithRequired<IGlobalAttrs, 'id'>,
    Pick<IFieldAttrs, 'disabled' | 'required'> {
  /** Children of the Field, usually a form control as InputControl,
   * SelectControl... etc. */
  children: TFieldChildren;
  /** Field control predefined width for Input, Select… etc. */
  controlWidth?: TControlWidth;
  /** The direction of the field based in the desired label position: to the
   * left (row), to the top (column... etc.)*/
  direction?: TFieldDirection;
  /** The tooltip for the FloatingHelper trigger. */
  floatingHelperTooltip?: IGlobalAttrs['tooltip'];
  /** If the Helper is rendered as a floating element displayed by clicking a
   * trigger. */
  hasFloatingHelper?: boolean;
  /** If the field control is rendered filling all the available space (e.g.
   * Input component) or only its own width (e.g. Switch component). */
  hasWideControl?: boolean;
  /** The message for the Helper: it's displayed as extra info to fill the form
   * or the field or as status message if there are error, warning or success
   * contexts. */
  helper?: React.ReactNode;
  /** Make the label not visible, but still accessible. Anyway aria-label always
   * exits in input control. */
  hideLabel?: boolean;
  /** Label for the field (aria-label is the same as Label) */
  label: React.ReactNode;
  /** Position of the label text relative to the field control. The position
   * 'right' for the label is only recommended for checkbox and radio controls. */
  labelPosition?: TTagGroupLabelPosition;
  /** The title to be shown on hover of the required marker of the Field._ */
  requiredMarkTooltip?: IGlobalAttrs['tooltip'];
  /** Size of the field and its internal components: height, padding,
   * font-size... etc. */
  size?: TFieldSize;
  /** This property defines the status color scheme for the Field. */
  status?: TFieldStatus;
}

export interface IFieldStyled {
  /** If the addon belongs to a disabled field (transient prop version) */
  $disabled?: IField['disabled'];
  /** Size of the field and its internal components: height, padding,
   * font-size... etc. */
  $size?: IField['size'];
  /** The position on the form field */
  $position?: TFieldAddonPosition;
}
