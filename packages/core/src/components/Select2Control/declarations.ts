import type { ChipProps } from '../';
import * as React from 'react';

import { FieldControlWidth, FieldStatus } from '../../declarations';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface CustomSelectProps {
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
  size: SelectSize;
  /** Allow sorting options in a multivalue select */
  sortable?: boolean;
  /** This property defines the status color schema for the input */
  status?: FieldStatus;
}

export type SingleValue =
  | { label: string; value: any; [key: string]: any }
  | string
  | number
  | null;
export type MultiValue = SingleValue[];
export type Value = SingleValue | MultiValue;

export type SingleOption = { label: string; value: any; [key: string]: any };
export type OptionGroup = { label: string; options: SingleOption[] };
