import * as React from 'react';

import type { TTypoBodySize } from '../../declarations';
import type {
  TBodyColorScheme,
  TUIColorScheme,
  TUIStrongColorScheme,
  TUIWeakColorScheme,
  TCommonSpacing,
  TCmpSpacing,
} from '../../declarations';

export type TGutterBottom = TCommonSpacing | TCmpSpacing;
export type THeadingType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'hero-sm'
  | 'hero-md'
  | 'hero-lg'
  | 'overline-sm'
  | 'overline-md'
  | 'overline-lg';
export type TListStyle = 'none' | 'ordered' | 'unordered';
export type TTypoCategories =
  | 'action'
  | 'body'
  | 'overline'
  | 'heading'
  | 'hero'
  | 'lead'
  | 'mono';
export type TTypoColorScheme =
  | TBodyColorScheme
  | TUIColorScheme
  | TUIStrongColorScheme
  | TUIWeakColorScheme;

export interface ITypography {
  /** This property defines multiple styles: font-size, line-height... etc. */
  bodySize?: TTypoBodySize;
  /** Pre-defined color scheme for the text: base, weak, error... etc. */
  colorScheme?: TTypoColorScheme;
  /** Bottom margin to separate from another components. */
  gutterBottom?: TGutterBottom;
  /** This property defines multiple styles: font-size, line-height... etc. */
  headingSize?: THeadingType;
  /** Css List style type. */
  listStyle: TListStyle;
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** The number of lines before get truncated text with overflow to ellipsis (Css line-clamp property). */
  truncateLine?: number;
}
