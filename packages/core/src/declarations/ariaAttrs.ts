/* eslint-disable @typescript-eslint/no-empty-interface */
import type { AriaAttributes } from 'react';

/** ---------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------
 * Common declarations for accessibility
 * ----------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------- */

/** ---------------------------------------------
 * Common aria declarations for all components
 * --------------------------------------------- */
export interface GlobalAriaProps
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
export interface LayoutAriaProps
  extends Pick<
    AriaAttributes,
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
export interface TextBoxAriaProps
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
export interface CheckAriaProps extends Pick<AriaAttributes, 'aria-checked'> {}

/** ---------------------------------------------
 * Common aria declarations for table components
 * - Table
 * --------------------------------------------- */
export interface TableAriaProps
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
export interface DragAndDropAriaProps
  extends Pick<AriaAttributes, 'aria-dropeffect' | 'aria-grabbed'> {}

/** ---------------------------------------------
 * Common aria declarations for range components
 * - Range
 * - Input type range
 * --------------------------------------------- */
export interface RangeAriaProps
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
export interface TriggerAriaProps
  extends Pick<
    AriaAttributes,
    | 'aria-controls'
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
export interface NavigationAriaProps
  extends Pick<AriaAttributes, 'aria-current'> {}

/** ---------------------------------------------
 * Common aria declarations for field components
 * - Input
 * - Select
 * - Switch
 * - ...
 * --------------------------------------------- */
export interface FieldAriaProps
  extends Pick<
    AriaAttributes,
    'aria-errormessage' | 'aria-required' | 'aria-invalid'
  > {}

/** ---------------------------------------------
 * Common aria declarations for tree components
 * --------------------------------------------- */
export interface TreeAriaProps extends Pick<AriaAttributes, 'aria-level'> {}

/** ---------------------------------------------
 * Common interface with required aria-label or aria-labelledby. Always there has to be defined one,
 * but not both at the same time.
 * --------------------------------------------- */
export type WithRequiredAriaLabelOrAriaLabelledByProps<T> = (
  | {
      'aria-label': GlobalAriaProps['aria-label'];
      'aria-labelledby'?: string;
    }
  | {
      'aria-label'?: string;
      'aria-labelledby': GlobalAriaProps['aria-label'];
    }
) &
  Omit<T, 'aria-label' | 'aria-labelledby'>;
