import type { ChipProps } from '..';
import * as React from 'react';

import { BaseSize, FieldControlWidth, FieldStatus } from '../../declarations';

export type SelectOption = {
  readonly value: string | number;
  readonly label: string;

  readonly icon?: string;
  readonly bold?: boolean;
  readonly fixed?: boolean;
};

export interface CommonSelectCmpsProps {
  /** Fixed block of content at the beginning of the select */
  addonToLeft?: React.ReactNode;
  /** Fixed block of content at the end of the select */
  addonToRight?: React.ReactNode;
  /** Align menu options to left, right or center (Own property) */
  alignOptions?: React.CSSProperties['textAlign'];
  /** Custom chip size. This attribute has control over chips size  */
  chipSize?: ChipProps['size'];
  /** Level of the menu */
  menuLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Menu without border, margin, box-shadow... etc. */
  menuQuiet?: boolean;
  /** Whether the menu is display relative or absolute */
  menuRelative?: boolean;
  /** Minimum width of the menu */
  minMenuWidth?: React.CSSProperties['minWidth'];
  /** Show select all button when select is multi */
  selectAllBtn?: boolean;
  /** Predefined width of the select. It should reflect the length of the content you expect the user to enter */
  selectWidth?: FieldControlWidth;
  /** Size of the input: height, padding, font-size... etc. */
  size?: BaseSize;
  /** Allow sorting options in a multivalue select */
  sortable?: boolean;
  /** This property defines the status color schema for the input */
  status?: FieldStatus;
  /** This property defines whether the component is read-only */
  readOnly?: boolean;
  /** If it's set to true then the portal for dropdown menu is appended
   * to body*/
  menuAppendToBody?: boolean;
  /** Tooltip text */
  'data-tip'?: string;
  /** Allow the user to edit values */
  creatable?: boolean;
}