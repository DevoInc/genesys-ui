import * as React from 'react';

import type { ChipProps } from '../Chip';
import type {
  TBaseSize,
  TControlWidth,
  TFieldStatus,
} from '../../declarations/commonProps';

export type TSelectOption =
  | {
      readonly isSeparator: boolean;
      readonly value?: never;
      readonly label?: never;
      readonly description?: never;
      readonly icon?: never;
      readonly prependContent?: never;
      readonly bold?: never;
      readonly fixed?: never;
      readonly isDisabled?: never;
      readonly tooltip?: never;
    }
  | {
      readonly isSeparator?: never;
      readonly value: string | number;
      readonly label: string;
      readonly description?: React.ReactNode;
      readonly icon?: React.ReactNode;
      readonly prependContent?: React.ReactNode;
      readonly bold?: boolean;
      readonly fixed?: boolean;
      readonly isDisabled?: boolean;
      readonly tooltip?: string;
    };

export interface ICommonSelectCmps {
  /** Fixed block of content at the beginning of the select */
  addonToLeft?: React.ReactNode;
  /** Fixed block of content at the end of the select */
  addonToRight?: React.ReactNode;
  /** Align menu options to left, right or center (Own property) */
  alignOptions?: React.CSSProperties['textAlign'];
  /** Custom chip size. This attribute has control over chips size  */
  chipSize?: ChipProps['size'];
  /** If the status icon which is shown automatically based on the status is
   * hidden. Usually when the InputControl is related with a validation helper
   * to avoid redundancy. */
  hideStatusIcon?: boolean;
  /** Level of the menu */
  menuLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Menu without border, margin, box-shadow... etc. */
  menuQuiet?: boolean;
  /** Whether the menu is display relative or absolute */
  menuRelative?: boolean;
  /** Maximum width of the menu */
  maxMenuWidth?: React.CSSProperties['maxWidth'];
  /** Minimum width of the menu */
  minMenuWidth?: React.CSSProperties['minWidth'];
  /** Show select all button when select is multi */
  selectAllBtn?: boolean;
  /** Predefined width of the select. It should reflect the length of the
   * content you expect the user to enter */
  selectWidth?: TControlWidth;
  /** Size of the input: height, padding, font-size... etc. */
  size?: TBaseSize;
  /** Allow sorting options in a multivalue select */
  sortable?: boolean;
  /** This property defines the status color schema for the input */
  status?: TFieldStatus;
  /** This property defines whether the component is read-only */
  readOnly?: boolean;
  /** If it's set to true then the portal for dropdown menu is appended
   * to body*/
  menuAppendToBody?: boolean;
  /** Tooltip text */
  tooltip?: string;
  /** Allow the user to edit values */
  creatable?: boolean;
  /** Enable virtualization for select options. Useful for large lists */
  virtualizeOptions?: boolean;
  multipleSubtle?: boolean;
}
