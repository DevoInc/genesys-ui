import type { AriaAttributes } from 'react';

/** ---------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------
 * Common declarations for accessibility
 * ----------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------- */

/** ---------------------------------------------
 * Common aria declarations for all components
 * --------------------------------------------- */
export interface IGlobalAriaAttrs
  extends Pick<
    AriaAttributes,
    | 'aria-describedby'
    | 'aria-details'
    | 'aria-hidden'
    | 'aria-label'
    | 'aria-labelledby'
  > {}

/** ---------------------------------------------
 * Common aria declarations for layout components
 * - Box
 * - Flex
 * - ...
 * --------------------------------------------- */
export interface ILayoutAriaAttrs
  extends Pick<
    AriaAttributes,
    | 'aria-controls'
    | 'aria-expanded'
    | 'aria-live'
    | 'aria-modal'
    | 'aria-atomic'
    | 'aria-busy'
    | 'aria-multiselectable'
    | 'aria-relevant'
    | 'aria-setsize'
  > {}

/** ---------------------------------------------
 * Common aria declarations for text box components
 * - Textarea
 * - Input
 * --------------------------------------------- */
export interface ITextBoxAriaAttrs
  extends Pick<
    AriaAttributes,
    | 'aria-activedescendant'
    | 'aria-autocomplete'
    | 'aria-invalid'
    | 'aria-multiline'
    | 'aria-placeholder'
    | 'aria-readonly'
  > {}

/** ---------------------------------------------
 * Common aria declarations for check components
 * - Checkbox
 * - Radio
 * --------------------------------------------- */
export interface ICheckAriaAttrs extends Pick<AriaAttributes, 'aria-checked'> {}

/** ---------------------------------------------
 * Common aria declarations for table components
 * - Table
 * --------------------------------------------- */
export interface ITableAriaAttrs
  extends Pick<
    AriaAttributes,
    | 'aria-colcount'
    | 'aria-colindex'
    | 'aria-colspan'
    | 'aria-rowcount'
    | 'aria-rowindex'
    | 'aria-rowspan'
    | 'aria-sort'
  > {}

/** ---------------------------------------------
 * Common aria declarations for drag&drop components
 * - ...
 * --------------------------------------------- */
export interface IDragAndDropAriaAttrs
  extends Pick<AriaAttributes, 'aria-dropeffect' | 'aria-grabbed'> {}

/** ---------------------------------------------
 * Common aria declarations for range components
 * - Range
 * - Input type range
 * --------------------------------------------- */
export interface IRangeAriaAttrs
  extends Pick<
    AriaAttributes,
    | 'aria-valuemax'
    | 'aria-valuemin'
    | 'aria-valuenow'
    | 'aria-valuetext'
    | 'aria-labelledby'
  > {}

/** ---------------------------------------------
 * Common aria declarations for triggers
 * - Button
 * - IconButton
 * - Chip
 * - ...
 * --------------------------------------------- */
export interface ITriggerAriaAttrs
  extends Pick<
    AriaAttributes,
    | 'aria-controls'
    | 'aria-disabled'
    | 'aria-expanded'
    | 'aria-haspopup'
    | 'aria-keyshortcuts'
    | 'aria-pressed'
    | 'aria-selected'
  > {}

/** ---------------------------------------------
 * Common aria declarations for navigation props
 * - MenuItem
 * - ...
 * --------------------------------------------- */
export interface INavigationAriaAttrs
  extends Pick<AriaAttributes, 'aria-current'> {}

/** ---------------------------------------------
 * Common aria declarations for field components
 * - Input
 * - Select
 * - Switch
 * - ...
 * --------------------------------------------- */
export interface IFieldAriaAttrs
  extends Pick<
    AriaAttributes,
    'aria-errormessage' | 'aria-required' | 'aria-invalid'
  > {}

/** ---------------------------------------------
 * Common aria declarations for tree components
 * --------------------------------------------- */
export interface ITreeAriaAttrs extends Pick<AriaAttributes, 'aria-level'> {}

/** ---------------------------------------------
 * Common interface with required aria-label or aria-labelledby. Always there has to be defined one,
 * but not both at the same time.
 * --------------------------------------------- */
export type IWithRequiredAriaLabelOrAriaLabelledByAttr<T> = (
  | {
      'aria-label': IGlobalAriaAttrs['aria-label'];
      'aria-labelledby'?: string;
    }
  | {
      'aria-label'?: string;
      'aria-labelledby': IGlobalAriaAttrs['aria-label'];
    }
) &
  Omit<T, 'aria-label' | 'aria-labelledby'>;
