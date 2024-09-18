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
  | 'heading'
  | 'hero'
  | 'lead'
  | 'mono'
  | 'overline';
export type TTypoColorScheme =
  | TBodyColorScheme
  | TUIColorScheme
  | TUIStrongColorScheme
  | TUIWeakColorScheme;

export type TTypographyFormat =
  | 'action-xxs'
  | 'action-xs'
  | 'action-sm'
  | 'action-md'
  | 'action-lg'
  | 'action-xl'
  | 'body-xxs'
  | 'body-xs'
  | 'body-sm'
  | 'body-md'
  | 'body-lg'
  | 'heading-h1'
  | 'heading-h2'
  | 'heading-h3'
  | 'heading-h4'
  | 'heading-h5'
  | 'heading-h6'
  | 'hero-sm'
  | 'hero-md'
  | 'hero-lg'
  | 'lead-sm'
  | 'lead-md'
  | 'lead-lg'
  | 'mono-sm'
  | 'mono-md'
  | 'mono-lg'
  | 'overline-sm'
  | 'overline-md'
  | 'overline-lg';

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
  /** The number of lines before get truncated text with overflow to ellipsis
   * (Css line-clamp property). */
  truncateLine?: number;
  /** Definition of variant and size in the same value: hero-sm, heading-h1,
   * body-sm... etc. */
  format?: TTypographyFormat;
  bold?: boolean;
}
